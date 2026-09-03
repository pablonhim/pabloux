# KHQR checkout API contract

This folder documents the backend endpoints the checkout modal
(`src/components/CheckoutModal.tsx` via `src/lib/payment.ts`) is built
against. **They are stubs, not deployed code** — this repo is a static Vite
app with no server runtime. Implement these on whatever backend you deploy
(Vercel functions, a small Node/Express service, etc.) and flip
`DEMO_MODE = false` in `src/lib/payment.ts`.

Why a backend is required: Bakong confirms payment by calling **your**
server (a webhook), not the customer's browser. The frontend must never be
the source of truth for "paid" — it only polls a status endpoint that
reflects what the webhook recorded.

## `POST /api/khqr/generate`

Create a pending order and return a KHQR payload to render as a QR code.

Request:
```json
{ "productId": "prd-sprint-pack" }
```

Response:
```json
{
  "orderId": "NTM-XXXXXX",
  "khqrPayload": "00020101021229...6304ABCD",
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
- Persist the order as `pending` keyed by `orderId`.

## `POST /api/khqr/webhook`

Bakong calls this endpoint when a payment completes. Verify the signature
using `BAKONG_WEBHOOK_SECRET` before trusting the payload, then mark the
matching order `paid` and generate a short-lived signed download URL for
the purchased asset.

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
