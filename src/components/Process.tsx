import { motion } from 'framer-motion'
import { fadeInUp, fadeInUpViewport } from '../lib/motion'

const steps = [
  {
    n: '01',
    title: 'Discover',
    copy: 'Sit with the operators and the data before touching a roadmap — treasury teams, drivers, merchants.',
  },
  {
    n: '02',
    title: 'Define',
    copy: 'Turn ambiguity into a scoped spec: permissions matrices, routing logic, funnel steps engineering can build.',
  },
  {
    n: '03',
    title: 'Build with AI',
    copy: 'Pair AI-assisted workflows with the team so iteration speed matches the complexity of the system.',
  },
  {
    n: '04',
    title: 'Ship & Measure',
    copy: 'Launch, instrument the activation metric that matters, and hand back a system that keeps improving.',
  },
]

export function Process() {
  return (
    <section id="process" className="border-b border-border px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={fadeInUpViewport}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="font-mono text-xs uppercase tracking-wider text-ink/60">
            How I work
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink">
            Process
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial="hidden"
              whileInView="visible"
              viewport={fadeInUpViewport}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="border-t border-border pt-4"
            >
              <span className="font-mono text-sm text-crimson">{step.n}</span>
              <h3 className="mt-2 text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                {step.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
