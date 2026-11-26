'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Bot, ShoppingBag, Building2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { products } from '@/data/products';
import type { ElementType } from 'react';

const iconMap: Record<string, ElementType> = {
  eduautomate: Bot,
  salepilot: ShoppingBag,
  propertyleaddesk: Building2,
};

export function Products() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="products" className="py-28 lg:py-36 bg-surface-secondary" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="PRODUCTS"
            title="Purpose-built automation for your industry"
            description="Three focused products — each designed for a specific business workflow in Myanmar and Southeast Asia."
            align="center"
          />
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-0 border border-border rounded-xl bg-white">
          {products.map((product, index) => {
            const Icon = iconMap[product.id] || Bot;
            return (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`interactive-lift group p-8 lg:p-10 flex flex-col ${
                  index < products.length - 1
                    ? 'md:border-r border-border border-b md:border-b-0'
                    : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-blue-light">
                    <Icon className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-card-heading text-text-primary">
                      {product.name}
                    </h3>
                    <p className="text-xs text-brand-blue font-medium">
                      {product.tagline}
                    </p>
                  </div>
                </div>
                <p className="text-body mb-6 flex-1">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-text-secondary flex items-start gap-2"
                    >
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-blue mt-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={product.href ?? '#contact'}
                  {...(product.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue hover:underline underline-offset-4 transition-all group-hover:gap-2.5"
                >
                  {product.ctaLabel ?? 'Discuss this product'}
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}