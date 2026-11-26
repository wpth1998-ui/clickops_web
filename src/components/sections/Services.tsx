'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  MessageSquare,
  Workflow,
  Globe,
  Smartphone,
  ArrowRight,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { services } from '@/data/services';
import type { ElementType } from 'react';

const iconMap: Record<string, ElementType> = {
  MessageSquare,
  Workflow,
  Globe,
  Smartphone,
};

export function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="services" className="py-28 lg:py-36" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="OUR SERVICES"
            title="What We Build"
          />
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-0">
          {services.map((service, index) => {
            const Icon = iconMap[service.iconName] || Globe;
            return (
              <motion.div
                key={service.index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group p-8 lg:p-10 ${
                  index >= 2 ? 'border-t border-border' : ''
                } ${index % 2 === 1 ? 'md:border-l md:border-border' : ''} ${
                  index < 2 && index % 2 === 1
                    ? ''
                    : ''
                }`}
              >
                <span className="text-5xl font-bold text-border/70 leading-none block mb-6">
                  {service.index}
                </span>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-blue-light">
                    <Icon className="h-[18px] w-[18px] text-brand-blue" />
                  </div>
                  <h3 className="text-card-heading text-text-primary">
                    {service.title}
                  </h3>
                </div>
                <p className="text-body mb-6 max-w-md">
                  {service.description}
                </p>
                <a
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue hover:underline underline-offset-4 transition-all group-hover:gap-2.5"
                >
                  Explore service
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
