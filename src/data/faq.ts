import type { Bilingual } from '../i18n/types'

export interface FaqItem {
  question: Bilingual
  answer: Bilingual
}

export const faqs: FaqItem[] = [
  {
    question: {
      en: 'What kind of engagements do you take on?',
      km: 'តើអ្នកទទួលកិច្ចសន្យាប្រភេទណាខ្លះ?',
    },
    answer: {
      en: 'Fractional Product Owner and AI product advisory work — mostly B2B fintech, logistics, and consumer platforms. Discovery-to-delivery, not just strategy decks.',
      km: 'ការងារជាប្រធានផលិតផលក្រៅម៉ោង និងការប្រឹក្សាផលិតផល AI — ភាគច្រើននៅលើវេទិកា B2B ហិរញ្ញវត្ថុបច្ចេកវិទ្យា ភស្តុភារ និងអ្នកប្រើប្រាស់។ ចាប់ពីការស្វែងរករហូតដល់ការប្រគល់ជូន មិនមែនគ្រាន់តែជាឯកសារយុទ្ធសាស្ត្រនោះទេ។',
    },
  },
  {
    question: {
      en: 'Can you work with teams outside Cambodia’s timezone?',
      km: 'តើអ្នកអាចធ្វើការជាមួយក្រុមនៅក្រៅតំបន់ពេលវេលាកម្ពុជាបានទេ?',
    },
    answer: {
      en: 'Yes. I’m based in Phnom Penh (GMT+7), which overlaps well with APAC teams during the morning and EU teams late afternoon. US-hours engagements work async-first, with live calls scheduled around the overlap.',
      km: 'បាទ/ចាស។ ខ្ញុំមានទីតាំងនៅភ្នំពេញ (GMT+7) ដែលស៊ីគ្នាល្អជាមួយក្រុមអាស៊ីប៉ាស៊ីហ្វិកនៅពេលព្រឹក និងក្រុមអឺរ៉ុបនៅពេលរសៀល។ កិច្ចសន្យាតាមម៉ោងសហរដ្ឋអាមេរិកធ្វើការតាមរបៀប async ជាមុន ដោយមានការហៅផ្ទាល់តាមកាលវិភាគត្រួតគ្នា។',
    },
  },
  {
    question: {
      en: 'What do you need from us before we start?',
      km: 'តើអ្នកត្រូវការអ្វីខ្លះពីយើងមុនចាប់ផ្តើម?',
    },
    answer: {
      en: 'Access to the actual problem: any existing research or data, a rough brief (a few paragraphs is enough), and time with the people using the system day to day — support, ops, or drivers, not just stakeholders.',
      km: 'ការចូលប្រើបញ្ហាជាក់ស្តែង៖ ការស្រាវជ្រាវ ឬទិន្នន័យដែលមានស្រាប់ ព័ត៌មានសង្ខេបខ្លីៗ (ប៉ុន្មានកថាខណ្ឌគឺគ្រប់គ្រាន់ហើយ) និងពេលវេលាជាមួយអ្នកប្រើប្រព័ន្ធជារៀងរាល់ថ្ងៃ — ផ្នែកគាំទ្រ ប្រតិបត្តិការ ឬអ្នកបើកបរ មិនមែនត្រឹមតែភាគីពាក់ព័ន្ធនោះទេ។',
    },
  },
  {
    question: {
      en: 'How does engagement and payment work?',
      km: 'តើកិច្ចសន្យា និងការទូទាត់ដំណើរការយ៉ាងណា?',
    },
    answer: {
      en: 'Fractional or ongoing engagements are billed monthly against agreed scope. Fixed-scope strategy sprints are billed upfront. Digital Store items are one-off purchases via Bakong KHQR.',
      km: 'កិច្ចសន្យាក្រៅម៉ោង ឬបន្តគិតថ្លៃប្រចាំខែទៅតាមវិសាលភាពដែលបានព្រមព្រៀង។ គម្រោង sprint យុទ្ធសាស្ត្រដែលមានវិសាលភាពថេរគិតថ្លៃជាមុន។ ទំនិញនៅហាងឌីជីថលទិញតែម្តងតាមរយៈ Bakong KHQR។',
    },
  },
  {
    question: {
      en: 'Do you work solo or with a team?',
      km: 'តើអ្នកធ្វើការតែម្នាក់ឯង ឬជាមួយក្រុម?',
    },
    answer: {
      en: 'I work embedded inside your existing engineering and design team as the product owner, bringing AI-assisted workflows into the process rather than replacing anyone.',
      km: 'ខ្ញុំធ្វើការចូលរួមក្នុងក្រុមវិស្វកម្ម និងក្រុមរចនាដែលមានស្រាប់របស់អ្នក ក្នុងតួនាទីជាប្រធានផលិតផល ដោយនាំយកដំណើរការជំនួយ AI ចូលទៅក្នុងដំណើរការ ជំនួសឱ្យការជំនួសនរណាម្នាក់។',
    },
  },
  {
    question: {
      en: 'What’s the best way to reach you?',
      km: 'តើវិធីល្អបំផុតដើម្បីទាក់ទងអ្នកគឺជាអ្វី?',
    },
    answer: {
      en: 'Email nhimchanborey@gmail.com. If you want a sense of how I structure specs before a call, the Digital Store above has the actual templates.',
      km: 'អ៊ីមែល nhimchanborey@gmail.com។ ប្រសិនបើអ្នកចង់ដឹងពីរបៀបដែលខ្ញុំរៀបចំឯកសារលក្ខណៈបច្ចេកទេសមុននឹងហៅទូរស័ព្ទ ហាងឌីជីថលខាងលើមានគំរូជាក់ស្តែង។',
    },
  },
]
