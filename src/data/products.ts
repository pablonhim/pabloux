import type { Bilingual } from '../i18n/types'

export interface Product {
  id: string
  /** ID tag, e.g. "NEU/PKG.01" */
  code: string
  name: Bilingual
  description: Bilingual
  /** Short, concrete "what's inside" bullets — shown on the card and in the preview modal. */
  highlights: Bilingual<string[]>
  priceUsd: number
  format: string
  fileName: string
}

// Demo catalog — digital asset packages sold via Bakong KHQR.
export const products: Product[] = [
  {
    id: 'prd-sprint-pack',
    code: 'NEU/PKG.01',
    name: {
      en: 'PRD & Sprint Template Pack',
      km: 'កញ្ចប់គំរូ PRD និង Sprint',
    },
    description: {
      en: 'PRD, sprint planning, and release-notes templates used to ship the case studies above.',
      km: 'គំរូ PRD ការគ្រោងផែនការ sprint និងកំណត់ត្រាចេញផ្សាយ ដែលបានប្រើដើម្បីដឹកនាំករណីសិក្សាខាងលើ។',
    },
    highlights: {
      en: [
        '6 ready-to-fill PRD sections',
        '2-week sprint planning board',
        'Release-notes template',
      ],
      km: [
        'ផ្នែក PRD ត្រៀមបំពេញចំនួន 6',
        'ក្តារគ្រោងផែនការ sprint 2 សប្តាហ៍',
        'គំរូកំណត់ត្រាចេញផ្សាយ',
      ],
    },
    priceUsd: 29,
    format: 'PDF + Notion',
    fileName: 'prd-sprint-template-pack.zip',
  },
  {
    id: 'ai-product-ops',
    code: 'NEU/PKG.02',
    name: {
      en: 'AI Product Ops Playbook',
      km: 'កូនសៀវភៅណែនាំប្រតិបត្តិការផលិតផល AI',
    },
    description: {
      en: 'A step-by-step playbook for running AI feature discovery, eval design, and rollout with an engineering team.',
      km: 'កូនសៀវភៅណែនាំជាជំហានៗ សម្រាប់ដំណើរការស្វែងរកមុខងារ AI ការរចនាការវាយតម្លៃ និងការដាក់ឱ្យប្រើប្រាស់ជាមួយក្រុមវិស្វកម្ម។',
    },
    highlights: {
      en: [
        '5-stage discovery-to-rollout process',
        'Eval design worksheet',
        'Engineering handoff checklist',
      ],
      km: [
        'ដំណើរការ 5 ដំណាក់កាល ពីការស្វែងរករហូតដល់ការដាក់ឱ្យប្រើ',
        'សន្លឹកកិច្ចការរចនាការវាយតម្លៃ',
        'បញ្ជីត្រួតពិនិត្យប្រគល់ជូនវិស្វកម្ម',
      ],
    },
    priceUsd: 39,
    format: 'PDF',
    fileName: 'ai-product-ops-playbook.pdf',
  },
  {
    id: 'stakeholder-toolkit',
    code: 'NEU/PKG.03',
    name: {
      en: 'Stakeholder Alignment Toolkit',
      km: 'ប្រអប់ឧបករណ៍សម្របសម្រួលភាគីពាក់ព័ន្ធ',
    },
    description: {
      en: 'Frameworks and slide templates for aligning execs, engineering, and design around one roadmap.',
      km: 'គំរូ និងស្លាយសម្រាប់សម្របសម្រួលថ្នាក់គ្រប់គ្រង វិស្វកម្ម និងការរចនា ជុំវិញផែនទីបង្ហាញផ្លូវតែមួយ។',
    },
    highlights: {
      en: [
        'Roadmap-alignment slide deck',
        'RACI framework template',
        'Exec update one-pager',
      ],
      km: [
        'ស្លាយសម្របសម្រួលផែនទីបង្ហាញផ្លូវ',
        'គំរូក្របខណ្ឌ RACI',
        'ក្រដាសមួយសន្លឹកសម្រាប់ធ្វើបច្ចុប្បន្នភាពថ្នាក់គ្រប់គ្រង',
      ],
    },
    priceUsd: 29,
    format: 'PDF + Slides',
    fileName: 'stakeholder-alignment-toolkit.zip',
  },
  {
    id: 'bank-recon-framework',
    code: 'NEU/PKG.04',
    name: {
      en: 'Multi-Bank Reconciliation Framework',
      km: 'ក្របខណ្ឌផ្ទៀងផ្ទាត់គណនីពហុភាគីធនាគារ',
    },
    description: {
      en: 'The reconciliation and settlement workflow framework behind the B2B Multi-Bank case study.',
      km: 'ក្របខណ្ឌលំហូរការងារផ្ទៀងផ្ទាត់ និងទូទាត់ ដែលនៅពីក្រោយករណីសិក្សា B2B ពហុភាគីធនាគារ។',
    },
    highlights: {
      en: [
        '18-bank reconciliation workflow map',
        'RBAC permissions matrix template',
        'Settlement tracking spreadsheet',
      ],
      km: [
        'ផែនទីលំហូរផ្ទៀងផ្ទាត់ធនាគារចំនួន 18',
        'គំរូតារាងសិទ្ធិចូលប្រើ RBAC',
        'សន្លឹកតាមដានការទូទាត់',
      ],
    },
    priceUsd: 49,
    format: 'PDF + Sheets',
    fileName: 'multi-bank-reconciliation-framework.zip',
  },
]
