import { motion } from 'framer-motion'
import { products, type Product } from '../data/products'
import { fadeInUp, fadeInUpViewport } from '../lib/motion'
import { TicketCard } from './TicketCard'

export function Store({ onBuy }: { onBuy: (product: Product) => void }) {
  return (
    <section id="store" className="border-b border-border px-4 py-20 sm:px-6">
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
            Digital asset store
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink">
            Take the playbooks with you
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-ink/70">
            Tear-off receipts pulled directly from the case studies above.
            Pay with Bakong KHQR — the file unlocks automatically once
            payment is confirmed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {products.map((product) => (
            <TicketCard key={product.id} product={product} onBuy={onBuy} />
          ))}
        </div>
      </div>
    </section>
  )
}
