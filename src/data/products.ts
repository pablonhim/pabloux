export interface Product {
  id: string
  /** Monospace ID tag, e.g. "NEU/PKG.01" */
  code: string
  name: string
  description: string
  priceUsd: number
  format: string
  fileName: string
}

// Demo catalog — "Neutomni tear-off receipt" digital asset packages.
export const products: Product[] = [
  {
    id: 'prd-sprint-pack',
    code: 'NEU/PKG.01',
    name: 'PRD & Sprint Template Pack',
    description:
      'PRD, sprint planning, and release-notes templates used to ship the case studies above.',
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
    priceUsd: 49,
    format: 'PDF + Sheets',
    fileName: 'multi-bank-reconciliation-framework.zip',
  },
]
