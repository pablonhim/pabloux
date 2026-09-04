import { useLanguage } from '../i18n/LanguageContext'
import { useStrings } from '../i18n/strings'

export function Header() {
  const { language, setLanguage } = useLanguage()
  const t = useStrings()

  return (
    <header className="flex items-center justify-between px-6 py-3 sm:px-10">
      <a
        href="#top"
        aria-label={t.header.homeAria}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-ink font-davinci text-sm text-ink"
      >
        P
      </a>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 font-sans text-xs text-ink">
          <button
            type="button"
            onClick={() => setLanguage('km')}
            aria-current={language === 'km'}
            className={
              language === 'km'
                ? 'font-medium'
                : 'text-ink/50 underline-offset-4 hover:underline'
            }
          >
            {t.languageSwitcher.km}
          </button>
          <span className="text-ink/30">/</span>
          <button
            type="button"
            onClick={() => setLanguage('en')}
            aria-current={language === 'en'}
            className={
              language === 'en'
                ? 'font-medium'
                : 'text-ink/50 underline-offset-4 hover:underline'
            }
          >
            {t.languageSwitcher.en}
          </button>
        </div>

        <a
          href="#contact"
          className="font-sans text-xs text-ink underline-offset-4 transition-[text-decoration] hover:underline"
        >
          {t.header.brandLink}
        </a>
      </div>
    </header>
  )
}
