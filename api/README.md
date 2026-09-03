# KHQR checkout API contract

This folder documents the backend endpoints the checkout modal
(`src/components/CheckoutModal.tsx` via `src/api/checkout.ts`) is built
against. **They are stubs, not deployed code** — this repo is a static Vite
app with no server runtime. Implement these on whatever backend you deploy
(Vercel functions, a small Node/Express service, etc.) and flip
`DEMO_MODE = false` in `src/api/checkout.ts`.

Why a backend is required: Bakong confirms payment by calling **your**
server (a webhook), not the customer's browser. The frontend must never be
the source of truth for "paid" — it only polls a status endpoint that
reflects what the webhook recorded.

## `POST /api/khqr/generate`

Create a pending order and return a KHQR payload to render as a QR code.

Request:
```json
{ "productId": "prd-sprint-pack", "email": "buyer@company.com" }
```

Response:
```json
{
  "orderId": "NTM-XXXXXX",
  "khqrPayload": "00020101021229...6304ABCD",
  "khqrMd5": "9e107d9d372bb6826bd81d3542a419d6",
  "amount": 19,
  "currency": "USD",
  "expiresAt": 1735689600000
}
```

Server responsibilities:
- Look up the product/price server-side (never trust a client-supplied
  amount).
- Call the Bakong Open API (or your PSP) to generate the real KHQR string
  and MD5/transaction reference, using a server-held `BAKONG_API_TOKEN`.
  `khqrMd5` is the MD5 hash of `khqrPayload` — Bakong's
  check-transaction-by-MD5 endpoint uses it as the lookup key, so store it
  alongside the order.
- Persist the order as `pending` keyed by `orderId`, along with the buyer's
  email for the confirmation send.

## `POST /api/khqr/webhook`

Bakong calls this endpoint when a payment completes. Verify the signature
using `BAKONG_WEBHOOK_SECRET` before trusting the payload, then:
1. Mark the matching order `paid`.
2. Generate a short-lived signed download URL for the purchased asset.
3. Call the email dispatch step below with that URL and the order's email.

## `GET /api/khqr/status?orderId=...`

Polled by the frontend every ~2s while the modal is open.

Response:
```json
{ "status": "pending" }
```
or, once the webhook has fired:
```json
{ "status": "paid", "downloadUrl": "https://.../signed-url" }
```

`status` is one of `pending`, `paid`, `expired`.

## `POST /api/checkout/send-email`

Called by the webhook handler (not directly by the frontend) once an order
is marked paid — delivers the download link to the buyer's inbox.

Request:
```json
{
  "email": "buyer@company.com",
  "productId": "prd-sprint-pack",
  "downloadUrl": "https://.../signed-url"
}
```

Server responsibilities:
- Send via an email provider (Resend, Postmark, SES, etc.) using a
  server-held API key — never call the provider directly from the browser,
  since that would expose the key to every visitor.
- Treat this as best-effort: log and retry/alert on failure rather than
  blocking the webhook response, since the order is already paid either
  way.
