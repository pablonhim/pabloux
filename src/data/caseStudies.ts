export interface CaseStudySpec {
  role: string
  overview: string
  highlights: string[]
  stack: string[]
}

export interface CaseStudy {
  id: string
  /** ID tag, e.g. "PKG/FIN.01" */
  code: string
  name: string
  oneLiner: string
  spec: CaseStudySpec
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'b2b-multi-bank',
    code: 'PKG/FIN.01',
    name: 'Enterprise B2B Multi-Bank Platform',
    oneLiner:
      'Inquire balances across 18 Cambodian banks from one dashboard, governed by a full RBAC permissions matrix.',
    spec: {
      role: 'Senior Product Owner',
      overview:
        'Enterprise treasury teams needed one place to inquire balances and activity instead of logging into up to 18 separate bank portals. I owned the product definition for the inquiry gateway and the permissioning model governing it.',
      highlights: [
        'Designed the multi-bank inquiry flow spanning up to 18 partner banks behind one authenticated session.',
        'Defined the RBAC permissions matrix — roles, scopes, and approval chains — so finance, treasury, and admin users see only what their role permits.',
        "Worked with engineering to normalize each bank's differing API/response shape into one consistent inquiry response.",
        'Ran UAT with enterprise treasury teams to validate approval-chain edge cases before rollout.',
      ],
      stack: ['RBAC permissions matrix', 'Multi-bank API orchestration', 'Audit logging'],
    },
  },
  {
    id: 'oto-delivery',
    code: 'PKG/LOG.02',
    name: 'OTO Delivery — Multi-Pin Routing',
    oneLiner:
      'Multi-pin location drop-offs and a driver HUD UX for real-time last-mile routing decisions.',
    spec: {
      role: 'Product Owner',
      overview:
        'OTO drivers needed to handle multiple drop-offs in a single run without losing track of sequence or ETA. I owned the multi-pin routing flow and the in-app driver HUD that surfaces the next stop, distance, and customer instructions at a glance.',
      highlights: [
        'Designed the multi-pin drop-off flow so a single delivery run carries ordered stops instead of one pin per trip.',
        'Defined the driver HUD UX — next-stop distance, ETA, and customer notes surfaced without leaving the map view.',
        'Worked with engineering on re-sequencing logic when a drop-off is skipped, delayed, or added mid-route.',
        'Ran driver-side field tests to cut the taps needed to complete a multi-stop run.',
      ],
      stack: ['Multi-pin routing', 'Driver HUD UX', 'Real-time ETA calculation'],
    },
  },
  {
    id: 'plasfooddou',
    code: 'PKG/ECO.03',
    name: 'PlasFoodDou Eco-Rewards',
    oneLiner:
      'QR-scan eco-rewards for reusable packaging, backed by merchant POS integrations at checkout.',
    spec: {
      role: 'Product Owner',
      overview:
        'PlasFoodDou rewards customers for cutting single-use plastic. I owned the reward loop from QR scan to redemption, and the merchant-facing POS integration that makes each scan verifiable at checkout.',
      highlights: [
        'Designed the QR scan-to-reward flow: generate, scan, validate, and credit rewards within one checkout interaction.',
        'Scoped merchant POS integrations so participating stores could validate and settle redemptions without extra hardware.',
        'Defined duplicate-scan and fraud safeguards to keep the reward ledger trustworthy for merchants.',
        'Partnered with merchant operations to onboard and train store staff on the redemption flow.',
      ],
      stack: ['QR generation & scanning', 'POS integration', 'Reward ledger'],
    },
  },
  {
    id: 'home-service',
    code: 'PKG/SVC.04',
    name: 'Home Service Booking Platform',
    oneLiner:
      'On-demand technician booking funnel matching customers to providers by location, service, and schedule.',
    spec: {
      role: 'Product Owner',
      overview:
        'Booking a home service involves several dependent choices — service type, location, and time. I owned the multi-step funnel and the location-matching logic that pairs each booking with an available nearby technician.',
      highlights: [
        'Designed the multi-step booking funnel (service → location → schedule → confirm) to reduce drop-off between steps.',
        'Defined the location-matching logic that pairs bookings with available technicians by proximity, service category, and schedule.',
        'Aligned three squads (booking, provider ops, and payments) around one activation metric for the funnel.',
        'Ran usability sessions to simplify the steps where users most often abandoned the funnel.',
      ],
      stack: ['Multi-step funnel design', 'Location-based matching', 'Provider scheduling'],
    },
  },
]
