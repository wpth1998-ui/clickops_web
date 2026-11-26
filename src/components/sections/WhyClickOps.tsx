'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Languages, Link2, Settings, Code2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { ElementType } from 'react';

interface Differentiator {
  index: string;
  title: string;
  description: string;
  icon: ElementType;
}

const differentiators: Differentiator[] = [
  {
    index: '01',
    title: 'Myanmar-First AI',
    description:
      'Understand Myanmar Unicode, natural Burmese conversations and mixed Myanmar-English messages.',
    icon: Languages,
  },
  {
    index: '02',
    title: 'Business Integration',
    description:
      'Connect Facebook Messenger, Telegram, CRM, Google Sheets, APIs and other business tools.',
    icon: Link2,
  },
  {
    index: '03',
    title: 'Fully Managed Setup',
    description:
      'ClickOps handles setup, integration, deployment and AI configuration.',
    icon: Settings,
  },
  {
    index: '04',
    title: 'Custom Development',
    description:
      "When automation isn't enough, we build custom web and mobile systems around your workflow.",
    icon: Code2,
  },
];

export function WhyClickOps() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="why-clickops" className="py-28 lg:py-36" ref={ref}>
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left column */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              eyebrow="WHY CLICKOPS"
              title="Why businesses choose ClickOps"
              description="Local context, managed delivery, and software that matches how you sell and support customers."
            />

            {/* Trust point */}
            <div className="mt-10 bg-brand-blue-light rounded-xl p-6 border border-brand-blue/10">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-blue/10 shrink-0">
                  <Shield className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <p className="font-semibold text-text-primary mb-1">
                    Secure & Controlled
                  </p>
                  <p className="copy">
                    Business data, integrations and system access are configured
                    with appropriate security practices and controlled access.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column — differentiator list */}
          <div className="lg:col-span-7">
            <div className="border-t border-border">
              {differentiators.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.index}
                    className="group border-b border-border py-6 px-4 -mx-4 rounded-lg hover:bg-surface-secondary transition-colors cursor-default"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-sm font-mono text-brand-blue mt-0.5">
                        {item.index}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="h-[18px] w-[18px] text-brand-blue/60" />
                          <h3 className="text-lg font-semibold text-text-primary">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-body pl-[30px]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
