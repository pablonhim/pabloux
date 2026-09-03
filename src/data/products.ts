export interface Product {
  id: string
  name: string
  tag: string
  description: string
  priceUsd: number
  format: string
  fileName: string
}

// Demo catalog — "Neutomni tear-off ticket" digital asset packages.
export const products: Product[] = [
  {
    id: 'prd-sprint-pack',
    name: 'PRD & Sprint Template Pack',
    tag: 'TEMPLATES',
    description:
      'PRD, sprint planning, and release-notes templates used to ship the case studies above.',
    priceUsd: 19,
    format: 'PDF + Notion',
    fileName: 'prd-sprint-template-pack.zip',
  },
  {
    id: 'ai-product-ops',
    name: 'AI Product Ops Playbook',
    tag: 'PLAYBOOK',
    description:
      'A step-by-step playbook for running AI feature discovery, eval design, and rollout with an engineering team.',
    priceUsd: 39,
    format: 'PDF',
    fileName: 'ai-product-ops-playbook.pdf',
  },
  {
    id: 'stakeholder-toolkit',
    name: 'Stakeholder Alignment Toolkit',
    tag: 'TOOLKIT',
    description:
      'Frameworks and slide templates for aligning execs, engineering, and design around one roadmap.',
    priceUsd: 29,
    format: 'PDF + Slides',
    fileName: 'stakeholder-alignment-toolkit.zip',
  },
  {
    id: 'bank-recon-framework',
    name: 'Multi-Bank Reconciliation Framework',
    tag: 'FRAMEWORK',
    description:
      'The reconciliation and settlement workflow framework behind the B2B Multi-Bank case study.',
    priceUsd: 49,
    format: 'PDF + Sheets',
    fileName: 'multi-bank-reconciliation-framework.zip',
  },
]
