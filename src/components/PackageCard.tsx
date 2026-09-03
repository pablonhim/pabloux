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
      className="relative overflow-hidden rounded-xl border border-border bg-surface"
    >
      <div className="p-6">
        <span className="inline-block w-fit rounded-md border border-border bg-bg px-2 py-1 font-mono text-[11px] uppercase tracking-wider text-text-muted">
          {packageId}
        </span>
        <h3 className="mt-4 text-lg font-semibold text-text">{name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">
          {description}
        </p>
      </div>

      {/* Tear-off perforation */}
      <div className="relative border-t border-dotted border-border">
        <span className="absolute -left-2 -top-2 h-4 w-4 rounded-full bg-bg" />
        <span className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-bg" />
      </div>

      <div className="flex items-center justify-between p-6">
        <div>
          <p className="font-mono text-2xl font-semibold text-text">
            ${priceUsd}
          </p>
          {format && (
            <p className="mt-1 font-mono text-xs text-text-muted">{format}</p>
          )}
        </div>
        <button
          type="button"
          onClick={onCheckout}
          className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-90"
        >
          Checkout
        </button>
      </div>
    </motion.div>
  )
}
