export interface CaseStudy {
  id: string
  name: string
  client: string
  category: string
  summary: string
  metrics: { label: string; value: string }[]
}

// Demo content — replace with real client-approved case study copy before
// publishing publicly.
export const caseStudies: CaseStudy[] = [
  {
    id: 'b2b-multi-bank',
    name: 'B2B Multi-Bank',
    client: 'Regional Banking Consortium',
    category: 'FINTECH / BANKING',
    summary:
      'Led product for a multi-bank B2B settlement platform, unifying reconciliation across 6 partner banks into a single ledger and approval workflow.',
    metrics: [
      { label: 'Settlement time', value: '-68%' },
      { label: 'Partner banks live', value: '6' },
      { label: 'Manual recon hours/mo', value: '-420h' },
    ],
  },
  {
    id: 'plasfooddou',
    name: 'PlasFoodDou',
    client: 'PlasFoodDou',
    category: 'FOOD TECH / MARKETPLACE',
    summary:
      'Owned the roadmap for a food-packaging marketplace connecting manufacturers to F&B buyers, from zero to a repeatable B2B ordering flow.',
    metrics: [
      { label: 'Time to first order', value: '-54%' },
      { label: 'Repeat buyer rate', value: '+31%' },
      { label: 'SKUs onboarded', value: '1,200+' },
    ],
  },
  {
    id: 'oto-delivery',
    name: 'OTO Delivery',
    client: 'OTO Delivery',
    category: 'LOGISTICS / ON-DEMAND',
    summary:
      'Rebuilt the dispatcher and rider allocation logic for a last-mile delivery app, cutting average dispatch latency during peak load.',
    metrics: [
      { label: 'Dispatch latency', value: '-41%' },
      { label: 'Rider utilization', value: '+22%' },
      { label: 'On-time deliveries', value: '96.4%' },
    ],
  },
  {
    id: 'home-service',
    name: 'Home Service',
    client: 'Home Service',
    category: 'CONSUMER / SERVICES',
    summary:
      'Defined and shipped a booking-to-payment flow for on-demand home services, aligning three squads around one activation metric.',
    metrics: [
      { label: 'Booking completion', value: '+37%' },
      { label: 'Support tickets', value: '-29%' },
      { label: 'Squads aligned', value: '3' },
    ],
  },
]
