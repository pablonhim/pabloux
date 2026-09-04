import type { Bilingual } from '../i18n/types'

export interface CaseStudySpec {
  role: Bilingual
  overview: Bilingual
  highlights: Bilingual<string[]>
  stack: Bilingual<string[]>
}

export interface CaseStudy {
  id: string
  /** ID tag, e.g. "PKG/FIN.01" */
  code: string
  name: Bilingual
  oneLiner: Bilingual
  spec: CaseStudySpec
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'b2b-multi-bank',
    code: 'PKG/FIN.01',
    name: {
      en: 'Enterprise B2B Multi-Bank Platform',
      km: 'វេទិកាធនាគារពហុភាគីសហគ្រាស B2B',
    },
    oneLiner: {
      en: 'Inquire balances across 18 Cambodian banks from one dashboard, governed by a full RBAC permissions matrix.',
      km: 'សាកសួរសមតុល្យគណនីនៅធនាគារកម្ពុជាចំនួន 18 តាមរយៈផ្ទាំងគ្រប់គ្រងតែមួយ ដែលគ្រប់គ្រងដោយតារាងសិទ្ធិចូលប្រើ RBAC ពេញលេញ។',
    },
    spec: {
      role: { en: 'Senior Product Owner', km: 'ប្រធានផលិតផលជាន់ខ្ពស់' },
      overview: {
        en: 'Enterprise treasury teams needed one place to inquire balances and activity instead of logging into up to 18 separate bank portals. I owned the product definition for the inquiry gateway and the permissioning model governing it.',
        km: 'ក្រុមហិរញ្ញវត្ថុសហគ្រាសត្រូវការកន្លែងតែមួយដើម្បីសាកសួរសមតុល្យ និងសកម្មភាព ជំនួសឱ្យការចូលប្រើវិបផតថលធនាគារដាច់ដោយឡែករហូតដល់ 18។ ខ្ញុំទទួលបន្ទុកលើនិយមន័យផលិតផលសម្រាប់ច្រកសាកសួរ និងគំរូសិទ្ធិចូលប្រើដែលគ្រប់គ្រងវា។',
      },
      highlights: {
        en: [
          'Designed the multi-bank inquiry flow spanning up to 18 partner banks behind one authenticated session.',
          'Defined the RBAC permissions matrix — roles, scopes, and approval chains — so finance, treasury, and admin users see only what their role permits.',
          "Worked with engineering to normalize each bank's differing API/response shape into one consistent inquiry response.",
          'Ran UAT with enterprise treasury teams to validate approval-chain edge cases before rollout.',
        ],
        km: [
          'រចនាលំហូរសាកសួរពហុភាគីធនាគារ ដែលគ្របដណ្តប់ធនាគារដៃគូរហូតដល់ 18 នៅក្នុងសម័យចូលប្រើតែមួយ។',
          'កំណត់និយមន័យតារាងសិទ្ធិចូលប្រើ RBAC — តួនាទី វិសាលភាព និងខ្សែសង្វាក់អនុម័ត — ដើម្បីឱ្យអ្នកប្រើផ្នែកហិរញ្ញវត្ថុ ហិរញ្ញប្បទាន និងអ្នកគ្រប់គ្រង ឃើញតែអ្វីដែលតួនាទីរបស់ពួកគេអនុញ្ញាត។',
          'សហការជាមួយវិស្វកម្មដើម្បីធ្វើឱ្យទម្រង់ API/ការឆ្លើយតបខុសគ្នារបស់ធនាគារនីមួយៗ មានលក្ខណៈស្របគ្នាទៅជាការឆ្លើយតបសាកសួរតែមួយ។',
          'ធ្វើតេស្ត UAT ជាមួយក្រុមហិរញ្ញវត្ថុសហគ្រាស ដើម្បីផ្ទៀងផ្ទាត់ករណីលម្អិតនៃខ្សែសង្វាក់អនុម័ត មុននឹងដាក់ឱ្យប្រើប្រាស់ជាផ្លូវការ។',
        ],
      },
      stack: {
        en: ['RBAC permissions matrix', 'Multi-bank API orchestration', 'Audit logging'],
        km: ['តារាងសិទ្ធិចូលប្រើ RBAC', 'ការសម្របសម្រួល API ពហុភាគីធនាគារ', 'កំណត់ហេតុសវនកម្ម'],
      },
    },
  },
  {
    id: 'oto-delivery',
    code: 'PKG/LOG.02',
    name: {
      en: 'OTO Delivery — Multi-Pin Routing',
      km: 'OTO Delivery — ការនាំផ្លូវពហុចំណុច',
    },
    oneLiner: {
      en: 'Multi-pin location drop-offs and a driver HUD UX for real-time last-mile routing decisions.',
      km: 'ការទម្លាក់ទំនិញច្រើនទីតាំង និង UX ផ្ទាំងគ្រប់គ្រងសម្រាប់អ្នកបើកបរ សម្រាប់ការសម្រេចចិត្តនាំផ្លូវដំណាក់កាលចុងក្រោយតាមពេលវេលាជាក់ស្តែង។',
    },
    spec: {
      role: { en: 'Product Owner', km: 'ប្រធានផលិតផល' },
      overview: {
        en: 'OTO drivers needed to handle multiple drop-offs in a single run without losing track of sequence or ETA. I owned the multi-pin routing flow and the in-app driver HUD that surfaces the next stop, distance, and customer instructions at a glance.',
        km: 'អ្នកបើកបររបស់ OTO ត្រូវការគ្រប់គ្រងការទម្លាក់ទំនិញច្រើនកន្លែងក្នុងការធ្វើដំណើរតែមួយ ដោយមិនបាត់បង់លំដាប់ ឬពេលវេលាដល់។ ខ្ញុំទទួលបន្ទុកលើលំហូរនាំផ្លូវពហុចំណុច និង HUD អ្នកបើកបរនៅក្នុងកម្មវិធី ដែលបង្ហាញចំណុចបញ្ឈប់បន្ទាប់ ចម្ងាយ និងសេចក្តីណែនាំអតិថិជនក្នុងមួយភ្នែក។',
      },
      highlights: {
        en: [
          'Designed the multi-pin drop-off flow so a single delivery run carries ordered stops instead of one pin per trip.',
          'Defined the driver HUD UX — next-stop distance, ETA, and customer notes surfaced without leaving the map view.',
          'Worked with engineering on re-sequencing logic when a drop-off is skipped, delayed, or added mid-route.',
          'Ran driver-side field tests to cut the taps needed to complete a multi-stop run.',
        ],
        km: [
          'រចនាលំហូរទម្លាក់ទំនិញពហុចំណុច ដើម្បីឱ្យការធ្វើដំណើរដឹកជញ្ជូនតែមួយផ្ទុកចំណុចបញ្ឈប់តាមលំដាប់ ជំនួសឱ្យចំណុចតែមួយក្នុងមួយដំណើរ។',
          'កំណត់និយមន័យ UX HUD អ្នកបើកបរ — ចម្ងាយចំណុចបញ្ឈប់បន្ទាប់ ពេលវេលាដល់ និងកំណត់ចំណាំអតិថិជន ដែលបង្ហាញដោយមិនចាំបាច់ចាកចេញពីទិដ្ឋភាពផែនទី។',
          'សហការជាមួយវិស្វកម្មលើតក្កវិជ្ជារៀបចំលំដាប់ឡើងវិញ នៅពេលចំណុចទម្លាក់មួយត្រូវរំលង ពន្យារពេល ឬបន្ថែមកណ្តាលផ្លូវ។',
          'ធ្វើតេស្តជាក់ស្តែងជាមួយអ្នកបើកបរ ដើម្បីកាត់បន្ថយចំនួនចុចដែលត្រូវការដើម្បីបញ្ចប់ដំណើរច្រើនចំណុចបញ្ឈប់។',
        ],
      },
      stack: {
        en: ['Multi-pin routing', 'Driver HUD UX', 'Real-time ETA calculation'],
        km: ['ការនាំផ្លូវពហុចំណុច', 'UX HUD អ្នកបើកបរ', 'ការគណនាពេលវេលាមកដល់ជាក់ស្តែង'],
      },
    },
  },
  {
    id: 'plasfooddou',
    code: 'PKG/ECO.03',
    name: {
      en: 'PlasFoodDou Eco-Rewards',
      km: 'PlasFoodDou រង្វាន់អេកូ',
    },
    oneLiner: {
      en: 'QR-scan eco-rewards for reusable packaging, backed by merchant POS integrations at checkout.',
      km: 'រង្វាន់អេកូតាមការស្កេន QR សម្រាប់កញ្ចប់ដែលប្រើឡើងវិញបាន គាំទ្រដោយការភ្ជាប់ប្រព័ន្ធ POS អ្នកលក់ ពេលទូទាត់។',
    },
    spec: {
      role: { en: 'Product Owner', km: 'ប្រធានផលិតផល' },
      overview: {
        en: 'PlasFoodDou rewards customers for cutting single-use plastic. I owned the reward loop from QR scan to redemption, and the merchant-facing POS integration that makes each scan verifiable at checkout.',
        km: 'PlasFoodDou ផ្តល់រង្វាន់ដល់អតិថិជនចំពោះការកាត់បន្ថយកញ្ចប់ប្លាស្ទិកប្រើតែម្តង។ ខ្ញុំទទួលបន្ទុកលើវដ្តរង្វាន់ចាប់ពីការស្កេន QR រហូតដល់ការប្តូរយករង្វាន់ និងការភ្ជាប់ប្រព័ន្ធ POS សម្រាប់អ្នកលក់ ដែលធ្វើឱ្យការស្កេននីមួយៗអាចផ្ទៀងផ្ទាត់បានពេលទូទាត់។',
      },
      highlights: {
        en: [
          'Designed the QR scan-to-reward flow: generate, scan, validate, and credit rewards within one checkout interaction.',
          'Scoped merchant POS integrations so participating stores could validate and settle redemptions without extra hardware.',
          'Defined duplicate-scan and fraud safeguards to keep the reward ledger trustworthy for merchants.',
          'Partnered with merchant operations to onboard and train store staff on the redemption flow.',
        ],
        km: [
          'រចនាលំហូរពីការស្កេន QR ដល់ការទទួលរង្វាន់៖ បង្កើត ស្កេន ផ្ទៀងផ្ទាត់ និងផ្តល់ក្រេឌីតរង្វាន់ក្នុងអន្តរកម្មទូទាត់តែមួយ។',
          'កំណត់វិសាលភាពការភ្ជាប់ប្រព័ន្ធ POS សម្រាប់អ្នកលក់ ដើម្បីឱ្យហាងចូលរួមអាចផ្ទៀងផ្ទាត់ និងទូទាត់ការប្តូររង្វាន់ដោយមិនចាំបាច់ប្រើឧបករណ៍បន្ថែម។',
          'កំណត់វិធានការការពារការស្កេនស្ទួន និងការក្លែងបន្លំ ដើម្បីរក្សាភាពជឿទុកចិត្តបានចំពោះបញ្ជីរង្វាន់សម្រាប់អ្នកលក់។',
          'សហការជាមួយផ្នែកប្រតិបត្តិការអ្នកលក់ ដើម្បីណែនាំ និងបណ្តុះបណ្តាលបុគ្គលិកហាងលើលំហូរប្តូររង្វាន់។',
        ],
      },
      stack: {
        en: ['QR generation & scanning', 'POS integration', 'Reward ledger'],
        km: ['ការបង្កើត និងស្កេន QR', 'ការភ្ជាប់ប្រព័ន្ធ POS', 'បញ្ជីរង្វាន់'],
      },
    },
  },
  {
    id: 'home-service',
    code: 'PKG/SVC.04',
    name: {
      en: 'Home Service Booking Platform',
      km: 'វេទិកាកក់សេវាកម្មតាមផ្ទះ',
    },
    oneLiner: {
      en: 'On-demand technician booking funnel matching customers to providers by location, service, and schedule.',
      km: 'លំហូរកក់ជាងបច្ចេកទេសតាមតម្រូវការ ដែលផ្គូផ្គងអតិថិជនទៅអ្នកផ្តល់សេវាតាមទីតាំង សេវាកម្ម និងកាលវិភាគ។',
    },
    spec: {
      role: { en: 'Product Owner', km: 'ប្រធានផលិតផល' },
      overview: {
        en: 'Booking a home service involves several dependent choices — service type, location, and time. I owned the multi-step funnel and the location-matching logic that pairs each booking with an available nearby technician.',
        km: 'ការកក់សេវាកម្មតាមផ្ទះមួយពាក់ព័ន្ធនឹងជម្រើសពឹងផ្អែកគ្នាច្រើន — ប្រភេទសេវាកម្ម ទីតាំង និងពេលវេលា។ ខ្ញុំទទួលបន្ទុកលើលំហូរច្រើនជំហាន និងតក្កវិជ្ជាផ្គូផ្គងទីតាំង ដែលផ្គូផ្គងការកក់នីមួយៗទៅជាងបច្ចេកទេសដែលនៅជិត និងទំនេរ។',
      },
      highlights: {
        en: [
          'Designed the multi-step booking funnel (service → location → schedule → confirm) to reduce drop-off between steps.',
          'Defined the location-matching logic that pairs bookings with available technicians by proximity, service category, and schedule.',
          'Aligned three squads (booking, provider ops, and payments) around one activation metric for the funnel.',
          'Ran usability sessions to simplify the steps where users most often abandoned the funnel.',
        ],
        km: [
          'រចនាលំហូរកក់ច្រើនជំហាន (សេវាកម្ម → ទីតាំង → កាលវិភាគ → បញ្ជាក់) ដើម្បីកាត់បន្ថយការបោះបង់រវាងជំហាន។',
          'កំណត់និយមន័យតក្កវិជ្ជាផ្គូផ្គងទីតាំង ដែលផ្គូផ្គងការកក់ទៅជាងបច្ចេកទេសដែលមានតាមភាពនៅជិត ប្រភេទសេវាកម្ម និងកាលវិភាគ។',
          'សម្របសម្រួលក្រុមការងារបីក្រុម (ការកក់ ប្រតិបត្តិការអ្នកផ្តល់សេវា និងការទូទាត់) ជុំវិញសូចនាករធ្វើឱ្យសកម្មតែមួយសម្រាប់លំហូរនេះ។',
          'ធ្វើសម័យសាកល្បងភាពងាយស្រួលប្រើ ដើម្បីធ្វើឱ្យសាមញ្ញនូវជំហានដែលអ្នកប្រើច្រើនតែបោះបង់លំហូរ។',
        ],
      },
      stack: {
        en: ['Multi-step funnel design', 'Location-based matching', 'Provider scheduling'],
        km: ['រចនាលំហូរកក់ច្រើនជំហាន', 'ការផ្គូផ្គងតាមទីតាំង', 'កាលវិភាគអ្នកផ្តល់សេវា'],
      },
    },
  },
]
