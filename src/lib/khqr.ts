// Minimal EMVCo-style QR payload builder for Bakong KHQR.
//
// This produces a structurally valid EMV QR string (correct TLV framing +
// CRC16 checksum) so it can be rendered and scanned by a QR reader for demo
// purposes. It is NOT the official Bakong SDK — before accepting real
// payments, generate the payload server-side via the Bakong Open API
// (see api/README.md) rather than trusting a client-built string.

interface KHQRParams {
  bakongAccountId: string
  merchantName: string
  merchantCity: string
  amount: number
  currency: 'USD' | 'KHR'
  billNumber: string
}

function tlv(tag: string, value: string): string {
  const length = value.length.toString().padStart(2, '0')
  return `${tag}${length}${value}`
}

// CRC-16/CCITT-FALSE — the checksum algorithm EMV QR codes use in tag 63.
function crc16(payload: string): string {
  let crc = 0xffff
  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8
    for (let j = 0; j < 8; j++) {
      crc = crc & 0x8000 ? (crc << 1) ^ 0x1021 : crc << 1
      crc &= 0xffff
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, '0')
}

const CURRENCY_CODE: Record<KHQRParams['currency'], string> = {
  USD: '840',
  KHR: '116',
}

export function buildKHQRPayload(params: KHQRParams): string {
  const merchantAccountInfo =
    tlv('00', 'KHQR-DEMO') + tlv('01', params.bakongAccountId)

  const fields =
    tlv('00', '01') + // payload format indicator
    tlv('01', '12') + // point of initiation: dynamic / one-time
    tlv('29', merchantAccountInfo) + // merchant account info (Bakong)
    tlv('52', '5999') + // merchant category code
    tlv('53', CURRENCY_CODE[params.currency]) +
    tlv('54', params.amount.toFixed(2)) +
    tlv('58', 'KH') + // country code
    tlv('59', params.merchantName.slice(0, 25)) +
    tlv('60', params.merchantCity.slice(0, 15)) +
    tlv('62', tlv('01', params.billNumber))

  const withCrcTag = `${fields}6304`
  return `${withCrcTag}${crc16(withCrcTag)}`
}

export function formatOrderId(): string {
  return `NTM-${Date.now().toString(36).toUpperCase()}`
}
