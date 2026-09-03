// Local "API" module for the Bakong KHQR checkout flow.
//
// This repo is a static Vite app with no server runtime, so everything
// below runs in DEMO_MODE by default: it simulates what a real backend
// would do (generate a payload, receive Bakong's webhook, send an email)
// entirely in memory. Every function documents the real server-side call
// it stands in for — flip DEMO_MODE to false once that backend exists and
// implement the endpoints in api/README.md.
//
// The browser must never be the source of truth for "paid". Bakong
// confirms payment by calling your server (a webhook), not the customer's
// device — simulateWebhookCallback below is what that handler does.

import { md5 } from 'js-md5'
import type { Product } from '../data/products'
import { products } from '../data/products'
import { buildKHQRPayload, formatOrderId } from '../lib/khqr'

export type OrderStatus = 'pending' | 'paid' | 'expired'

export interface CheckoutOrder {
  orderId: string
  productId: string
  email: string
  khqrPayload: string
  /** MD5 of the KHQR payload — the lookup key Bakong's API uses to check a transaction. */
  khqrMd5: string
  amount: number
  currency: 'USD'
  status: OrderStatus
  expiresAt: number
  downloadUrl: string | null
}

const DEMO_MODE = true
const ORDER_TTL_MS = 3 * 60 * 1000
const DEMO_WEBHOOK_DELAY_MS = 6000

const orders = new Map<string, CheckoutOrder>()
const sentEmails: { to: string; productId: string; downloadUrl: string; sentAt: number }[] = []

/**
 * Generate a dynamic (one-time) KHQR payload for a transaction and its MD5
 * hash. Bakong uses that hash as the key clients pass to its
 * check-transaction-by-MD5 endpoint, so the QR string and the hash always
 * travel together.
 */
export function generateKHQRTransaction(params: {
  amount: number
  billNumber: string
}): { payload: string; md5: string } {
  const payload = buildKHQRPayload({
    bakongAccountId: 'chanborey_n@wing',
    merchantName: 'Nhim Chanborey',
    merchantCity: 'Phnom Penh',
    amount: params.amount,
    currency: 'USD',
    billNumber: params.billNumber,
  })

  return { payload, md5: md5(payload) }
}

/**
 * Start a checkout order for a product. Real implementation: POST
 * /api/khqr/generate — the server looks up the price itself (never trust a
 * client-supplied amount), calls the Bakong Open API for the payload, and
 * persists the order as `pending`.
 */
export async function createCheckoutOrder(
  product: Product,
  email: string,
): Promise<CheckoutOrder> {
  if (!DEMO_MODE) {
    const res = await fetch('/api/khqr/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId: product.id, email }),
    })
    if (!res.ok) throw new Error('Failed to create order')
    return res.json()
  }

  const orderId = formatOrderId()
  const { payload, md5: khqrMd5 } = generateKHQRTransaction({
    amount: product.priceUsd,
    billNumber: orderId,
  })

  const order: CheckoutOrder = {
    orderId,
    productId: product.id,
    email,
    khqrPayload: payload,
    khqrMd5,
    amount: product.priceUsd,
    currency: 'USD',
    status: 'pending',
    expiresAt: Date.now() + ORDER_TTL_MS,
    downloadUrl: null,
  }
  orders.set(orderId, order)

  // Bakong confirms payment asynchronously via webhook, not on a timer the
  // browser controls — this setTimeout stands in for that arriving later.
  setTimeout(() => {
    simulateWebhookCallback(orderId).catch(() => {
      // Demo-only: a real handler would log/alert on webhook processing errors.
    })
  }, DEMO_WEBHOOK_DELAY_MS)

  return order
}

/** Real implementation: GET /api/khqr/status?orderId=... polled every ~2s. */
export async function getOrderStatus(orderId: string): Promise<OrderStatus> {
  if (!DEMO_MODE) {
    const res = await fetch(`/api/khqr/status?orderId=${orderId}`)
    if (!res.ok) throw new Error('Failed to fetch order status')
    const data: { status: OrderStatus } = await res.json()
    return data.status
  }

  const order = orders.get(orderId)
  if (!order) return 'expired'
  if (order.status === 'pending' && Date.now() >= order.expiresAt) {
    order.status = 'expired'
  }
  return order.status
}

function verifyWebhookSignature(_rawBody: string, _signatureHeader: string): boolean {
  // Demo stub. A real handler computes an HMAC over the raw request body
  // using a server-held BAKONG_WEBHOOK_SECRET and compares it to the
  // signature header with a constant-time comparison, rejecting anything
  // that doesn't match before touching the order.
  return true
}

/**
 * What POST /api/khqr/webhook does when Bakong calls it: verify the
 * signature, mark the order paid, and email the buyer their download link.
 * Exposed here (rather than kept private) so it can be simulated directly
 * in DEMO_MODE and unit-tested on its own.
 */
export async function simulateWebhookCallback(
  orderId: string,
  rawBody = '',
  signatureHeader = '',
): Promise<void> {
  if (!verifyWebhookSignature(rawBody, signatureHeader)) {
    throw new Error('Invalid webhook signature')
  }

  const order = orders.get(orderId)
  if (!order || order.status !== 'pending') return

  const product = products.find((p) => p.id === order.productId)
  if (!product) return

  order.status = 'paid'
  order.downloadUrl = `https://neutomni.com/downloads/${orderId}/${product.fileName}`

  await dispatchDownloadEmail(order.email, product, order.downloadUrl)
}

/**
 * Deliver the digital download link by email once purchase is confirmed.
 * Real implementation: POST /api/checkout/send-email — the server calls an
 * email provider (Resend/Postmark/SES) with a server-held API key. This
 * must never call an email provider directly from the browser, since that
 * would expose the provider's secret key to every visitor.
 */
export async function dispatchDownloadEmail(
  email: string,
  product: Product,
  downloadUrl: string,
): Promise<void> {
  if (!DEMO_MODE) {
    const res = await fetch('/api/checkout/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, productId: product.id, downloadUrl }),
    })
    if (!res.ok) throw new Error('Failed to send download email')
    return
  }

  sentEmails.push({ to: email, productId: product.id, downloadUrl, sentAt: Date.now() })
  console.info(
    `[demo email] "${product.name}" download link sent to ${email}: ${downloadUrl}`,
  )
}

/** Demo/test helper — inspect what dispatchDownloadEmail has sent so far. */
export function getSentEmails() {
  return [...sentEmails]
}

export function triggerDownload(fileName: string, product: Product) {
  const content = [
    `Neutomni — ${product.name}`,
    'Order confirmed via Bakong KHQR.',
    '',
    'This is a demo placeholder file. Replace with the signed download URL',
    'emailed to the buyer once payment is confirmed server-side.',
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
