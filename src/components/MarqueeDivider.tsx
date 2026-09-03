const STRIP = Array.from({ length: 60 })
  .map((_, i) => i % 10)
  .join(' ')

export function MarqueeDivider() {
  return (
    <div
      className="overflow-hidden border-y border-border bg-bg py-1.5"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee whitespace-nowrap font-mono text-xs tracking-widest text-ink/25">
        <span className="pr-4">{STRIP}</span>
        <span className="pr-4">{STRIP}</span>
      </div>
    </div>
  )
}
