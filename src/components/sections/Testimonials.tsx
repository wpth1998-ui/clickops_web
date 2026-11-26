'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import {
  ScrollReveal,
  ScrollRevealStagger,
  scrollRevealItem,
} from '@/components/ui/ScrollReveal';

const testimonials = [
  {
    quote:
      'Messenger inquiries used to pile up after hours. With ClickOps, parents get answers in Myanmar and English—and we only step in when enrollment is serious.',
    name: 'Training centre owner',
    role: 'Maths For You · Yangon',
  },
  {
    quote:
      'Leads from Facebook now land in Sheets and Telegram automatically. We stopped losing names in chat threads.',
    name: 'Operations lead',
    role: 'Light Computer',
  },
  {
    quote:
      'They built the bot, the dashboard, and the handoff rules. We did not need to hire a separate dev team.',
    name: 'Founder',
    role: 'December Guitar',
  },
  {
    quote:
      'The best part is clarity: we know which conversations AI handled and exactly when a parent needs a human call.',
    name: 'Admin team',
    role: 'EduAutomate partner',
  },
] as const;

export function Testimonials() {
  return (
    <section
      className="border-t border-border bg-surface py-20 lg:py-28"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <ScrollReveal
          as="h2"
          id="testimonials-heading"
          className="text-section-heading text-text-primary text-center max-w-3xl mx-auto mb-14 lg:mb-16 text-balance"
        >
          What business owners say after launch
        </ScrollReveal>

        <ScrollRevealStagger className="grid gap-8 md:grid-cols-2" stagger={0.1}>
          {testimonials.map((item) => (
            <motion.figure key={item.role} variants={scrollRevealItem} className="max-w-xl">
              <blockquote className="type-md text-text-primary text-pretty leading-snug">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 type-sm text-theme-text-sec">
                <span className="text-text-primary">{item.name}</span>
                <span className="text-theme-text-mid"> · {item.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </ScrollRevealStagger>
      </Container>
    </section>
  );
}