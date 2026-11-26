'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { duration, easeOut, getScrollVariants } from '@/lib/motion';

/** Cursor-style scroll reveal: fade + lift, fires once per element. */
export const scrollViewport = {
  once: true,
  amount: 0.18,
  margin: '0px 0px -48px 0px',
} as const;

/** Earlier trigger for the hero product frame. */
export const scrollViewportProminent = {
  once: true,
  amount: 0.12,
  margin: '0px 0px -32px 0px',
} as const;

export const scrollRevealItem: Variants = getScrollVariants(false);

export function useScrollRevealItem(y = 22): Variants {
  const reduced = useReducedMotion();
  return getScrollVariants(Boolean(reduced), y);
}

type ScrollRevealTag = 'div' | 'section' | 'article' | 'figure' | 'h2' | 'h3';

type ScrollViewport = {
  once: true;
  amount: number;
  margin: string;
};

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  as?: ScrollRevealTag;
  id?: string;
  viewport?: ScrollViewport;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration: enterDuration = 0.55,
  y = 22,
  as = 'div',
  id,
  viewport = scrollViewport,
}: ScrollRevealProps) {
  const reduced = useReducedMotion();
  const motionProps = {
    id,
    className: cn(className),
    initial: reduced ? { opacity: 0 } : { opacity: 0, y },
    whileInView: reduced ? { opacity: 1 } : { opacity: 1, y: 0 },
    viewport,
    transition: reduced
      ? { duration: duration.reduced }
      : { duration: enterDuration, delay, ease: easeOut },
  };

  switch (as) {
    case 'h2':
      return <motion.h2 {...motionProps}>{children}</motion.h2>;
    case 'h3':
      return <motion.h3 {...motionProps}>{children}</motion.h3>;
    case 'section':
      return <motion.section {...motionProps}>{children}</motion.section>;
    case 'article':
      return <motion.article {...motionProps}>{children}</motion.article>;
    case 'figure':
      return <motion.figure {...motionProps}>{children}</motion.figure>;
    default:
      return <motion.div {...motionProps}>{children}</motion.div>;
  }
}

export function ScrollRevealStagger({
  children,
  className,
  stagger = 0.07,
  delayChildren = 0,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      variants={{
        hidden: {},
        visible: {
          transition: reduced
            ? { duration: duration.reduced }
            : { staggerChildren: stagger, delayChildren },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const variants = useScrollRevealItem();

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
