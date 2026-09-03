import { motion } from 'framer-motion'
import { fadeInUp, fadeInUpViewport } from '../lib/motion'
import { LiveClock } from './LiveClock'

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[75vh] border-b border-border sm:min-h-[85vh]"
    >
      <div className="grid grid-cols-12 gap-4 px-4 pt-16 pb-28 sm:px-6 sm:pt-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={fadeInUpViewport}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="col-span-12 sm:col-start-6 sm:col-span-7 lg:col-start-7 lg:col-span-6"
        >
          <h2 className="text-3xl font-bold leading-tight text-electric md:text-5xl">
            Bridging enterprise product strategy
            <span className="mt-2 block font-serif text-3xl font-normal text-ink italic md:text-5xl">
              with AI-driven execution
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink/80 sm:text-base">
            I architect complex B2B banking logic across multi-bank RBAC
            systems, multi-pin driver logistics for last-mile delivery, and
            eco-reward consumer apps. Ten years turning ambiguous enterprise
            problems into high-impact design workflows engineering teams can
            actually ship.
          </p>

          <p className="mt-8 font-mono text-xs uppercase tracking-wider text-ink/60">
            Strategy <span className="text-electric">+</span> Execution{' '}
            <span className="text-electric">+</span> AI{' '}
            <span className="text-electric">=</span> Shipped Product
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2 font-mono text-[11px] uppercase tracking-wider text-ink sm:bottom-6 sm:left-6 sm:right-6 sm:flex-row sm:items-center sm:justify-between">
        <span>
          LOCAL TIME <LiveClock /> <span className="mx-2">|</span>
          PHNOM PENH, KH
        </span>

        <span className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-electric animate-pulse-ring" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-electric" />
          </span>
          Open for strategy contracts
        </span>
      </div>
    </section>
  )
}
