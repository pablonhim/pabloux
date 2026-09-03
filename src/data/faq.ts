export interface FaqItem {
  question: string
  answer: string
}

export const faqs: FaqItem[] = [
  {
    question: 'What kind of engagements do you take on?',
    answer:
      'Fractional Product Owner and AI product advisory work — mostly B2B fintech, logistics, and consumer platforms. Discovery-to-delivery, not just strategy decks.',
  },
  {
    question: 'Can you work with teams outside Cambodia’s timezone?',
    answer:
      'Yes. I’m based in Phnom Penh (GMT+7), which overlaps well with APAC teams during the morning and EU teams late afternoon. US-hours engagements work async-first, with live calls scheduled around the overlap.',
  },
  {
    question: 'What do you need from us before we start?',
    answer:
      'Access to the actual problem: any existing research or data, a rough brief (a few paragraphs is enough), and time with the people using the system day to day — support, ops, or drivers, not just stakeholders.',
  },
  {
    question: 'How does engagement and payment work?',
    answer:
      'Fractional or ongoing engagements are billed monthly against agreed scope. Fixed-scope strategy sprints are billed upfront. Digital Store items are one-off purchases via Bakong KHQR.',
  },
  {
    question: 'Do you work solo or with a team?',
    answer:
      'I work embedded inside your existing engineering and design team as the product owner, bringing AI-assisted workflows into the process rather than replacing anyone.',
  },
  {
    question: 'What’s the best way to reach you?',
    answer:
      'Email nhimchanborey@gmail.com. If you want a sense of how I structure specs before a call, the Digital Store above has the actual templates.',
  },
]
