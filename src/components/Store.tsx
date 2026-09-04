import { motion } from 'framer-motion'
import { products, type Product } from '../data/products'
import { fadeInUp, fadeInUpViewport } from '../lib/motion'
import { ProductCard } from './ProductCard'

export function Store({
  onBuy,
  onPreview,
}: {
  onBuy: (product: Product) => void
  onPreview: (product: Product) => void
}) {
  return (
    <section id="store" className="bg-bone px-6 py-24 sm:px-10">
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
            Digital asset store
          </span>
          <h2
            className="mt-3 font-davinci text-ink"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', letterSpacing: '-0.02em' }}
          >
            Take the playbooks with you
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-graphite">
            Pay with Bakong KHQR — the file unlocks automatically once
            payment is confirmed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {products.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              onBuy={onBuy}
              onPreview={onPreview}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
