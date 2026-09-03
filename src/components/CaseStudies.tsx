import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { caseStudies, type CaseStudy } from '../data/caseStudies'
import { fadeInUp, fadeInUpViewport } from '../lib/motion'
import { CaseStudySpecModal } from './CaseStudySpecModal'

export function CaseStudies() {
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null)

  return (
    <section id="case-studies" className="border-b border-border px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={fadeInUpViewport}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="font-mono text-xs uppercase tracking-wider text-ink/60">
            Selected work
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink">
            Selected Enterprise Case Studies
          </h2>
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
              className="flex flex-col justify-between border border-border bg-surface p-8 text-white transition-colors hover:bg-surface-hover"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-crimson">
                  [{study.code}]
                </span>
                <h3 className="mt-4 text-2xl font-bold text-white">
                  {study.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {study.oneLiner}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveStudy(study)}
                className="mt-8 inline-flex w-fit items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-white transition-colors hover:text-crimson"
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
