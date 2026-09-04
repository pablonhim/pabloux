import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import type { Product } from '../data/products'
import { flyRotateIn, flyRotateViewport } from '../lib/motion'
import { ProductIcon } from '../lib/productIcon'

const NOTCH = 16
const notchClipPath = `polygon(${NOTCH}px 0, calc(100% - ${NOTCH}px) 0, 100% ${NOTCH}px, 100% calc(100% - ${NOTCH}px), calc(100% - ${NOTCH}px) 100%, ${NOTCH}px 100%, 0 calc(100% - ${NOTCH}px), 0 ${NOTCH}px)`

export function ProductCard({
  product,
  index,
  onBuy,
  onPreview,
}: {
  product: Product
  index: number
  onBuy: (product: Product) => void
  onPreview: (product: Product) => void
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={flyRotateViewport}
      variants={flyRotateIn(index % 2 === 0 ? -1 : 1)}
      transition={{ type: 'spring', stiffness: 90, damping: 14, delay: index * 0.08 }}
      style={{ clipPath: notchClipPath }}
      className="flex flex-col justify-between bg-ink text-paper"
    >
      <button
        type="button"
        onClick={() => onPreview(product)}
        aria-label={`Preview ${product.name}`}
        className="flex aspect-[16/10] w-full items-center justify-center bg-ash transition-opacity hover:opacity-90"
      >
        <ProductIcon format={product.format} size={40} className="text-paper" />
      </button>

      <div className="flex flex-1 flex-col justify-between p-6">
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

          <ul className="mt-4 space-y-1.5">
            {product.highlights.slice(0, 2).map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-xs text-paper/60"
              >
                <Check size={12} className="mt-0.5 shrink-0 text-paper/40" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex items-end justify-between">
          <div>
            <p className="font-sans text-lg font-medium text-paper">
              ${product.priceUsd}
            </p>
            <p className="mt-1 font-sans text-[10px] uppercase tracking-wider text-paper/40">
              {product.format}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onPreview(product)}
              className="rounded-[28.8px] border border-graphite px-[17px] py-[9px] font-sans text-xs text-paper transition-colors hover:border-paper"
            >
              Preview
            </button>
            <button
              type="button"
              onClick={() => onBuy(product)}
              className="rounded-[28.8px] bg-paper px-[17px] py-[9px] font-sans text-xs text-ink transition-opacity hover:opacity-80"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
