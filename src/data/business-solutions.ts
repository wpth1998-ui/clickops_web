export interface BusinessSolution {
  id: string;
  problem: string;
  solution: string;
  outcome: string;
  industries: string[];
}

export const businessSolutions: BusinessSolution[] = [
  {
    id: 'after-hours',
    problem: 'Customer messages pile up after you close',
    solution:
      'AI answers on Messenger and Telegram in Myanmar and English, with clear rules for when a human should take over.',
    outcome: 'Parents and buyers get replies anytime; your team only handles serious intent.',
    industries: ['Training schools', 'Retail', 'Services'],
  },
  {
    id: 'lost-leads',
    problem: 'Leads from Facebook never reach your spreadsheet or CRM',
    solution:
      'Automated routing from ads and inbox to Sheets, Telegram alerts, and your CRM—deduped and logged.',
    outcome: 'Every name is captured once, in the system your team already checks.',
    industries: ['Local business', 'Real estate', 'Education'],
  },
  {
    id: 'manual-ops',
    problem: 'Enrollment, payments, and status live in chat threads',
    solution:
      'Portals and dashboards built for how you work: enrollments, payments, handovers, and reporting in one place.',
    outcome: 'Admins stop searching chats; owners see pipeline and trends at a glance.',
    industries: ['Training schools', 'Membership businesses'],
  },
  {
    id: 'no-dev-team',
    problem: 'You need software but cannot hire a full in-house dev team',
    solution:
      'ClickOps ships the bot, integrations, and apps—and stays on for changes, hosting, and support.',
    outcome: 'One partner from discovery through launch, without juggling multiple vendors.',
    industries: ['SMEs', 'Growing teams', 'Multi-branch ops'],
  },
];