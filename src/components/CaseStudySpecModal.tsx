import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import type { CaseStudy } from '../data/caseStudies'

export function CaseStudySpecModal({
  study,
  onClose,
}: {
  study: CaseStudy
  onClose: () => void
}) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
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
          className="max-h-[85vh] w-full max-w-lg overflow-y-auto border border-border bg-surface p-6 text-white"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-electric">
                [{study.code}]
              </span>
              <h3 className="mt-3 text-xl font-bold text-white">
                {study.name}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close spec"
              className="shrink-0 p-1 text-white/60 transition-colors hover:text-electric"
            >
              <X size={18} />
            </button>
          </div>

          <div className="mt-6 border-t border-border pt-6">
            <span className="font-mono text-[11px] uppercase tracking-wider text-white/60">
              Role
            </span>
            <p className="mt-1 text-sm text-white">{study.spec.role}</p>
          </div>

          <div className="mt-6">
            <span className="font-mono text-[11px] uppercase tracking-wider text-white/60">
              Overview
            </span>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              {study.spec.overview}
            </p>
          </div>

          <div className="mt-6">
            <span className="font-mono text-[11px] uppercase tracking-wider text-white/60">
              Highlights
            </span>
            <ul className="mt-2 space-y-2">
              {study.spec.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-2 text-sm leading-relaxed text-white/70"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-electric" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-6">
            {study.spec.stack.map((item) => (
              <span
                key={item}
                className="border border-border px-2 py-1 font-mono text-[11px] text-white"
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
