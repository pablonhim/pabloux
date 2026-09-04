import { motion } from 'framer-motion'
import { useState } from 'react'
import { caseStudies, type CaseStudy } from '../data/caseStudies'
import { fadeInUp, fadeInUpViewport } from '../lib/motion'
import { CaseStudySpecModal } from './CaseStudySpecModal'
import { GalleryCard } from './GalleryCard'

export function Gallery() {
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null)

  return (
    <section id="case-studies" className="bg-ink px-6 py-24 sm:px-10">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={fadeInUpViewport}
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
        className="text-center font-davinci text-paper"
        style={{
          fontSize: 'clamp(2.5rem, 6vw, 5.875rem)',
          letterSpacing: '-0.01em',
          lineHeight: 1.1,
        }}
      >
        Selected Enterprise Case Studies
      </motion.h2>

      <div className="mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-x-8 gap-y-16 lg:grid-cols-4">
        {caseStudies.map((study, i) => (
          <GalleryCard
            key={study.id}
            study={study}
            index={i}
            onOpen={setActiveStudy}
          />
        ))}
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
