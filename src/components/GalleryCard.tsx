import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { PointerEvent } from 'react'
import type { CaseStudy } from '../data/caseStudies'
import { revealTilt, revealTiltViewport } from '../lib/motion'
import { CoverArt } from './CoverArt'

const TILT_RANGE = 8 // degrees — subtle, not a gimmick

export function GalleryCard({
  study,
  index,
  onOpen,
}: {
  study: CaseStudy
  index: number
  onOpen: (study: CaseStudy) => void
}) {
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const spring = { stiffness: 200, damping: 20, mass: 0.4 }
  const rotateX = useSpring(useTransform(py, [0, 1], [TILT_RANGE, -TILT_RANGE]), spring)
  const rotateY = useSpring(useTransform(px, [0, 1], [-TILT_RANGE, TILT_RANGE]), spring)
  const glowX = useTransform(px, (v) => `${v * 100}%`)
  const glowY = useTransform(py, (v) => `${v * 100}%`)

  function handlePointerMove(e: PointerEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }

  function handlePointerLeave() {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(study)}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      initial="hidden"
      whileInView="visible"
      viewport={revealTiltViewport}
      variants={revealTilt}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      style={{ perspective: 1200 }}
      className="group block w-full text-left"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative overflow-hidden border border-border"
      >
        <CoverArt variant={study.coverVariant} code={study.code} />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(220px circle at ${glowX} ${glowY}, rgba(0,87,255,0.35), transparent 70%)`,
          }}
        />
      </motion.div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-electric">
            {study.code}
          </span>
          <h3 className="mt-1 text-lg font-bold text-ink">{study.name}</h3>
          <p className="mt-1 max-w-md text-sm leading-relaxed text-ink/60">
            {study.oneLiner}
          </p>
        </div>
        <ArrowUpRight
          size={20}
          className="mt-1 shrink-0 text-ink/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-electric"
        />
      </div>
    </motion.button>
  )
}
