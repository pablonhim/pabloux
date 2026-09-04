export interface Product {
  id: string
  /** ID tag, e.g. "NEU/PKG.01" */
  code: string
  name: string
  description: string
  /** Short, concrete "what's inside" bullets — shown on the card and in the preview modal. */
  highlights: string[]
  priceUsd: number
  format: string
  fileName: string
}

// Demo catalog — digital asset packages sold via Bakong KHQR.
export const products: Product[] = [
  {
    id: 'prd-sprint-pack',
    code: 'NEU/PKG.01',
    name: 'PRD & Sprint Template Pack',
    description:
      'PRD, sprint planning, and release-notes templates used to ship the case studies above.',
    highlights: [
      '6 ready-to-fill PRD sections',
      '2-week sprint planning board',
      'Release-notes template',
    ],
    priceUsd: 29,
    format: 'PDF + Notion',
    fileName: 'prd-sprint-template-pack.zip',
  },
  {
    id: 'ai-product-ops',
    code: 'NEU/PKG.02',
    name: 'AI Product Ops Playbook',
    description:
      'A step-by-step playbook for running AI feature discovery, eval design, and rollout with an engineering team.',
    highlights: [
      '5-stage discovery-to-rollout process',
      'Eval design worksheet',
      'Engineering handoff checklist',
    ],
    priceUsd: 39,
    format: 'PDF',
    fileName: 'ai-product-ops-playbook.pdf',
  },
  {
    id: 'stakeholder-toolkit',
    code: 'NEU/PKG.03',
    name: 'Stakeholder Alignment Toolkit',
    description:
      'Frameworks and slide templates for aligning execs, engineering, and design around one roadmap.',
    highlights: [
      'Roadmap-alignment slide deck',
      'RACI framework template',
      'Exec update one-pager',
    ],
    priceUsd: 29,
    format: 'PDF + Slides',
    fileName: 'stakeholder-alignment-toolkit.zip',
  },
  {
    id: 'bank-recon-framework',
    code: 'NEU/PKG.04',
    name: 'Multi-Bank Reconciliation Framework',
    description:
      'The reconciliation and settlement workflow framework behind the B2B Multi-Bank case study.',
    highlights: [
      '18-bank reconciliation workflow map',
      'RBAC permissions matrix template',
      'Settlement tracking spreadsheet',
    ],
    priceUsd: 49,
    format: 'PDF + Sheets',
    fileName: 'multi-bank-reconciliation-framework.zip',
  },
]
