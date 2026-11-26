export interface CaseStudyPoint {
  text: string;
}

export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  before: CaseStudyPoint[];
  after: CaseStudyPoint[];
  primaryCta: string;
  secondaryCta: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'eduautomate-case',
    category: 'EDUCATION / ENROLLMENT',
    title: 'From manual replies to streamlined enrollment.',
    before: [
      { text: 'Manual Messenger replies across branches.' },
      { text: 'Course and fee questions lost after hours.' },
    ],
    after: [
      { text: '24/7 AI enrollment Q&A in Myanmar.' },
      { text: 'Organized CRM lead pipeline.' },
    ],
    primaryCta: 'Read Full Case Study',
    secondaryCta: 'Build Something Similar',
  },
  {
    id: 'salepilot-case',
    category: 'LOCAL BUSINESS / RETAIL',
    title: 'From scattered inquiries to automated support.',
    before: [
      { text: 'Business hours only responses.' },
      { text: 'Repetitive product and price questions.' },
    ],
    after: [
      { text: '24/7 AI product and service Q&A.' },
      { text: 'Automatic lead capture to CRM.' },
    ],
    primaryCta: 'Read Full Case Study',
    secondaryCta: 'Build Something Similar',
  },
];
