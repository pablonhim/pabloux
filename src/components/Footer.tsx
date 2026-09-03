export function Footer() {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-text">
            Let's scope the next roadmap.
          </h2>
          <p className="mt-2 max-w-md text-sm text-text-muted">
            Open for strategy contracts, fractional PO engagements, and AI
            product advisory work.
          </p>
        </div>
        <a
          href="mailto:hello@neutomni.com"
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
        >
          hello@neutomni.com
        </a>
      </div>
      <div className="border-t border-border px-6 py-6 text-center font-mono text-[11px] text-text-muted">
        © {new Date().getFullYear()} Nhim Chanborey — Product & AI Strategy
      </div>
    </footer>
  )
}
