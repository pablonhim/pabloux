import { motion } from 'framer-motion'
import { useStrings } from '../i18n/strings'
import { fadeInUp, fadeInUpViewport } from '../lib/motion'
import { Hexagon } from './Hexagon'

export function Process() {
  const t = useStrings()
  const steps = t.process.steps

  return (
    <section id="process" className="bg-putty px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={fadeInUpViewport}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="font-sans text-xs uppercase tracking-widest text-graphite">
            {t.process.eyebrow}
          </span>
          <h2
            className="mt-3 font-davinci text-ink"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', letterSpacing: '-0.02em' }}
          >
            {t.process.heading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial="hidden"
              whileInView="visible"
              viewport={fadeInUpViewport}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex flex-col items-center border-t border-vellum pt-6 text-center lg:items-start lg:text-left"
            >
              <span className="font-davinci text-2xl text-ink">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 font-davinci text-lg text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite">
                {step.copy}
              </p>
              {i < steps.length - 1 && (
                <Hexagon size={12} className="mt-6 hidden text-ink lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
