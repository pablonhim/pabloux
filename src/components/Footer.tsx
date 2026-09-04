import { useStrings } from '../i18n/strings'
import { LiveClock } from './LiveClock'

export function Footer() {
  const t = useStrings()

  return (
    <footer className="flex flex-col items-center justify-between gap-2 bg-chalk px-6 py-6 font-sans text-[11px] text-graphite sm:flex-row">
      <span>{t.footer.copyright(new Date().getFullYear())}</span>
      <span>{t.footer.openForContracts}</span>
      <span>
        <LiveClock /> · {t.footer.location}
      </span>
    </footer>
  )
}
