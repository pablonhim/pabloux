import { AnimatePresence, motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import type { Product } from '../data/products'
import { usePick } from '../i18n/LanguageContext'
import { useStrings } from '../i18n/strings'
import { ProductIcon } from '../lib/productIcon'

export function PreviewModal({
  product,
  onClose,
  onBuy,
}: {
  product: Product
  onClose: () => void
  onBuy: (product: Product) => void
}) {
  const pick = usePick()
  const t = useStrings()

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-md overflow-hidden rounded-[9px] bg-ink text-paper"
        >
          <div className="flex aspect-[16/9] w-full items-center justify-center bg-ash">
            <ProductIcon format={product.format} size={56} className="text-paper" />
          </div>

          <div className="p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="font-sans text-[11px] uppercase tracking-wider text-paper/50">
                  {product.code}
                </span>
                <h3 className="mt-2 font-davinci text-2xl text-paper">
                  {pick(product.name)}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label={t.previewModal.closeAria}
                className="shrink-0 text-paper/60 transition-colors hover:text-paper"
              >
                <X size={18} />
              </button>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-paper/70">
              {pick(product.description)}
            </p>

            <ul className="mt-5 space-y-2">
              {pick(product.highlights).map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-paper/70"
                >
                  <Check size={14} className="mt-0.5 shrink-0 text-paper/50" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-end justify-between border-t border-graphite pt-6">
              <div>
                <p className="font-sans text-xl font-medium text-paper">
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
                {t.previewModal.buy}
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
