# CLAUDE.md

Guidelines for working on this repository. This site is the personal / product
portfolio of **Nhim Chanborey**. Follow these rules strictly for any UI, copy,
or content changes.

## Persona

- **Name:** Nhim Chanborey
- **Title:** Senior Product Owner / AI Product Lead
- Voice: confident, precise, outcome-driven. Speak like an operator who ships
  products, not a marketer. Prefer concrete metrics over adjectives.
- Every piece of copy should read as if written by a senior PO addressing
  other product/engineering leaders — no fluff, no filler adjectives.

## Design System — "Neutomni.com Aesthetic"

Dark-mode-first, high-contrast, minimal. Treat this as the single source of
truth for color usage; do not introduce new colors outside this palette
without updating this file.

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#0B0B0C` | Page background |
| `--surface` | `#141416` | Card / panel surfaces |
| `--border` | `#222225` | Hairline borders (1px, never heavier) |
| `--accent` | `#FFFFFF` | Primary accent — buttons, active states, key headlines |
| `--text` | `#EDEDED` | Body text |
| `--text-muted` | `#8A8A8E` | Secondary / metadata text |
| `--success` | `#22C55E` | Live/available status pulse only |

Rules:
- Backgrounds are always near-black. Never use pure black (`#000`) or gray
  tints outside the table above.
- Borders are thin (1px) and low-contrast (`#222225`) — used to separate
  cards/sections, not to decorate them.
- White (`#FFFFFF`) is the *only* accent color for interactive/primary
  elements (buttons, links, active badges). Do not add a second brand color.
- Green (`--success`) is reserved exclusively for "live" / "available"
  status indicators (e.g. the hero availability pulse). Never use it
  decoratively elsewhere.
- Corners: small radius (`rounded-lg`/`rounded-xl`), no heavy shadows —
  depth comes from border + surface contrast, not drop shadows.

## Typography

- **Headings / body:** `Inter` or `Plus Jakarta Sans` (clean geometric
  sans-serif). Loaded via Google Fonts, applied as the default `font-sans`.
- **Metadata / badges / tags:** monospace (`font-mono`) — used for labels
  like client names, dates, ticket IDs, prices, and status codes to create
  a technical, "system-generated" feel contrasted against the sans-serif
  headlines.
- Never mix: headings/body copy must never use `font-mono`, and
  badges/metadata must never use the sans-serif family.

## Features

The site is built around four core sections/features. Keep them in this
order on the homepage:

1. **Hero** — headline + subhead, with an active status badge showing a
   pulsing green dot and the label **"Available for Strategy Contracts"**.
   The pulse must be a real animation (not a static dot).
2. **Case Studies** — four case studies, always in this order:
   - B2B Multi-Bank
   - PlasFoodDou
   - OTO Delivery
   - Home Service
   Each case study card shows client/industry as a `font-mono` badge plus a
   short outcome-driven summary.
3. **Digital Asset Store** — "Neutomni tear-off ticket" packages: product
   cards styled like a perforated ticket stub (dashed tear line, punched
   circle notches), listing PM/PO templates, playbooks, and toolkits for
   sale.
4. **Bakong KHQR Checkout** — a checkout modal that generates a Bakong KHQR
   payment QR code for a selected store item, polls for payment
   confirmation, and on success triggers an automated file download. The
   real payment confirmation must come from a server-side webhook (Bakong
   sends the confirmation to the backend, not the browser) — the frontend
   only polls an internal status endpoint. See `api/README.md` for the
   integration contract and what is stubbed vs. production-ready.

## Code conventions

- React + TypeScript, function components only, no class components.
- Tailwind CSS v4 (CSS-first config via `@theme` in `src/index.css`) — do
  not add a `tailwind.config.js` unless a JS-level config becomes
  necessary.
- Framer Motion for animation/transitions; keep motion subtle (short
  durations, small offsets) to match the minimal aesthetic.
- Keep mock/demo content clearly separated in `src/data/` so it's obvious
  what's placeholder content vs. real copy.
