const NOTCH = 16
const notchClipPath = `polygon(${NOTCH}px 0, calc(100% - ${NOTCH}px) 0, 100% ${NOTCH}px, 100% calc(100% - ${NOTCH}px), calc(100% - ${NOTCH}px) 100%, ${NOTCH}px 100%, 0 calc(100% - ${NOTCH}px), 0 ${NOTCH}px)`

export interface PackageCardProps {
  /** ID tag, e.g. "PKG/UX.01" */
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
    <div
      style={{ clipPath: notchClipPath }}
      className="relative flex flex-col justify-between bg-ink p-6 text-paper"
    >
      <div>
        <span className="font-sans text-[11px] uppercase tracking-wider text-paper/50">
          {packageId}
        </span>
        <h3 className="mt-3 font-davinci text-2xl text-paper">{name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-paper/70">
          {description}
        </p>
      </div>

      <div className="mt-8 flex items-end justify-between">
        <div>
          <p className="font-sans text-lg font-medium text-paper">
            ${priceUsd}
          </p>
          {format && (
            <p className="mt-1 font-sans text-[10px] uppercase tracking-wider text-paper/40">
              {format}
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={onCheckout}
          className="rounded-[28.8px] bg-paper px-[17px] py-[9px] font-sans text-xs text-ink transition-opacity hover:opacity-80"
        >
          Checkout
        </button>
      </div>
    </div>
  )
}
