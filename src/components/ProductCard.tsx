import { motion } from 'framer-motion'
import type { Product } from '../data/products'
import { fadeInUp, fadeInUpViewport } from '../lib/motion'

const NOTCH = 16
const notchClipPath = `polygon(${NOTCH}px 0, calc(100% - ${NOTCH}px) 0, 100% ${NOTCH}px, 100% calc(100% - ${NOTCH}px), calc(100% - ${NOTCH}px) 100%, ${NOTCH}px 100%, 0 calc(100% - ${NOTCH}px), 0 ${NOTCH}px)`

export function ProductCard({
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
      transition={{ duration: 0.5 }}
      style={{ clipPath: notchClipPath }}
      className="relative flex flex-col justify-between bg-ink p-6 text-paper"
    >
      <div>
        <span className="font-sans text-[11px] uppercase tracking-wider text-paper/50">
          {product.code}
        </span>
        <h3 className="mt-3 font-davinci text-2xl text-paper">
          {product.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-paper/70">
          {product.description}
        </p>
      </div>

      <div className="mt-8 flex items-end justify-between">
        <div>
          <p className="font-sans text-lg font-medium text-paper">
            ${product.priceUsd}
          </p>
          <p className="mt-1 font-sans text-[10px] uppercase tracking-wider text-paper/40">
            {product.format}
          </p>
        </div>
        <button
          type="button"
          onClick={() => onBuy(product)}
          className="rounded-[28.8px] bg-paper px-[17px] py-[9px] font-sans text-xs text-ink transition-opacity hover:opacity-80"
        >
          Buy
        </button>
      </div>
    </motion.div>
  )
}
