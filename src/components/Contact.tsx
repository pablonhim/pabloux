import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { fadeInUp, fadeInUpViewport } from '../lib/motion'

export function Contact() {
  return (
    <section id="contact" className="px-4 py-24 sm:px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={fadeInUpViewport}
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-6xl flex-col gap-6"
      >
        <span className="font-mono text-xs uppercase tracking-wider text-ink/60">
          Contact
        </span>
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-ink md:text-5xl">
          Let&rsquo;s scope the next{' '}
          <span className="text-crimson">roadmap.</span>
        </h2>
        <p className="max-w-md text-sm text-ink/70">
          Open for strategy contracts, fractional PO engagements, and AI
          product advisory work.
        </p>
        <a
          href="mailto:nhimchanborey@gmail.com"
          className="inline-flex w-fit items-center gap-2 border-b-2 border-crimson pb-1 font-mono text-lg text-ink transition-colors hover:text-crimson"
        >
          nhimchanborey@gmail.com
          <ArrowUpRight size={20} />
        </a>
      </motion.div>
    </section>
  )
}
