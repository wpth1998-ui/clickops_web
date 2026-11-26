export interface ProcessStage {
  index: string;
  title: string;
  description: string;
  timing: string;
  team: string;
  outcomes: string[];
}

export const processStages: ProcessStage[] = [
  {
    index: '01',
    title: 'Discovery',
    description:
      "A 30-minute discovery call to understand your project's vision, goals, and business needs. Post-call, you'll receive a written proposal with next steps, timeline, and price range.",
    timing: '1 week',
    team: 'Founder + Technical Lead',
    outcomes: [
      'Key functionalities outlined',
      'Price and timeline proposed',
      'Project team assembled',
    ],
  },
  {
    index: '02',
    title: 'Research & Design',
    description:
      'Deep dive into your business workflows, user needs, and technical requirements. We design the system architecture, user flows, and interface before writing any code.',
    timing: '1–2 weeks',
    team: 'Designer + Technical Lead',
    outcomes: [
      'User flows mapped',
      'System architecture defined',
      'Interface wireframes approved',
    ],
  },
  {
    index: '03',
    title: 'Build & Integrate',
    description:
      'Development of your solution with iterative check-ins. We build the AI, automation workflows, and custom systems, integrating with your existing tools and platforms.',
    timing: '2–6 weeks',
    team: 'Full Development Team',
    outcomes: [
      'Core features built',
      'Integrations connected',
      'Internal testing complete',
    ],
  },
  {
    index: '04',
    title: 'Quality Assurance',
    description:
      'Rigorous testing across all channels and devices. We verify AI accuracy, workflow reliability, and system performance before anything goes live.',
    timing: '1 week',
    team: 'QA + Technical Lead',
    outcomes: [
      'All features tested',
      'AI accuracy verified',
      'Performance optimized',
    ],
  },
  {
    index: '05',
    title: 'Launch & Support',
    description:
      'Coordinated launch with monitoring and ongoing support. We ensure a smooth rollout and provide continued maintenance, updates, and optimization.',
    timing: 'Ongoing',
    team: 'Support Team + Founder',
    outcomes: [
      'System deployed live',
      'Monitoring active',
      'Ongoing support established',
    ],
  },
];
