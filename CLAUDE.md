# CLAUDE.md

Guidelines for working on this repository. This site is the personal / product
portfolio of **Nhim Chanborey**. Follow these rules strictly for any UI, copy,
or content changes.

## Persona

- **Name:** Nhim Chanborey
- **Title:** Senior Product Lead & AI Architect
- Voice: confident, precise, outcome-driven. Speak like an operator who ships
  products, not a marketer. Prefer concrete metrics over adjectives.
- Every piece of copy should read as if written by a senior PO addressing
  other product/engineering leaders — no fluff, no filler adjectives.

## Design System — "Neutomni.com Editorial Aesthetic"

Stark, high-contrast, editorial. A pure-white canvas punctuated by dark,
high-density cards — not a dark-mode site. Treat this as the single source
of truth for color usage; do not introduce new colors outside this palette
without updating this file.

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#FFFFFF` | Page canvas. Stark white — never a soft gray. |
| `--surface` | `#0B0B0C` | Dark high-contrast cards (case studies, store receipts, modals) |
| `--surface-hover` | `#17171A` | Hover state on dark cards |
| `--border` | `#262626` | Hairline borders (1px) — reads on both white and dark surfaces |
| `--crimson` | `#D31027` | Brand accent — the wordmark, headlines, live indicators, links |
| `--ink` | `#111111` | Body copy and mono metadata on the white canvas |
| `--accent` | `#FFFFFF` | Primary button fill *on dark cards* (same value as `--bg`, so it reads as "the lightest token in the palette") — pair with `text-ink` for the label, never `text-bg`/white-on-white |

Rules:
- The page canvas is always stark white (`#FFFFFF`). Never introduce a soft
  gray background for the main canvas.
- Crimson (`#D31027`) is the *only* brand accent color — wordmark, headline
  keywords, active/live indicators, link hovers. Do not add a second brand
  color.
- Case study cards, store receipts, and modals are dark (`--surface`) for
  contrast against the white canvas — body text on them is white/white-`60`
  opacity, never `--ink` (which is for the light canvas only).
- Borders are thin (1px) — used to separate cards/sections, not to decorate
  them.
- No rounded corners, no drop shadows. Depth comes from the white/black
  contrast itself, not soft UI chrome.

## Typography

- **Headings / body:** `Inter` or `Plus Jakarta Sans` (`font-sans`), loaded
  via Google Fonts with weights up to `900`. The display wordmark and
  crimson headlines use `font-black` (900).
- **Editorial accent pairing:** a headline's second line/clause switches to
  `font-serif` italic, normal weight, in `--ink` — the crimson-sans /
  black-serif-italic pairing is a signature move, not a one-off (see Hero).
  `font-serif` resolves to `Source Serif 4` (Google Fonts).
- **Metadata / badges / tags:** monospace (`font-mono`, JetBrains Mono) —
  used for nav links, corner metadata, case-study/product ID tags
  (`PKG/FIN.01`, `NEU/PKG.01`), prices, and timestamps. Pure black/`--ink`
  on the white canvas, white on dark cards.
- Never mix: headings/body copy must never use `font-mono`, and
  badges/metadata must never use the sans-serif family.

## Full Page Layout

Sections appear in this order, matching the header nav (Case Studies →
Digital Store → Process → Contact):

1. **Header** — a giant edge-to-edge display wordmark ("CHANBOREY"),
   `font-black`, uppercase, crimson, `clamp(4rem, 15vw, 18rem)`, zero
   line-height. A minimal, un-padded nav row sits directly beneath it:
   title left, `Case Studies | Digital Store | Process | Contact` center,
   email right.
2. **Hero** — asymmetrical: headline copy sits on a 12-column grid, pushed
   right to start around column 6/7, never centered. Dual-font headline
   (crimson sans-black first line, black serif-italic second line). Fixed
   corner metadata pinned to the bottom of the hero viewport: local time
   (live GMT+7 clock) + location bottom-left, a pulsing crimson
   "available for strategy contracts" indicator bottom-right.
3. **Selected Enterprise Case Studies** — four case studies, always in this
   order:
   - `PKG/FIN.01` Enterprise B2B Multi-Bank Platform
   - `PKG/LOG.02` OTO Delivery — Multi-Pin Routing
   - `PKG/ECO.03` PlasFoodDou Eco-Rewards
   - `PKG/SVC.04` Home Service Booking Platform
   Dark high-contrast cards (`--surface`, `border-border`, white text) with
   a crimson mono ID tag and a "View Spec" trigger opening a modal (role,
   overview, highlights, stack) — same dark styling as the card.
4. **Digital Asset Store** — "Neutomni tear-off receipt" packages: dark
   cards with a centered `border-dashed` horizontal divider and punched
   circle notches (cut into the card edges using the page's `--bg` color),
   a mono ID tag (`NEU/PKG.0x`), price ($29–$49), and a white checkout
   button (`bg-accent text-ink`) wired to the Bakong KHQR checkout modal.
5. **Process** — a short 4-step editorial breakdown of how engagements run,
   light canvas, bold ink numbers with crimson accents.
6. **Contact** — light canvas, bold headline with one crimson word, a
   crimson-underlined mono email link (not a boxed button — a white button
   would vanish against the white canvas here).
7. **Footer** — a single mono copyright line.

### Bakong KHQR Checkout

A modal (dark-surfaced, matching the card system) that captures the
buyer's email, generates a Bakong KHQR payment QR code for the selected
store item, polls for payment confirmation, and on success triggers an
automated file download plus a download-link email. The real payment
confirmation must come from a server-side webhook (Bakong sends the
confirmation to the backend, not the browser) — the frontend only polls an
internal status endpoint. See `api/README.md` for the integration contract
and what is stubbed (`src/api/checkout.ts`, `DEMO_MODE`) vs.
production-ready.

## Code conventions

- React + TypeScript, function components only, no class components.
- Tailwind CSS v4 (CSS-first config via `@theme` in `src/index.css`) — do
  not add a `tailwind.config.js` unless a JS-level config becomes
  necessary.
- Framer Motion for animation/transitions. Scroll-driven fade-ins
  (`opacity 0→1`, `y 20px→0px`, via `whileInView`) are the standard
  section-entry animation — see `src/lib/motion.ts` for the shared variant.
- Keep mock/demo content clearly separated in `src/data/` so it's obvious
  what's placeholder content vs. real copy.
