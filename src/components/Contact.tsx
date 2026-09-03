import { motion } from 'framer-motion'
import { fadeInUp, fadeInUpViewport } from '../lib/motion'

export function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={fadeInUpViewport}
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-20 sm:flex-row sm:items-end"
      >
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
            Contact
          </span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-text">
            Let's scope the next roadmap.
          </h2>
          <p className="mt-3 max-w-md text-sm text-text-muted">
            Open for strategy contracts, fractional PO engagements, and AI
            product advisory work.
          </p>
        </div>
        <a
          href="mailto:hello@neutomni.com"
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
        >
          hello@neutomni.com
        </a>
      </motion.div>
    </section>
  )
}
