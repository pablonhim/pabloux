import { motion } from 'framer-motion'
import type { Product } from '../data/products'

export function TicketCard({
  product,
  onBuy,
}: {
  product: Product
  onBuy: (product: Product) => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4 }}
      className="flex overflow-hidden rounded-xl border border-border bg-surface"
    >
      {/* Main stub */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <span className="inline-block rounded-md border border-border bg-bg px-2 py-1 font-mono text-[11px] uppercase tracking-wider text-text-muted">
            {product.tag}
          </span>
          <h3 className="mt-4 text-lg font-semibold text-text">
            {product.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">
            {product.description}
          </p>
        </div>
        <p className="mt-6 font-mono text-xs text-text-muted">
          {product.format}
        </p>
      </div>

      {/* Tear line */}
      <div className="relative w-px shrink-0 border-l border-dashed border-border">
        <span className="absolute -top-2 -left-2 h-4 w-4 rounded-full bg-bg" />
        <span className="absolute -bottom-2 -left-2 h-4 w-4 rounded-full bg-bg" />
      </div>

      {/* Price stub */}
      <div className="flex w-28 shrink-0 flex-col items-center justify-center gap-3 p-4 text-center">
        <div>
          <p className="font-mono text-lg font-semibold text-text">
            ${product.priceUsd}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
            USD
          </p>
        </div>
        <button
          type="button"
          onClick={() => onBuy(product)}
          className="w-full rounded-lg bg-accent px-3 py-2 text-xs font-medium text-bg transition-opacity hover:opacity-90"
        >
          Buy
        </button>
      </div>
    </motion.div>
  )
}
