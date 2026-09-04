import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import type { CaseStudy } from '../data/caseStudies'
import { usePick } from '../i18n/LanguageContext'
import { useStrings } from '../i18n/strings'

export function CaseStudySpecModal({
  study,
  onClose,
}: {
  study: CaseStudy
  onClose: () => void
}) {
  const pick = usePick()
  const t = useStrings()

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-[9px] bg-ink p-8 text-paper"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="font-sans text-[11px] uppercase tracking-wider text-paper/50">
                {study.code}
              </span>
              <h3 className="mt-3 font-davinci text-2xl text-paper">
                {pick(study.name)}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label={t.specModal.closeAria}
              className="shrink-0 font-sans text-xs text-paper/60 underline-offset-4 transition-[text-decoration] hover:underline"
            >
              <X size={18} />
            </button>
          </div>

          <div className="mt-6 border-t border-graphite pt-6">
            <span className="font-sans text-[11px] uppercase tracking-wider text-paper/50">
              {t.specModal.role}
            </span>
            <p className="mt-1 text-sm text-paper">{pick(study.spec.role)}</p>
          </div>

          <div className="mt-6">
            <span className="font-sans text-[11px] uppercase tracking-wider text-paper/50">
              {t.specModal.overview}
            </span>
            <p className="mt-2 text-sm leading-relaxed text-paper/70">
              {pick(study.spec.overview)}
            </p>
          </div>

          <div className="mt-6">
            <span className="font-sans text-[11px] uppercase tracking-wider text-paper/50">
              {t.specModal.highlights}
            </span>
            <ul className="mt-2 space-y-2">
              {pick(study.spec.highlights).map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-2 text-sm leading-relaxed text-paper/70"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-paper/50" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 border-t border-graphite pt-6">
            {pick(study.spec.stack).map((item) => (
              <span
                key={item}
                className="rounded-[2px] border border-graphite px-2 py-1 font-sans text-[11px] text-paper"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
