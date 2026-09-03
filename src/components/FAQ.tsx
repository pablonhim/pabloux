import { motion } from 'framer-motion'
import { FileCode2 } from 'lucide-react'
import { faqs } from '../data/faq'
import { fadeInUp, fadeInUpViewport } from '../lib/motion'

export function FAQ() {
  return (
    <section id="faq" className="border-b border-border px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={fadeInUpViewport}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs uppercase tracking-wider text-ink/60">
            Questions
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink">
            FAQ
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={fadeInUpViewport}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 border border-border bg-surface"
        >
          <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
            <FileCode2 size={14} className="text-white/40" />
            <span className="font-mono text-xs text-white/60">FAQ.md</span>
          </div>

          <div className="p-6 sm:p-8">
            {faqs.map((item, i) => (
              <div key={item.question}>
                <p className="font-mono text-sm text-crimson">
                  # {item.question}
                </p>
                <p className="mt-3 font-mono text-sm leading-relaxed text-white/70">
                  {item.answer}
                </p>
                {i < faqs.length - 1 && (
                  <div className="my-8 border-t border-dashed border-white/15" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
