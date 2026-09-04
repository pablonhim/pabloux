import { motion } from 'framer-motion'
import type { CaseStudy } from '../data/caseStudies'
import { usePick } from '../i18n/LanguageContext'
import { fadeInUp, fadeInUpViewport } from '../lib/motion'
import { Hexagon } from './Hexagon'

export function GalleryCard({
  study,
  index,
  onOpen,
}: {
  study: CaseStudy
  index: number
  onOpen: (study: CaseStudy) => void
}) {
  const pick = usePick()

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(study)}
      initial="hidden"
      whileInView="visible"
      viewport={fadeInUpViewport}
      variants={fadeInUp}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group flex flex-col items-center text-center"
    >
      <span className="font-davinci text-xl text-paper" style={{ letterSpacing: '-0.01em' }}>
        {pick(study.name)}
      </span>

      <span className="mt-5 aspect-square w-full max-w-[200px] rounded-full bg-ash transition-opacity duration-300 group-hover:opacity-80" />

      <span className="mt-3 font-sans text-[11px] uppercase tracking-wider text-paper/50">
        {study.code}
      </span>

      <Hexagon size={12} className="mt-4 text-paper" />
    </motion.button>
  )
}
