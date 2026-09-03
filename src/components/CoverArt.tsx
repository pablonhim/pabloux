// Generative abstract cover art for the gallery — no real project
// screenshots exist yet, so each project gets a distinct geometric motif
// instead of a placeholder photo. Swap for real shots in src/data/caseStudies.ts
// once available.

import type { ReactElement } from 'react'

export type CoverVariant = 'grid' | 'route' | 'rings' | 'blocks'

function GridMotif() {
  return (
    <svg viewBox="0 0 300 220" className="h-full w-full">
      <defs>
        <pattern id="grid-lines" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0 H0 V24" fill="none" stroke="#0057FF" strokeOpacity="0.25" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="300" height="220" fill="url(#grid-lines)" />
      {[
        [24, 48, 48, 24],
        [96, 96, 72, 48],
        [192, 24, 48, 96],
        [24, 144, 96, 48],
        [216, 144, 60, 48],
      ].map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} fill="#0057FF" fillOpacity={i === 2 ? 0.9 : 0.15} />
      ))}
    </svg>
  )
}

function RouteMotif() {
  return (
    <svg viewBox="0 0 300 220" className="h-full w-full">
      <path
        d="M20 190 C 80 190, 60 90, 130 90 S 200 30, 280 40"
        fill="none"
        stroke="#0057FF"
        strokeWidth="2"
        strokeDasharray="2 10"
        strokeLinecap="round"
        opacity="0.6"
      />
      {[
        [20, 190],
        [130, 90],
        [280, 40],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={i === 1 ? 14 : 8} fill="#0057FF" fillOpacity={i === 1 ? 1 : 0.5} />
          {i === 1 && <circle cx={cx} cy={cy} r="24" fill="none" stroke="#0057FF" strokeOpacity="0.4" />}
        </g>
      ))}
    </svg>
  )
}

function RingsMotif() {
  return (
    <svg viewBox="0 0 300 220" className="h-full w-full">
      {[80, 56, 32].map((r, i) => (
        <circle
          key={r}
          cx="150"
          cy="110"
          r={r}
          fill="none"
          stroke="#0057FF"
          strokeOpacity={0.7 - i * 0.15}
          strokeWidth={i === 2 ? 3 : 1.5}
        />
      ))}
      {[[110, 70], [190, 70], [110, 150], [190, 150]].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="10" height="10" fill="#0057FF" fillOpacity="0.8" />
      ))}
    </svg>
  )
}

function BlocksMotif() {
  return (
    <svg viewBox="0 0 300 220" className="h-full w-full">
      {[
        [30, 40, 130, 90, 0.18],
        [110, 90, 130, 90, 0.85],
        [190, 40, 90, 70, 0.3],
      ].map(([x, y, w, h, o], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} rx="6" fill="#0057FF" fillOpacity={o} />
      ))}
    </svg>
  )
}

const motifs: Record<CoverVariant, () => ReactElement> = {
  grid: GridMotif,
  route: RouteMotif,
  rings: RingsMotif,
  blocks: BlocksMotif,
}

export function CoverArt({ variant, code }: { variant: CoverVariant; code: string }) {
  const Motif = motifs[variant]

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface">
      <span
        aria-hidden="true"
        className="absolute -bottom-6 -left-2 select-none font-display text-[7rem] leading-none text-white/5"
      >
        {code.split('/')[1]?.split('.')[0] ?? code}
      </span>
      <Motif />
    </div>
  )
}
