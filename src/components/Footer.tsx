import { LiveClock } from './LiveClock'

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-2 bg-chalk px-6 py-6 font-sans text-[11px] text-graphite sm:flex-row">
      <span>© {new Date().getFullYear()} Pablo UX — by Nhim Chanborey</span>
      <span>Open for strategy contracts</span>
      <span>
        <LiveClock /> · Phnom Penh, KH
      </span>
    </footer>
  )
}
