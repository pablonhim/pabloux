import { motion } from 'framer-motion'
import { caseStudies } from '../data/caseStudies'

export function CaseStudies() {
  return (
    <section id="case-studies" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
              Selected work
            </span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-text">
              Case studies
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {caseStudies.map((study, i) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-xl border border-border bg-surface p-6 transition-colors hover:bg-surface-hover"
            >
              <span className="inline-block rounded-md border border-border bg-bg px-2 py-1 font-mono text-[11px] uppercase tracking-wider text-text-muted">
                {study.category}
              </span>

              <h3 className="mt-4 text-xl font-semibold text-text">
                {study.name}
              </h3>
              <p className="mt-1 font-mono text-xs text-text-muted">
                {study.client}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                {study.summary}
              </p>

              <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-4">
                {study.metrics.map((metric) => (
                  <div key={metric.label}>
                    <dt className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                      {metric.label}
                    </dt>
                    <dd className="mt-1 text-base font-semibold text-text">
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
