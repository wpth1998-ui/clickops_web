export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: 'Does ClickOps support Myanmar language?',
    answer:
      'Yes. ClickOps AI solutions can be configured for Myanmar Unicode, natural Burmese conversations and mixed Myanmar-English messages.',
  },
  {
    question: 'How fast can we launch?',
    answer:
      'Most projects launch within 4–8 weeks depending on complexity. Simple AI chatbot setups can go live in as little as 2 weeks. We provide a clear timeline during the discovery phase.',
  },
  {
    question: 'Do I need to provide Facebook Page access?',
    answer:
      'Yes, for Messenger-based solutions we require admin or developer access to your Facebook Page. We guide you through the process and handle all technical setup securely.',
  },
  {
    question: "What happens when AI doesn't know the answer?",
    answer:
      'Our AI systems include human handoff capabilities. When the AI encounters a question it cannot confidently answer, it seamlessly transfers the conversation to your team with full context.',
  },
  {
    question: 'Can ClickOps connect to Google Sheets or our CRM?',
    answer:
      'Yes. We specialize in business integrations — Google Sheets, CRM platforms, Telegram, APIs, and other internal tools can be connected through our n8n automation workflows.',
  },
  {
    question: 'Are there setup fees?',
    answer:
      'Project pricing is provided upfront during the discovery phase. You receive a clear scope, timeline, and price — no hidden fees. Payment terms are discussed and agreed before work begins.',
  },
  {
    question: 'Can the AI handle KPay or Wave payment information?',
    answer:
      'The AI can share your payment details (KPay, Wave, bank transfer info) and guide customers through payment steps. It does not process payments directly but can confirm and relay payment instructions.',
  },
  {
    question: 'What happens when our products or prices change?',
    answer:
      'Updating your AI is straightforward. We provide a managed update process — send us your changes and we update the AI knowledge base. For frequent updates, we can connect to your product database directly.',
  },
  {
    question: 'Is customer data secure?',
    answer:
      'Yes. Business data, integrations, and system access are configured with appropriate security practices and controlled access. We follow industry-standard security protocols for all deployments.',
  },
  {
    question: 'Can ClickOps build a custom website or mobile app?',
    answer:
      'Absolutely. Beyond AI automation, we build custom web applications (Laravel, Next.js) and cross-platform mobile apps tailored to your business operations and customer needs.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Book a free 30-minute discovery call. We discuss your business needs, identify opportunities, and provide a written proposal with scope, timeline, and pricing within one business day.',
  },
];
