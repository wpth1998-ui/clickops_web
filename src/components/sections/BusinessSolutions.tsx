'use client';

import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal, ScrollRevealStagger, useScrollRevealItem } from '@/components/ui/ScrollReveal';
import { businessSolutions } from '@/data/business-solutions';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function BusinessSolutions() {
  const itemVariants = useScrollRevealItem();

  return (
    <section
      id="business-solutions"
      className="border-t border-border bg-surface-secondary py-20 lg:py-28"
      aria-labelledby="business-solutions-heading"
    >
      <Container>
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-14 lg:mb-16">
          <SectionHeading
            eyebrow="BUSINESS SOLUTIONS"
            titleId="business-solutions-heading"
            title="What we solve for growing teams"
            description="Real operational problems for businesses in Myanmar and Southeast Asia—not generic “digital transformation.”"
            align="center"
          />
        </ScrollReveal>

        <ScrollRevealStagger className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {businessSolutions.map((item) => (
            <motion.article
              key={item.id}
              variants={itemVariants}
              className="interactive-lift flex flex-col rounded-xl border border-border bg-surface p-6 lg:p-8 h-full"
            >
              <p className="text-sm font-medium text-brand-blue mb-2">The problem</p>
              <h3 className="text-lg font-semibold text-text-primary text-balance mb-4">
                {item.problem}
              </h3>
              <p className="text-body mb-4 flex-1">{item.solution}</p>
              <p className="text-sm text-text-secondary border-l-2 border-brand-blue/30 pl-3 mb-5">
                <span className="font-medium text-text-primary">Result: </span>
                {item.outcome}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.industries.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] rounded-full border border-border bg-surface-secondary px-2.5 py-0.5 text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </ScrollRevealStagger>

        <ScrollReveal delay={0.12} className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 type-sm font-medium text-brand-blue hover:underline underline-offset-4"
          >
            Tell us your situation
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </ScrollReveal>
      </Container>
    </section>
  );
}