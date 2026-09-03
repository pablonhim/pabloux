# CLAUDE.md

Guidelines for working on this repository. This site is **Pablo UX**, the
product / UX design studio brand of **Nhim Chanborey**. Follow these rules
strictly for any UI, copy, or content changes.

## Persona

- **Brand:** Pablo UX
- **Person behind it:** Nhim Chanborey — Product & UX Design Studio
- Voice: confident, precise, outcome-driven. Speak like an operator who ships
  products, not a marketer. Prefer concrete metrics over adjectives.
- Every piece of copy should read as if written by a senior PO addressing
  other product/engineering leaders — no fluff, no filler adjectives.
- The brand name is "Pablo UX" (wordmark, footer, `<title>`). The real
  contact, case studies, and bio underneath are Chanborey's own — never
  invent a separate fictional team or persona for the brand.

## Design System — Bright, Immersive, Minimal-3D

Stark, high-contrast, playful-but-restrained. A pure-white canvas punctuated
by dark, high-density cards — not a dark-mode site. Treat this as the single
source of truth for color usage; do not introduce new colors outside this
palette without updating this file.

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#FFFFFF` | Page canvas. Stark white — never a soft gray. |
| `--surface` | `#07070D` | Dark high-contrast cards (gallery, store receipts, modals) — a hair of blue undertone |
| `--surface-hover` | `#101018` | Hover state on dark cards |
| `--border` | `#262626` | Hairline borders (1px) — reads on both white and dark surfaces |
| `--electric` | `#0057FF` | Brand accent — the wordmark, headlines, live indicators, links, 3D-tilt glow |
| `--ink` | `#111111` | Body copy and mono metadata on the white canvas |
| `--accent` | `#FFFFFF` | Primary button fill *on dark cards* (same value as `--bg`) — pair with `text-ink` for the label, never `text-bg`/white-on-white |

Rules:
- The page canvas is always stark white (`#FFFFFF`). Never introduce a soft
  gray background for the main canvas.
- Electric blue (`#0057FF`) is the *only* brand accent color — wordmark,
  headline keywords, active/live indicators, link hovers, the gallery's
  hover glow. Do not add a second brand color.
- Gallery cards, store receipts, and modals are dark (`--surface`) for
  contrast against the white canvas — body text on them is white/white-`60`
  opacity, never `--ink` (which is for the light canvas only).
- Borders are thin (1px) — used to separate cards/sections, not to decorate
  them.
- No rounded corners, no drop shadows. Depth comes from the white/black
  contrast and the 3D tilt interaction (see Gallery below), not soft UI
  chrome or gradients.

## Typography

- **Display wordmark only:** `font-display` (`Bebas Neue`) — tall, condensed,
  uppercase. Used exclusively for the "PABLO UX" header wordmark, full
  viewport width. Never use it for body copy or section headings.
- **Headings / body:** `Inter` or `Plus Jakarta Sans` (`font-sans`), loaded
  via Google Fonts with weights up to `900`.
- **Editorial accent pairing:** a headline's second line/clause switches to
  `font-serif` italic, normal weight, in `--ink` — the electric-sans /
  black-serif-italic pairing is a signature move, not a one-off (see Hero).
  `font-serif` resolves to `Source Serif 4` (Google Fonts).
- **Metadata / badges / tags:** monospace (`font-mono`, JetBrains Mono) —
  used for nav links, corner metadata, case-study/product ID tags
  (`PKG/FIN.01`, `NEU/PKG.01`), prices, and timestamps. Pure black/`--ink`
  on the white canvas, white on dark cards.
- Never mix: headings/body copy must never use `font-mono` or `font-display`,
  and badges/metadata must never use the sans-serif family.

## Full Page Layout

Sections appear in this order, matching the header nav (Case Studies →
Digital Store → Process → FAQ → Contact):

1. **Header** — a giant edge-to-edge display wordmark ("PABLO UX"),
   `font-display` (Bebas Neue), uppercase, electric blue, zero line-height,
   calibrated via `clamp()` to span full width without overflowing at any
   breakpoint (re-check this whenever the wordmark text changes — condensed
   display fonts need a much larger `vw` multiplier than a regular sans).
   A minimal, un-padded nav row sits directly beneath it: title left,
   `Case Studies | Digital Store | Process | FAQ | Contact` center, email
   right. Directly below sits a `MarqueeDivider` — a thin, continuously
   scrolling strip of digits (decorative texture only, no copy).
2. **Hero** — asymmetrical: headline copy sits on a 12-column grid, pushed
   right to start around column 6/7, never centered. Dual-font headline
   (electric sans-black first line, black serif-italic second line),
   followed by a mono "equation" tagline (`Strategy + Execution + AI =
   Shipped Product`, electric operators). Fixed corner metadata pinned to
   the bottom of the hero viewport: local time (live GMT+7 clock) +
   location bottom-left, a pulsing electric "available for strategy
   contracts" indicator bottom-right — stacked vertically instead of
   side-by-side below the `sm` breakpoint so they never overlap.
3. **Gallery ("Selected Enterprise Case Studies")** — the site's showcase
   moment. An image-led grid, always in this order:
   - `PKG/FIN.01` Enterprise B2B Multi-Bank Platform
   - `PKG/LOG.02` OTO Delivery — Multi-Pin Routing
   - `PKG/ECO.03` PlasFoodDou Eco-Rewards
   - `PKG/SVC.04` Home Service Booking Platform
   Each card is cover art (`CoverArt.tsx`, a generative abstract motif per
   project — swap for real screenshots in `src/data/caseStudies.ts` once
   available; never fabricate a fake product screenshot) plus a title/
   one-liner below it. Interaction is the point here: a subtle cursor-follow
   3D tilt (`GalleryCard.tsx`, ±8° max, spring-damped — restrained, not a
   gimmick) and a matching electric radial glow that follows the pointer.
   On scroll-in, cards use the `revealTilt` variant (`src/lib/motion.ts`) —
   a small perspective settle (rotateX 8°→0, scale 0.96→1) rather than the
   plain fade-up used elsewhere, for the "immersive but minimal" scroll
   feel. Clicking a card opens the existing spec modal (role, overview,
   highlights, stack).
4. **Digital Asset Store** — "tear-off receipt" packages: dark cards with a
   centered `border-dashed` horizontal divider (labeled
   `✂ Tear along line` in mono micro-copy) and punched circle notches (cut
   into the card edges using the page's `--bg` color), a mono ID tag
   (`NEU/PKG.0x`), price ($29–$49), and a white checkout button
   (`bg-accent text-ink`) wired to the Bakong KHQR checkout modal.
5. **Process** — a short 4-step editorial breakdown of how engagements run,
   light canvas, bold ink numbers with electric accents, connected by small
   electric arrow icons between steps at the `lg` breakpoint.
6. **FAQ** — styled as a code editor file: a dark `--surface` panel with a
   `FAQ.md` file-tab header, questions rendered as mono `# Question`
   headings in electric blue, answers in mono white/70, separated by dashed
   rules. Content in `src/data/faq.ts` must always be Chanborey's own real
   answers — never fabricated.
7. **Contact** — light canvas, bold headline with one electric word, an
   electric-underlined mono email link (not a boxed button — a white button
   would vanish against the white canvas here).
8. **Footer** — a mono copyright line ("Pablo UX — by Nhim Chanborey") plus
   a live GMT+7 clock.

### Scroll & 3D interaction rules ("immersive, minimal")

- Default section entrance is still the plain `fadeInUp` (opacity 0→1, y
  20px→0px, `src/lib/motion.ts`) — most of the page stays minimal.
- The Gallery is the one place that earns extra motion: `revealTilt` on
  scroll-in, plus per-card cursor-follow 3D tilt on hover. Keep tilt ranges
  small (≤10°) and spring-damped so it reads as tactile, not dizzying.
- Don't add scroll-jacking, full-page parallax, or heavy 3D anywhere else —
  "minimal" is the constraint, not a suggestion.

### On matching neutomni.com

Some structural/visual devices (tear-off receipt UI, mono ID tags, digit
marquee, equation taglines, FAQ-as-code-file) were originally inspired by
neutomni.com's aesthetic and interaction patterns. That inspiration is
style/structure only. Never port neutomni.com's actual business content onto
this site: no their team names, client names/case studies, testimonials,
pricing, contact details, or branding. Every section here uses Pablo UX /
Nhim Chanborey's own real information, or is left as an explicitly-marked
placeholder in `src/data/` until real content exists — never a fabricated
testimonial or client attributed to a real name.

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
  section-entry animation — see `src/lib/motion.ts` for the shared variant,
  and `revealTilt`/`revealTiltViewport` for the Gallery's 3D variant.
- Keep mock/demo content clearly separated in `src/data/` so it's obvious
  what's placeholder content vs. real copy.
