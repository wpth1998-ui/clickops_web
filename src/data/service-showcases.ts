export interface ServiceShowcase {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  href: string;
  visual: 'messenger' | 'workflow' | 'web' | 'mobile';
  reverse?: boolean;
}

export const serviceShowcases: ServiceShowcase[] = [
  {
    id: 'ai-support',
    title: 'Stop losing serious buyers in Messenger and Telegram',
    subtitle: 'AI Customer Support',
    description:
      'Parents and customers get clear answers in Myanmar and English. AI collects phone numbers and intent; your team steps in only when enrollment or a sale is real.',
    ctaLabel: 'Solve after-hours inquiries →',
    href: '#contact',
    visual: 'messenger',
  },
  {
    id: 'automation',
    title: 'Leads land where your team already works',
    subtitle: 'Workflow Automation',
    description:
      'Facebook ads, inbox, Sheets, Telegram, and CRM stay in sync so managers are not copying names from chat at the end of the day.',
    ctaLabel: 'Fix lead drop-off →',
    href: '#contact',
    visual: 'workflow',
    reverse: true,
  },
  {
    id: 'web',
    title: 'Run enrollment and ops from one dashboard',
    subtitle: 'Web Development',
    description:
      'Student enrollments, payments, status, and handovers in a portal built for your process—not a generic template that fights your workflow.',
    ctaLabel: 'Plan your admin system →',
    href: '#contact',
    visual: 'web',
  },
  {
    id: 'mobile',
    title: 'Give field teams and customers a proper app',
    subtitle: 'Mobile Applications',
    description:
      'Check-ins, tasks, and customer self-service on iOS and Android when chat and spreadsheets are no longer enough for how you operate.',
    ctaLabel: 'Scope a mobile workflow →',
    href: '#contact',
    visual: 'mobile',
    reverse: true,
  },
];