import type { Product } from '../data/products'
import { buildKHQRPayload, formatOrderId } from './khqr'

export interface Order {
  orderId: string
  khqrPayload: string
  amount: number
  currency: 'USD'
  expiresAt: number
}

export type OrderStatus = 'pending' | 'paid' | 'expired'

const ORDER_TTL_MS = 3 * 60 * 1000

// DEMO MODE: no backend is deployed in this repo, so payment confirmation is
// simulated client-side. In production, replace both functions below with
// calls to the /api/khqr/* endpoints documented in api/README.md — the
// browser must never decide "paid" on its own, only a Bakong webhook can.
const DEMO_MODE = true
const DEMO_PAID_AFTER_MS = 6000

const demoOrders = new Map<string, { paidAt: number }>()

export async function createOrder(product: Product): Promise<Order> {
  if (!DEMO_MODE) {
    const res = await fetch('/api/khqr/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId: product.id }),
    })
    if (!res.ok) throw new Error('Failed to create order')
    return res.json()
  }

  const orderId = formatOrderId()
  demoOrders.set(orderId, { paidAt: Date.now() + DEMO_PAID_AFTER_MS })

  return {
    orderId,
    amount: product.priceUsd,
    currency: 'USD',
    expiresAt: Date.now() + ORDER_TTL_MS,
    khqrPayload: buildKHQRPayload({
      bakongAccountId: 'chanborey_n@wing',
      merchantName: 'Nhim Chanborey',
      merchantCity: 'Phnom Penh',
      amount: product.priceUsd,
      currency: 'USD',
      billNumber: orderId,
    }),
  }
}

export async function pollOrderStatus(orderId: string): Promise<OrderStatus> {
  if (!DEMO_MODE) {
    const res = await fetch(`/api/khqr/status?orderId=${orderId}`)
    if (!res.ok) throw new Error('Failed to fetch order status')
    const data: { status: OrderStatus } = await res.json()
    return data.status
  }

  const order = demoOrders.get(orderId)
  if (!order) return 'expired'
  return Date.now() >= order.paidAt ? 'paid' : 'pending'
}

export function triggerDownload(fileName: string, product: Product) {
  const content = [
    `Neutomni — ${product.name}`,
    `Order confirmed via Bakong KHQR.`,
    '',
    'This is a demo placeholder file. Replace with the signed download URL',
    'returned by /api/khqr/status once payment is confirmed server-side.',
  ].join('\n')

  const blob = new Blob([content], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}
