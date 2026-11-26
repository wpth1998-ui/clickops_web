'use client';

import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="border-t border-border bg-footer-bg py-24 lg:py-32">
      <Container className="text-center">
        <ScrollReveal y={20}>
          <h2 className="text-section-heading text-text-primary max-w-2xl mx-auto mb-8 text-balance">
            Ready to scope a solution for your business?
          </h2>
          <Button variant="primary" size="lg" href="#contact">
            Book a discovery call
            <ArrowRight className="h-4 w-4" />
          </Button>
        </ScrollReveal>
      </Container>
    </section>
  );
}