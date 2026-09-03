import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Loader2, Mail, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import QRCode from 'qrcode'
import {
  createCheckoutOrder,
  getOrderStatus,
  triggerDownload,
  type CheckoutOrder,
  type OrderStatus,
} from '../api/checkout'
import type { Product } from '../data/products'

export function CheckoutModal({
  product,
  onClose,
}: {
  product: Product
  onClose: () => void
}) {
  const [email, setEmail] = useState('')
  const [order, setOrder] = useState<CheckoutOrder | null>(null)
  const [status, setStatus] = useState<OrderStatus>('pending')
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null)
  const [secondsLeft, setSecondsLeft] = useState(0)
  const downloadedRef = useRef(false)

  // Once an email is captured, create the order and render its KHQR
  // payload as a QR code.
  useEffect(() => {
    if (!email) return
    let cancelled = false

    createCheckoutOrder(product, email).then(async (created) => {
      if (cancelled) return
      setOrder(created)
      setSecondsLeft(Math.max(0, Math.round((created.expiresAt - Date.now()) / 1000)))
      const dataUrl = await QRCode.toDataURL(created.khqrPayload, {
        margin: 1,
        width: 256,
        color: { dark: '#0b0b0c', light: '#ffffff' },
      })
      if (!cancelled) setQrDataUrl(dataUrl)
    })

    return () => {
      cancelled = true
    }
  }, [product, email])

  // Poll for payment confirmation while the order is pending.
  useEffect(() => {
    if (!order || status !== 'pending') return

    const interval = setInterval(async () => {
      const next = await getOrderStatus(order.orderId)
      setStatus(next)
    }, 2000)

    return () => clearInterval(interval)
  }, [order, status])

  // Countdown timer.
  useEffect(() => {
    if (!order || status !== 'pending') return
    const tick = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          setStatus('expired')
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(tick)
  }, [order, status])

  // Auto-trigger the download once, right when payment confirms.
  useEffect(() => {
    if (status === 'paid' && !downloadedRef.current) {
      downloadedRef.current = true
      triggerDownload(product.fileName, product)
    }
  }, [status, product])

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, '0')
  const ss = String(secondsLeft % 60).padStart(2, '0')

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
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
          className="w-full max-w-sm rounded-2xl border border-border bg-surface p-6"
        >
          <div className="flex items-start justify-between">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
                Pay with Bakong KHQR
              </span>
              <h3 className="mt-1 text-lg font-semibold text-text">
                {product.name}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close checkout"
              className="rounded-md p-1 text-text-muted transition-colors hover:text-text"
            >
              <X size={18} />
            </button>
          </div>

          <div className="mt-6 flex flex-col items-center gap-4">
            {!email ? (
              <EmailCaptureForm onSubmit={setEmail} />
            ) : status === 'paid' ? (
              <div className="flex flex-col items-center gap-3 py-8 text-center">
                <CheckCircle2 className="text-success" size={40} />
                <p className="text-sm font-medium text-text">
                  Payment confirmed
                </p>
                <p className="max-w-[240px] text-xs text-text-muted">
                  Your download started automatically, and the link was
                  emailed to {email}.
                </p>
                <button
                  type="button"
                  onClick={() => triggerDownload(product.fileName, product)}
                  className="mt-2 rounded-lg border border-border px-4 py-2 text-xs font-medium text-text transition-colors hover:border-text-muted"
                >
                  Download again
                </button>
              </div>
            ) : status === 'expired' ? (
              <div className="flex flex-col items-center gap-3 py-8 text-center">
                <p className="text-sm font-medium text-text">QR expired</p>
                <p className="max-w-[240px] text-xs text-text-muted">
                  This payment window closed. Reopen checkout to try again.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-2 rounded-lg bg-accent px-4 py-2 text-xs font-medium text-bg"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="rounded-xl border border-border bg-white p-3">
                  {qrDataUrl ? (
                    <img src={qrDataUrl} alt="Bakong KHQR payment code" width={200} height={200} />
                  ) : (
                    <div className="flex h-[200px] w-[200px] items-center justify-center">
                      <Loader2 className="animate-spin text-bg" size={24} />
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <p className="font-mono text-2xl font-semibold text-text">
                    ${product.priceUsd.toFixed(2)}
                  </p>
                  <p className="mt-1 font-mono text-xs text-text-muted">
                    Order {order?.orderId ?? '—'}
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-border px-3 py-1.5">
                  <Loader2 className="animate-spin text-text-muted" size={14} />
                  <span className="font-mono text-xs text-text-muted">
                    Waiting for payment · expires in {mm}:{ss}
                  </span>
                </div>

                <p className="max-w-[260px] text-center text-xs text-text-muted">
                  Scan with any Bakong-linked banking app. The download link
                  is emailed to you automatically once the payment webhook
                  confirms.
                </p>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function EmailCaptureForm({ onSubmit }: { onSubmit: (email: string) => void }) {
  const [value, setValue] = useState('')

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (value.trim()) onSubmit(value.trim())
      }}
      className="flex w-full flex-col gap-4 py-2"
    >
      <p className="text-center text-sm text-text-muted">
        Where should we send your download link?
      </p>
      <div className="flex items-center gap-2 rounded-lg border border-border bg-bg px-3 py-2">
        <Mail size={16} className="shrink-0 text-text-muted" />
        <input
          type="email"
          required
          autoFocus
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="you@company.com"
          className="w-full bg-transparent text-sm text-text placeholder:text-text-muted focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
      >
        Continue to payment
      </button>
    </form>
  )
}
