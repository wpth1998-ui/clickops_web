'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Accordion } from '@/components/ui/Accordion';
import { faqItems } from '@/data/faq';

export function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="faq" className="py-28 lg:py-36 bg-surface" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Top questions business owners ask about ClickOps AI, web & mobile solutions."
            align="center"
          />
        </motion.div>

        <div className="mt-16 max-w-3xl mx-auto">
          <Accordion items={faqItems} />
        </div>
      </Container>
    </section>
  );
}
