export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  /** Product site or in-page anchor */
  href?: string;
  external?: boolean;
  ctaLabel?: string;
}

export const products: Product[] = [
  {
    id: 'eduautomate',
    name: 'EduAutomate',
    tagline: 'Enrollment Automation',
    description:
      'AI-powered enrollment automation for training schools and education businesses. Handle course inquiries, fee questions, and enrollment 24/7 on Messenger and Telegram.',
    features: [
      'Myanmar & English AI support',
      'Course & fee Q&A automation',
      'CRM lead pipeline',
      'Messenger & Telegram channels',
    ],
    href: 'https://www.eduautomate.app',
    external: true,
    ctaLabel: 'Visit EduAutomate',
  },
  {
    id: 'salepilot',
    name: 'Sale Pilot',
    tagline: 'Sales Assistant',
    description:
      'Intelligent sales assistant for retail and local businesses. Automate product inquiries, pricing questions, and customer support across messaging platforms.',
    features: [
      'Product & price Q&A',
      'Automatic lead capture',
      'Multi-channel support',
      'Business hours automation',
    ],
  },
  {
    id: 'propertyleaddesk',
    name: 'Property Lead Desk',
    tagline: 'Real Estate Leads',
    description:
      'Automated lead capture and management for real estate agencies. Qualify property inquiries, schedule viewings, and manage leads automatically.',
    features: [
      'Property inquiry automation',
      'Lead qualification',
      'Viewing scheduler',
      'CRM integration',
    ],
  },
];
