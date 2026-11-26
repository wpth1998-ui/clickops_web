export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Product {
  name: string;
  description: string;
  href: string;
}

export const products: Product[] = [
  {
    name: 'EduAutomate',
    description: 'AI-powered enrollment automation for training schools and education businesses.',
    href: 'https://www.eduautomate.app',
  },
  {
    name: 'Sale Pilot',
    description: 'Intelligent sales assistant for retail and local business support.',
    href: '#products',
  },
  {
    name: 'Property Lead Desk',
    description: 'Automated lead capture and management for real estate agencies.',
    href: '#products',
  },
];

export const navItems: NavItem[] = [
  {
    label: 'Products',
    href: '#products',
    children: products.map((p) => ({
      label: p.name,
      href: p.href,
    })),
  },
  { label: 'Solutions', href: '#business-solutions' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'FAQ', href: '#faq' },
];
