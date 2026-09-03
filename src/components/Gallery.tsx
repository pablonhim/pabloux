import { motion } from 'framer-motion'
import { useState } from 'react'
import { caseStudies, type CaseStudy } from '../data/caseStudies'
import { fadeInUp, fadeInUpViewport } from '../lib/motion'
import { CaseStudySpecModal } from './CaseStudySpecModal'
import { GalleryCard } from './GalleryCard'

export function Gallery() {
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
            Gallery
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink">
            Selected Enterprise Case Studies
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2">
          {caseStudies.map((study, i) => (
            <GalleryCard
              key={study.id}
              study={study}
              index={i}
              onOpen={setActiveStudy}
            />
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
