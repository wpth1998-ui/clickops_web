export interface Service {
  index: string;
  title: string;
  description: string;
  iconName: string;
  href: string;
}

export const services: Service[] = [
  {
    index: '01',
    title: 'AI Customer Support',
    description:
      'Answer customers 24/7 on Messenger and Telegram, qualify intent, and route serious inquiries to your team in Myanmar and English.',
    iconName: 'MessageSquare',
    href: '#contact',
  },
  {
    index: '02',
    title: 'Workflow Automation',
    description:
      'Move leads from ads and inboxes into Sheets, CRM, and team alerts automatically so nothing is lost between channels.',
    iconName: 'Workflow',
    href: '#contact',
  },
  {
    index: '03',
    title: 'Web Development',
    description:
      'Enrollment portals, admin dashboards, and internal tools shaped around how your business actually runs.',
    iconName: 'Globe',
    href: '#contact',
  },
  {
    index: '04',
    title: 'Mobile Applications',
    description:
      'Apps for customers and field staff when your workflow needs check-ins, tasks, or self-service beyond chat.',
    iconName: 'Smartphone',
    href: '#contact',
  },
];
