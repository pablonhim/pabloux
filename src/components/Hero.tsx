import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeInUp, fadeInUpViewport } from '../lib/motion'
import { StatusBadge } from './StatusBadge'

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 pb-20 pt-24 sm:pt-32"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={fadeInUpViewport}
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        <StatusBadge />
      </motion.div>

      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={fadeInUpViewport}
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="max-w-3xl text-4xl font-semibold tracking-tight text-text sm:text-6xl"
      >
        Product strategy that ships,{' '}
        <span className="text-text-muted">not just decks.</span>
      </motion.h1>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={fadeInUpViewport}
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-2xl text-lg text-text-muted"
      >
        Senior Product Owner and AI Product Lead. I run discovery-to-delivery
        for fintech, logistics, and services platforms — turning ambiguous
        problems into roadmaps engineering teams can actually build.
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={fadeInUpViewport}
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="flex flex-wrap items-center gap-3 pt-2"
      >
        <a
          href="#case-studies"
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
        >
          View case studies
          <ArrowRight size={16} />
        </a>
        <a
          href="#store"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-text-muted"
        >
          Browse the store
        </a>
      </motion.div>
    </section>
  )
}
