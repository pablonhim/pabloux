# CLAUDE.md

Guidelines for working on this repository. This site is **Pablo UX**, the
product / UX design studio brand of **Nhim Chanborey**. Follow these rules
strictly for any UI, copy, or content changes.

## Persona

- **Brand:** Pablo UX
- **Person behind it:** Nhim Chanborey — Product & UX Design Studio
- Voice: confident, precise, outcome-driven. Speak like an operator who ships
  products, not a marketer. Prefer concrete metrics over adjectives.
- The brand name is "Pablo UX" (hero wordmark, header ghost link, footer).
  The real contact, case studies, and bio underneath are Chanborey's own.

## Design System — Gallery on Putty Paper

Warm, flat, restrained, authoritative. A putty-beige canvas alternating with
pitch-black rooms — no gradients, no shadows, almost no color. Depth comes
from section cuts and type scale, not elevation. Treat this as the single
source of truth for color/type usage; do not introduce anything outside it
without updating this file.

| Token | Value | Usage |
|---|---|---|
| `--putty` | `#C4C3B6` | Default page canvas for light sections |
| `--ink` | `#000000` | Dark section canvas (Gallery, cards, modals); borders on light sections |
| `--bone` | `#E7E5E4` | Elevated light surfaces (Store section background) |
| `--chalk` | `#EBEBEB` | Lightest tier — footer, FAQ section base |
| `--vellum` | `#DFDCD5` | Hairline borders on the light canvas |
| `--graphite` | `#595855` | Muted secondary text on light sections |
| `--ash` | `#808080` | Image-placeholder backgrounds only (circular vignettes) |
| `--paper` | `#FFFFFF` | Text/icons on dark sections, button fills on Ink cards |

Rules:
- **No saturated color, ever.** Every past accent color (crimson, electric
  blue) is retired. Emphasis comes from italics, size, or weight — never a
  colored word or colored button.
- **No shadows, no gradients.** Every surface is flat. Depth = alternating
  Putty/Ink sections, nothing else.
- **Corners are deliberate, not default:** cards use `9px`, links `2px`,
  buttons/pills `28.8px`. Never reach for Tailwind's default radius scale
  (`rounded-lg`, `rounded-xl`, etc.) — use the exact values above.
- **No modern digital illustration or stock imagery.** Where the reference
  system calls for classical-painting imagery and none exists yet, use a
  flat `--ash` placeholder (see Gallery) — never a fabricated icon/graphic
  standing in for a photo, and never stock photography.

## Typography — Two Typefaces Only

- **`font-davinci`** (Playfair Display, standing in for a licensed "Davinci"
  serif) — the brand voice. Display and heading duty ONLY: the cropped hero
  wordmark, section headings, card/product titles, modal headings. Never
  drops below ~24px. Tight negative letter-spacing at large sizes
  (`-0.02em` as a working default) so headings read as one carved shape.
- **`font-sans`** (Inter, standing in for "Helvetica Now") — utility grotesk
  for everything else: nav, body copy, buttons, labels, stats, captions.
  Stays small (11–16px). Never takes display duty.
- Serif is for moments; grotesk is for systems. Don't let them compete on
  the same line of text.

## Full Page Layout

Full-bleed sections, no `max-w-*` mx-auto page shell — content breathes
edge-to-edge, only inner content clusters get a max-width. Order:

1. **Header** — minimal, ~48px row: a circled monogram ("P") top-left
   linking home, one ghost text link ("Pablo UX" → `#contact`) top-right.
   No visible nav bar — this is a scroll-through single narrative, not a
   nav-driven page.
2. **Hero** — Putty canvas, full `100svh`. A small centered cluster floats
   in the upper half (eyebrow, `font-davinci` headline with one italicized
   clause, a stat-pair line, a black pill CTA). The lower half is anchored
   by the monumental "Pablo UX" wordmark in `font-davinci` — sized to
   intentionally overflow/crop at the viewport edges (wrapped in
   `overflow-hidden`, never causing real document scroll — verify with a
   `scrollWidth`/`clientWidth` check after any size change).
3. **Gallery ("Selected Enterprise Case Studies")** — full-width **Ink**
   room. Centered `font-davinci` heading, then the four case studies as
   circular vignettes (`--ash` placeholder circle — swap for a real
   licensed image once available, never a fabricated graphic) with a serif
   caption above and a small hexagon indicator below. Click opens the spec
   modal (also Ink/Paper).
4. **Digital Asset Store** — **Bone** canvas. Products as notched Ink cards
   (`clip-path` corner cuts, not `border-radius` — see `ProductCard.tsx`
   for the exact polygon), Paper pill checkout button, wired to the Bakong
   KHQR modal.
5. **Process** — Putty canvas, 4 steps, `font-davinci` numbers, hexagon
   connectors between steps at the `lg` breakpoint.
6. **FAQ ("Notes")** — **Chalk** canvas. Plain wall-label treatment: serif
   question, grotesk answer, hairline Vellum dividers. Content in
   `src/data/faq.ts` must always be Chanborey's own real answers.
7. **Contact** — Putty canvas, centered, serif headline with one italicized
   (not colored) word, a plain underline-on-hover email link.
8. **Footer** — Chalk tier: copyright, availability line, live GMT+7 clock.

### On matching reference styles (Neutomni, Structured/mxBTC)

Two external sites have informed this system's structure and visuals over
time. Both times the rule is the same: **style and structure only, never
their business content.** Never port a reference site's real team names,
client names/case studies, testimonials, pricing, contact details, product
names, or branding onto this site. Every section here uses Pablo UX /
Chanborey's own real information, or is left as an explicitly-marked
placeholder in `src/data/` — never a fabricated testimonial, client, or
brand element attributed to a real name.

### Bakong KHQR Checkout

A modal (Ink-surfaced, matching the card system) that captures the buyer's
email, generates a Bakong KHQR payment QR code for the selected store item,
polls for payment confirmation, and on success triggers an automated file
download plus a download-link email. The real payment confirmation must
come from a server-side webhook (Bakong sends the confirmation to the
backend, not the browser) — the frontend only polls an internal status
endpoint. See `api/README.md` for the integration contract and what is
stubbed (`src/api/checkout.ts`, `DEMO_MODE`) vs. production-ready.

## Code conventions

- React + TypeScript, function components only, no class components.
- Tailwind CSS v4 (CSS-first config via `@theme` in `src/index.css`) — do
  not add a `tailwind.config.js` unless a JS-level config becomes
  necessary.
- Framer Motion for animation/transitions; keep it to the shared
  `fadeInUp`/`fadeInUpViewport` scroll-in variant (`src/lib/motion.ts`) —
  this system's drama is typographic, not motion-driven. No 3D tilt, no
  parallax, no scroll-jacking.
- Keep mock/demo content clearly separated in `src/data/` so it's obvious
  what's placeholder content vs. real copy.
