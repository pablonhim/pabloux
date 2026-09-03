export interface CaseStudySpec {
  role: string
  overview: string
  highlights: string[]
  stack: string[]
}

export interface CaseStudy {
  id: string
  name: string
  client: string
  category: string
  summary: string
  tags: string[]
  spec: CaseStudySpec
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'b2b-multi-bank',
    name: 'Enterprise B2B Banking & Multi-Bank Platform',
    client: 'Multi-Bank Consortium — Cambodia',
    category: 'FINTECH / BANKING',
    summary:
      'Owned the product for an enterprise B2B gateway that lets corporate clients inquire balances and transaction activity across up to 18 partner banks from one dashboard, governed by a role-based access control (RBAC) model for approvals and visibility.',
    tags: ['18 BANKS', 'RBAC', 'BALANCE INQUIRY', 'APPROVAL WORKFLOW'],
    spec: {
      role: 'Senior Product Owner',
      overview:
        'Enterprise treasury teams needed one place to inquire balances and activity instead of logging into up to 18 separate bank portals. I owned the product definition for the inquiry gateway and the permissioning model governing it.',
      highlights: [
        'Designed the multi-bank inquiry flow spanning up to 18 partner banks behind one authenticated session.',
        'Defined the RBAC model — roles, scopes, and approval chains — so finance, treasury, and admin users see only what their role permits.',
        "Worked with engineering to normalize each bank's differing API/response shape into one consistent inquiry response.",
        'Ran UAT with enterprise treasury teams to validate approval-chain edge cases before rollout.',
      ],
      stack: ['RBAC governance', 'Multi-bank API orchestration', 'Audit logging'],
    },
  },
  {
    id: 'plasfooddou',
    name: 'PlasFoodDou Eco-Reward Mobile App',
    client: 'PlasFoodDou',
    category: 'SUSTAINABILITY / MOBILE',
    summary:
      'Owned the product for a mobile eco-reward app where customers scan a QR code at checkout to earn rewards for using reusable packaging, backed by merchant-side POS integrations that validate and settle each redemption in real time.',
    tags: ['QR SCAN', 'MERCHANT POS', 'ECO-REWARDS', 'MOBILE'],
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
    id: 'oto-delivery',
    name: 'OTO Payment & Authentication Flow',
    client: 'OTO',
    category: 'FINTECH / AUTH',
    summary:
      "Owned OTO's payment and authentication experience, including a multi-factor authentication flow and a set of dynamic modal states that adapt to the user's verification method, payment status, and error/retry path without leaving checkout.",
    tags: ['MFA', 'DYNAMIC MODALS', 'PAYMENT AUTH', 'ERROR HANDLING'],
    spec: {
      role: 'Product Owner',
      overview:
        'Payment authentication needed to stay secure without breaking checkout momentum. I owned the flow design connecting multi-factor auth to a single modal component that changes state rather than forcing a page reload.',
      highlights: [
        'Mapped every authentication and payment state (pending, MFA challenge, retry, success, failure) into one dynamic modal state machine.',
        'Defined the multi-factor auth flow and its fallback paths for expired or failed challenges.',
        'Reduced checkout drop-off by keeping the user in one continuous modal instead of redirecting across pages.',
        'Worked with engineering and security to balance verification friction against conversion.',
      ],
      stack: ['Multi-factor auth', 'Modal state machine', 'Payment gateway integration'],
    },
  },
  {
    id: 'home-service',
    name: 'Home Service Booking Platform',
    client: 'Home Service',
    category: 'CONSUMER / SERVICES',
    summary:
      'Owned the booking product for an on-demand home services platform, designing a multi-step booking funnel that matches customers to available providers by location, service type, and schedule.',
    tags: ['BOOKING FUNNEL', 'LOCATION MATCHING', 'MULTI-STEP UX', 'PROVIDER SUPPLY'],
    spec: {
      role: 'Product Owner',
      overview:
        'Booking a home service involves several dependent choices — service type, location, and time. I owned the multi-step funnel and the location-matching logic that pairs each booking with an available nearby provider.',
      highlights: [
        'Designed the multi-step booking funnel (service → location → schedule → confirm) to reduce drop-off between steps.',
        'Defined the location-matching logic that pairs bookings with available providers by proximity, service category, and schedule.',
        'Aligned three squads (booking, provider ops, and payments) around one activation metric for the funnel.',
        'Ran usability sessions to simplify the steps where users most often abandoned the funnel.',
      ],
      stack: ['Multi-step funnel design', 'Location-based matching', 'Provider scheduling'],
    },
  },
]
