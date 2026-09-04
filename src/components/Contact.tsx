import { motion } from 'framer-motion'
import { useStrings } from '../i18n/strings'
import { fadeInUp, fadeInUpViewport } from '../lib/motion'

export function Contact() {
  const t = useStrings()

  return (
    <section id="contact" className="bg-putty px-6 py-24 text-center sm:px-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={fadeInUpViewport}
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-xl flex-col items-center gap-6"
      >
        <span className="font-sans text-xs uppercase tracking-widest text-graphite">
          {t.contact.eyebrow}
        </span>
        <h2
          className="font-davinci text-ink"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', letterSpacing: '-0.02em' }}
        >
          {t.contact.headingMain}{' '}
          <em className="italic">{t.contact.headingEm}</em>
        </h2>
        <p className="max-w-md text-sm text-graphite">{t.contact.sub}</p>
        <a
          href="mailto:nhimchanborey@gmail.com"
          className="font-sans text-lg text-ink underline-offset-4 transition-[text-decoration] hover:underline"
        >
          nhimchanborey@gmail.com
        </a>
      </motion.div>
    </section>
  )
}
