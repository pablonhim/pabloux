import { motion } from 'framer-motion'
import { Scissors } from 'lucide-react'
import type { Product } from '../data/products'
import { fadeInUp, fadeInUpViewport } from '../lib/motion'

export function TicketCard({
  product,
  onBuy,
}: {
  product: Product
  onBuy: (product: Product) => void
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={fadeInUpViewport}
      variants={fadeInUp}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col border border-border bg-surface text-white"
    >
      <div className="p-6">
        <span className="font-mono text-xs uppercase tracking-wider text-crimson">
          {product.code}
        </span>
        <h3 className="mt-3 text-lg font-bold text-white">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/60">
          {product.description}
        </p>
      </div>

      {/* Tear-off perforation */}
      <div className="relative border-t border-dashed border-neutral-700">
        <span className="absolute -left-2 -top-2 h-4 w-4 rounded-full bg-bg" />
        <span className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-bg" />
        <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 bg-surface px-2 font-mono text-[9px] uppercase tracking-widest text-white/40">
          <Scissors size={10} />
          Tear along line
        </span>
      </div>

      <div className="flex items-center justify-between p-6">
        <div>
          <p className="font-mono text-2xl font-bold text-white">
            ${product.priceUsd}
          </p>
          <p className="mt-1 font-mono text-xs text-white/60">
            {product.format}
          </p>
        </div>
        <button
          type="button"
          onClick={() => onBuy(product)}
          className="bg-accent px-4 py-2 font-mono text-xs uppercase tracking-wider text-ink transition-opacity hover:opacity-90"
        >
          Checkout
        </button>
      </div>
    </motion.div>
  )
}
