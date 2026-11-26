'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { motion } from 'framer-motion';
import {
  ScrollReveal,
  ScrollRevealStagger,
  useScrollRevealItem,
} from '@/components/ui/ScrollReveal';

const clients = [
  {
    name: 'Maths For You',
    logo: '/clients/maths-for-you.png',
    width: 258,
    height: 227,
  },
  {
    name: 'December Guitar',
    logo: '/clients/december-guitar.png',
    width: 750,
    height: 750,
  },
  {
    name: 'Light Computer',
    logo: '/clients/light-computer.jpg',
    width: 900,
    height: 600,
  },
] as const;

export function ClientRecognition() {
  const itemVariants = useScrollRevealItem(12);

  return (
    <section
      className="border-t border-border bg-surface pb-16 lg:pb-20 pt-12 lg:pt-14"
      aria-labelledby="client-recognition-heading"
    >
      <Container>
        <ScrollReveal y={8}>
          <h2
            id="client-recognition-heading"
            className="type-md text-text-primary text-center text-balance max-w-2xl mx-auto mb-10 lg:mb-12"
          >
            Trusted every day by teams that run customer operations in Myanmar
          </h2>
        </ScrollReveal>
        <ScrollRevealStagger>
          <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 m-0 p-0 list-none">
            {clients.map((client) => (
              <motion.li
                key={client.name}
                variants={itemVariants}
                className="inline-flex h-14 sm:h-16 items-center justify-center rounded-lg border border-[#26251e10] bg-surface px-6 sm:px-8"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  className="block h-8 sm:h-9 w-auto max-w-[140px] object-contain object-center opacity-90"
                />
              </motion.li>
            ))}
          </ul>
        </ScrollRevealStagger>
      </Container>
    </section>
  );
}