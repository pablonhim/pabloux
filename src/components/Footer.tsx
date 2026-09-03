import { LiveClock } from './LiveClock'

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-2 border-t border-border px-6 py-6 font-mono text-[11px] text-ink/60 sm:flex-row">
      <span>© {new Date().getFullYear()} Nhim Chanborey — Product & AI Strategy</span>
      <span>
        <LiveClock /> · Phnom Penh, KH
      </span>
    </footer>
  )
}
