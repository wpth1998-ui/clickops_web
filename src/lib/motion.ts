import type { Transition, Variants } from 'framer-motion';

/** Shared easing for scroll-in motion. */
export const easeOut = [0.22, 1, 0.36, 1] as const;

/** Light spring for hovers and taps. */
export const springSnappy = {
  type: 'spring' as const,
  stiffness: 400,
  damping: 28,
};

export const duration = {
  micro: 0.18,
  enter: 0.5,
  reduced: 0.2,
} as const;

export function reducedMotionTransition(reduced: boolean): Transition {
  if (reduced) return { duration: duration.reduced };
  return { duration: duration.enter, ease: easeOut };
}

/** Scroll-reveal variants. Reduced motion is opacity-only. */
export function getScrollVariants(reduced: boolean, y = 22): Variants {
  if (reduced) {
    return {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: duration.reduced },
      },
    };
  }

  return {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: duration.enter, ease: easeOut },
    },
  };
}
