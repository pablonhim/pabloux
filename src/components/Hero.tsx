import { useStrings } from '../i18n/strings'

export function Hero() {
  const t = useStrings()

  return (
    <section
      id="top"
      className="flex min-h-[100svh] flex-col items-center justify-between bg-putty px-6 pt-16 pb-0"
    >
      <div className="mx-auto max-w-xl text-center">
        <span className="font-sans text-xs uppercase tracking-widest text-graphite">
          {t.hero.eyebrow}
        </span>

        <h2
          className="mt-4 font-davinci text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl"
          style={{ letterSpacing: '-0.02em' }}
        >
          {t.hero.headlineMain}{' '}
          <em className="font-normal italic">{t.hero.headlineEm}</em>
        </h2>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 font-sans text-sm font-medium uppercase tracking-wide text-ink">
          <span>{t.hero.statYears}</span>
          <span>{t.hero.statBanks}</span>
          <span>{t.hero.statSystems}</span>
        </div>

        <a
          href="#case-studies"
          className="mt-8 inline-flex items-center rounded-[28.8px] bg-ink px-[17px] py-[9px] font-sans text-xs text-paper transition-opacity hover:opacity-80"
        >
          {t.hero.cta}
        </a>
      </div>

      <div className="w-full overflow-hidden pb-6 text-center">
        <span
          className="inline-block whitespace-nowrap font-davinci leading-none text-ink"
          style={{
            fontSize: 'clamp(4.5rem, 24vw, 23.375rem)',
            letterSpacing: '-0.02em',
            fontWeight: 500,
          }}
        >
          Pablo UX
        </span>
      </div>
    </section>
  )
}
