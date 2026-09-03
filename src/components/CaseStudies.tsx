import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { caseStudies, type CaseStudy } from '../data/caseStudies'
import { fadeInUp, fadeInUpViewport } from '../lib/motion'
import { CaseStudySpecModal } from './CaseStudySpecModal'

export function CaseStudies() {
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null)

  return (
    <section id="case-studies" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={fadeInUpViewport}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-end justify-between gap-6"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
              Selected work
            </span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-text">
              Selected Enterprise Case Studies
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {caseStudies.map((study, i) => (
            <motion.article
              key={study.id}
              initial="hidden"
              whileInView="visible"
              viewport={fadeInUpViewport}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group flex flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:bg-surface-hover"
            >
              <span className="inline-block w-fit rounded-md border border-border bg-bg px-2 py-1 font-mono text-[11px] uppercase tracking-wider text-text-muted">
                {study.category}
              </span>

              <h3 className="mt-4 text-xl font-semibold text-text">
                {study.name}
              </h3>
              <p className="mt-1 font-mono text-xs text-text-muted">
                {study.client}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                {study.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-4">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border bg-bg px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setActiveStudy(study)}
                className="mt-6 inline-flex w-fit items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-text transition-colors hover:text-text-muted"
              >
                View spec
                <ArrowUpRight size={14} />
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      {activeStudy && (
        <CaseStudySpecModal
          study={activeStudy}
          onClose={() => setActiveStudy(null)}
        />
      )}
    </section>
  )
}
