'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, Shield, Headphones } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { ElementType } from 'react';

interface Capability {
  stat: string;
  label: string;
  icon: ElementType;
}

const capabilities: Capability[] = [
  { stat: '24/7', label: 'Automated operations', icon: Clock },
  { stat: '100%', label: 'Solution ownership', icon: Shield },
  { stat: 'Ongoing', label: 'Local support', icon: Headphones },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="about" className="py-28 lg:py-36 bg-surface-secondary" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="ABOUT CLICKOPS"
            title="A focused team of makers and AI specialists."
            description="We combine local business understanding with practical AI, automation, web, and mobile engineering — from discovery through launch and support."
            align="center"
          />
        </motion.div>

        {/* Capability cards */}
        <motion.div
          className="mt-16 grid sm:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="bg-white border border-border rounded-xl p-8 text-center hover:shadow-sm transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="h-8 w-8 text-brand-blue/30" />
                </div>
                <p className="text-4xl font-bold text-brand-blue mb-2">
                  {item.stat}
                </p>
                <p className="text-body">{item.label}</p>
              </div>
            );
          })}
        </motion.div>

        {/* Editorial composition — swap for real team / product photography */}
        <motion.div
          className="mt-12 grid lg:grid-cols-12 gap-4 lg:gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="lg:col-span-7 bg-white border border-border rounded-xl p-6 lg:p-8 min-h-[220px] lg:min-h-[280px] flex flex-col justify-between">
            <div>
              <p className="text-eyebrow mb-3">Build environment</p>
              <p className="text-lg font-semibold text-text-primary max-w-md">
                Where automation, integrations, and custom apps come together.
              </p>
            </div>
            <div className="mt-8 rounded-lg bg-terminal-bg p-4 font-mono text-xs text-terminal-text leading-relaxed overflow-hidden">
              <p>
                <span className="text-brand-blue">workflow</span> · Messenger →
                CRM → Sheets
              </p>
              <p className="mt-1 opacity-80">
                <span className="text-white/90">deploy</span> · EduAutomate v2.4
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-rows-2 gap-4 lg:gap-5">
            <div className="bg-brand-blue-light border border-brand-blue/10 rounded-xl p-6 flex flex-col justify-center">
              <p className="text-sm font-semibold text-text-primary">
                Myanmar & Thailand delivery
              </p>
              <p className="text-sm text-text-secondary mt-2">
                Local context, regional support, same engineering standards.
              </p>
            </div>
            <div className="bg-surface-secondary border border-border rounded-xl p-6 flex items-center justify-center text-center">
              <p className="text-xs text-text-secondary max-w-[200px]">
                Replace this block with approved team or product photography
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
