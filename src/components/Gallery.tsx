import { motion } from 'framer-motion'
import { useState } from 'react'
import { caseStudies, type CaseStudy } from '../data/caseStudies'
import { useStrings } from '../i18n/strings'
import { fadeInUp, fadeInUpViewport } from '../lib/motion'
import { CaseStudySpecModal } from './CaseStudySpecModal'
import { GalleryCard } from './GalleryCard'

export function Gallery() {
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null)
  const t = useStrings()

  return (
    <section id="case-studies" className="bg-ink px-6 py-24 sm:px-10">
      <span className="block text-center font-sans text-xs uppercase tracking-widest text-paper/50">
        {t.gallery.eyebrow}
      </span>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={fadeInUpViewport}
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
        className="mt-3 text-center font-davinci text-paper"
        style={{
          fontSize: 'clamp(2.5rem, 6vw, 5.875rem)',
          letterSpacing: '-0.01em',
          lineHeight: 1.1,
        }}
      >
        {t.gallery.heading}
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
