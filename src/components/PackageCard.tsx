import { motion } from 'framer-motion'

export interface PackageCardProps {
  /** Monospace ID tag, e.g. "PKG/UX.01" */
  packageId: string
  name: string
  description: string
  priceUsd: number
  format?: string
  onCheckout: () => void
}

export function PackageCard({
  packageId,
  name,
  description,
  priceUsd,
  format,
  onCheckout,
}: PackageCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="relative border border-border bg-surface text-white"
    >
      <div className="p-6">
        <span className="inline-block w-fit border border-border bg-black px-2 py-1 font-mono text-[11px] uppercase tracking-wider text-crimson">
          {packageId}
        </span>
        <h3 className="mt-4 text-lg font-bold text-white">{name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/60">
          {description}
        </p>
      </div>

      {/* Tear-off perforation */}
      <div className="relative border-t border-dotted border-neutral-700">
        <span className="absolute -left-2 -top-2 h-4 w-4 rounded-full bg-bg" />
        <span className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-bg" />
      </div>

      <div className="flex items-center justify-between p-6">
        <div>
          <p className="font-mono text-2xl font-bold text-white">
            ${priceUsd}
          </p>
          {format && (
            <p className="mt-1 font-mono text-xs text-white/60">{format}</p>
          )}
        </div>
        <button
          type="button"
          onClick={onCheckout}
          className="bg-accent px-4 py-2 font-mono text-xs uppercase tracking-wider text-ink transition-opacity hover:opacity-90"
        >
          Checkout
        </button>
      </div>
    </motion.div>
  )
}
