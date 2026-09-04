import { motion } from 'framer-motion'
import { faqs } from '../data/faq'
import { usePick } from '../i18n/LanguageContext'
import { useStrings } from '../i18n/strings'
import { fadeInUp, fadeInUpViewport } from '../lib/motion'

export function FAQ() {
  const pick = usePick()
  const t = useStrings()

  return (
    <section id="faq" className="bg-chalk px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={fadeInUpViewport}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="font-sans text-xs uppercase tracking-widest text-graphite">
            {t.faq.eyebrow}
          </span>
          <h2
            className="mt-3 font-davinci text-ink"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', letterSpacing: '-0.02em' }}
          >
            {t.faq.heading}
          </h2>
        </motion.div>

        <div className="mt-16">
          {faqs.map((item, i) => (
            <motion.div
              key={item.question.en}
              initial="hidden"
              whileInView="visible"
              viewport={fadeInUpViewport}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.04 }}
            >
              <h3 className="font-davinci text-xl text-ink">
                {pick(item.question)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-graphite">
                {pick(item.answer)}
              </p>
              {i < faqs.length - 1 && (
                <div className="my-8 border-t border-vellum" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
