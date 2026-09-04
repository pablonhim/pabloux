import { useLanguage } from './LanguageContext'

export interface ProcessStepStrings {
  title: string
  copy: string
}

export interface Strings {
  header: {
    homeAria: string
    brandLink: string
  }
  hero: {
    eyebrow: string
    headlineMain: string
    headlineEm: string
    statYears: string
    statBanks: string
    statSystems: string
    cta: string
  }
  gallery: {
    eyebrow: string
    heading: string
  }
  specModal: {
    closeAria: string
    role: string
    overview: string
    highlights: string
  }
  store: {
    eyebrow: string
    heading: string
    sub: string
    preview: string
    buy: string
  }
  previewModal: {
    closeAria: string
    buy: string
  }
  process: {
    eyebrow: string
    heading: string
    steps: [ProcessStepStrings, ProcessStepStrings, ProcessStepStrings, ProcessStepStrings]
  }
  faq: {
    eyebrow: string
    heading: string
  }
  contact: {
    eyebrow: string
    headingMain: string
    headingEm: string
    sub: string
  }
  footer: {
    copyright: (year: number) => string
    openForContracts: string
    location: string
  }
  checkout: {
    payWith: string
    closeAria: string
    emailPrompt: string
    emailPlaceholder: string
    continueToPayment: string
    paymentConfirmed: string
    downloadStarted: (email: string) => string
    downloadAgain: string
    qrExpired: string
    windowClosed: string
    close: string
    order: (id: string) => string
    waitingForPayment: (mm: string, ss: string) => string
    scanInstructions: string
    qrAlt: string
  }
  languageSwitcher: {
    km: string
    en: string
  }
}

const en: Strings = {
  header: {
    homeAria: 'Pablo UX — home',
    brandLink: 'Pablo UX',
  },
  hero: {
    eyebrow: 'Product & UX Design Studio',
    headlineMain: 'Bridging enterprise product strategy',
    headlineEm: 'with AI-driven execution',
    statYears: 'Years: 10',
    statBanks: 'Banks: 18',
    statSystems: 'Systems: 4',
    cta: 'View the work',
  },
  gallery: {
    eyebrow: 'Gallery',
    heading: 'Selected Enterprise Case Studies',
  },
  specModal: {
    closeAria: 'Close spec',
    role: 'Role',
    overview: 'Overview',
    highlights: 'Highlights',
  },
  store: {
    eyebrow: 'Digital asset store',
    heading: 'Take the playbooks with you',
    sub: 'Pay with Bakong KHQR — the file unlocks automatically once payment is confirmed.',
    preview: 'Preview',
    buy: 'Buy',
  },
  previewModal: {
    closeAria: 'Close preview',
    buy: 'Buy',
  },
  process: {
    eyebrow: 'How I work',
    heading: 'Process',
    steps: [
      {
        title: 'Discover',
        copy: 'Sit with the operators and the data before touching a roadmap — treasury teams, drivers, merchants.',
      },
      {
        title: 'Define',
        copy: 'Turn ambiguity into a scoped spec: permissions matrices, routing logic, funnel steps engineering can build.',
      },
      {
        title: 'Build with AI',
        copy: 'Pair AI-assisted workflows with the team so iteration speed matches the complexity of the system.',
      },
      {
        title: 'Ship & Measure',
        copy: 'Launch, instrument the activation metric that matters, and hand back a system that keeps improving.',
      },
    ],
  },
  faq: {
    eyebrow: 'Questions',
    heading: 'Notes',
  },
  contact: {
    eyebrow: 'Contact',
    headingMain: 'Let’s scope the next',
    headingEm: 'roadmap.',
    sub: 'Open for strategy contracts, fractional PO engagements, and AI product advisory work.',
  },
  footer: {
    copyright: (year) => `© ${year} Pablo UX — by Nhim Chanborey`,
    openForContracts: 'Open for strategy contracts',
    location: 'Phnom Penh, KH',
  },
  checkout: {
    payWith: 'Pay with Bakong KHQR',
    closeAria: 'Close checkout',
    emailPrompt: 'Where should we send your download link?',
    emailPlaceholder: 'you@company.com',
    continueToPayment: 'Continue to payment',
    paymentConfirmed: 'Payment confirmed',
    downloadStarted: (email) =>
      `Your download started automatically, and the link was emailed to ${email}.`,
    downloadAgain: 'Download again',
    qrExpired: 'QR expired',
    windowClosed: 'This payment window closed. Reopen checkout to try again.',
    close: 'Close',
    order: (id) => `Order ${id}`,
    waitingForPayment: (mm, ss) => `Waiting for payment · expires in ${mm}:${ss}`,
    scanInstructions:
      'Scan with any Bakong-linked banking app. The download link is emailed to you automatically once the payment webhook confirms.',
    qrAlt: 'Bakong KHQR payment code',
  },
  languageSwitcher: {
    km: 'ខ្មែរ',
    en: 'English',
  },
}

const km: Strings = {
  header: {
    homeAria: 'Pablo UX — ទំព័រដើម',
    brandLink: 'Pablo UX',
  },
  hero: {
    eyebrow: 'ស្ទូឌីយោរចនាផលិតផល និង UX',
    headlineMain: 'ភ្ជាប់យុទ្ធសាស្ត្រផលិតផលសហគ្រាស',
    headlineEm: 'ជាមួយការអនុវត្តដែលដឹកនាំដោយ AI',
    statYears: 'ឆ្នាំ៖ 10',
    statBanks: 'ធនាគារ៖ 18',
    statSystems: 'ប្រព័ន្ធ៖ 4',
    cta: 'មើលការងារ',
  },
  gallery: {
    eyebrow: 'វិចិត្រសាល',
    heading: 'ករណីសិក្សាសហគ្រាសដែលបានជ្រើសរើស',
  },
  specModal: {
    closeAria: 'បិទព័ត៌មានលម្អិត',
    role: 'តួនាទី',
    overview: 'ទិដ្ឋភាពទូទៅ',
    highlights: 'ចំណុចសំខាន់ៗ',
  },
  store: {
    eyebrow: 'ហាងទ្រព្យសម្បត្តិឌីជីថល',
    heading: 'យកកូនសៀវភៅណែនាំទាំងនេះទៅជាមួយអ្នក',
    sub: 'បង់ប្រាក់ជាមួយ Bakong KHQR — ឯកសារនឹងបើកដោយស្វ័យប្រវត្តិនៅពេលការទូទាត់ត្រូវបានបញ្ជាក់។',
    preview: 'មើលមុន',
    buy: 'ទិញ',
  },
  previewModal: {
    closeAria: 'បិទការមើលមុន',
    buy: 'ទិញ',
  },
  process: {
    eyebrow: 'របៀបដែលខ្ញុំធ្វើការ',
    heading: 'ដំណើរការ',
    steps: [
      {
        title: 'ស្វែងយល់',
        copy: 'ចំណាយពេលជាមួយអ្នកប្រតិបត្តិការ និងទិន្នន័យ មុននឹងចាប់ផ្តើមគូសផែនទីបង្ហាញផ្លូវ — ក្រុមហិរញ្ញវត្ថុ អ្នកបើកបរ និងអ្នកលក់រាយ។',
      },
      {
        title: 'កំណត់និយមន័យ',
        copy: 'ប្រែក្លាយភាពមិនច្បាស់លាស់ទៅជាលក្ខណៈបច្ចេកទេសច្បាស់លាស់៖ តារាងសិទ្ធិចូលប្រើ តក្កវិជ្ជានៃការនាំផ្លូវ និងជំហាននៃដំណើរការដែលក្រុមវិស្វកម្មអាចសាងសង់បាន។',
      },
      {
        title: 'សាងសង់ជាមួយ AI',
        copy: 'ផ្សំដំណើរការការងារដែលមាន AI ជំនួយ ជាមួយក្រុមការងារ ដើម្បីឱ្យល្បឿននៃការធ្វើម្តងទៀតសមស្របនឹងភាពស្មុគស្មាញនៃប្រព័ន្ធ។',
      },
      {
        title: 'បញ្ចេញផលិតផល និងវាស់វែង',
        copy: 'បើកដំណើរការ តាមដានសូចនាករសំខាន់ៗ ហើយប្រគល់មកវិញនូវប្រព័ន្ធដែលបន្តរីកចម្រើន។',
      },
    ],
  },
  faq: {
    eyebrow: 'សំណួរ',
    heading: 'កំណត់ចំណាំ',
  },
  contact: {
    eyebrow: 'ទំនាក់ទំនង',
    headingMain: 'តោះកំណត់វិសាលភាព',
    headingEm: 'ផែនទីបង្ហាញផ្លូវបន្ទាប់។',
    sub: 'បើកទទួលកិច្ចសន្យាយុទ្ធសាស្ត្រ ការងារ PO ក្រៅម៉ោង និងការប្រឹក្សាផលិតផល AI។',
  },
  footer: {
    copyright: (year) => `© ${year} Pablo UX — ដោយ ញឹម ចាន់បូរី`,
    openForContracts: 'បើកទទួលកិច្ចសន្យាយុទ្ធសាស្ត្រ',
    location: 'ភ្នំពេញ កម្ពុជា',
  },
  checkout: {
    payWith: 'បង់ប្រាក់ជាមួយ Bakong KHQR',
    closeAria: 'បិទការទូទាត់',
    emailPrompt: 'តើយើងគួរផ្ញើតំណទាញយកទៅកាន់អាសយដ្ឋានណា?',
    emailPlaceholder: 'you@company.com',
    continueToPayment: 'បន្តទៅការទូទាត់',
    paymentConfirmed: 'ការទូទាត់ត្រូវបានបញ្ជាក់',
    downloadStarted: (email) =>
      `ការទាញយករបស់អ្នកបានចាប់ផ្តើមដោយស្វ័យប្រវត្តិ ហើយតំណត្រូវបានផ្ញើតាមអ៊ីមែលទៅ ${email}។`,
    downloadAgain: 'ទាញយកម្តងទៀត',
    qrExpired: 'QR បានផុតកំណត់',
    windowClosed: 'រយៈពេលទូទាត់នេះបានបិទ។ សូមបើកការទូទាត់ម្តងទៀតដើម្បីព្យាយាមម្តងទៀត។',
    close: 'បិទ',
    order: (id) => `លេខបញ្ជាទិញ ${id}`,
    waitingForPayment: (mm, ss) => `កំពុងរង់ចាំការទូទាត់ · ផុតកំណត់ក្នុងរយៈពេល ${mm}:${ss}`,
    scanInstructions:
      'ស្កេនជាមួយកម្មវិធីធនាគារណាមួយដែលភ្ជាប់ជាមួយ Bakong។ តំណទាញយកនឹងផ្ញើមកអ្នកតាមអ៊ីមែលដោយស្វ័យប្រវត្តិនៅពេលការទូទាត់ត្រូវបានបញ្ជាក់។',
    qrAlt: 'កូដទូទាត់ Bakong KHQR',
  },
  languageSwitcher: {
    km: 'ខ្មែរ',
    en: 'English',
  },
}

const dictionaries: Record<'en' | 'km', Strings> = { en, km }

export function useStrings(): Strings {
  const { language } = useLanguage()
  return dictionaries[language]
}
