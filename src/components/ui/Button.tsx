'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { springSnappy } from '@/lib/motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'inverted' | 'ghostOnDark';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  loading?: boolean;
  children: React.ReactNode;
}

/**
 * Cursor-inspired pills: solid primary + soft bordered secondary (ClickOps navy).
 */
export function Button({
  variant = 'primary',
  size = 'md',
  href,
  loading = false,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const reduced = useReducedMotion();
  const isInactive = Boolean(disabled || loading);

  const baseStyles =
    'btn-nudge inline-flex items-center justify-center font-sans text-[13px] font-normal leading-[1.35] transition-colors motion-micro rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:shrink-0 whitespace-nowrap';

  const variants = {
    primary: 'bg-[#2e4a73] text-white hover:bg-[#243d5f]',
    secondary:
      'border border-border bg-surface-secondary text-foreground hover:bg-[#eef1f6] hover:border-[#cbd5e1]',
    ghost: 'text-text-secondary hover:text-foreground hover:bg-surface-secondary rounded-full',
    inverted: 'bg-white text-foreground border border-border hover:bg-surface-secondary',
    ghostOnDark: 'text-white/90 hover:text-white border border-white/25 hover:bg-white/10 rounded-full',
  };

  const sizes = {
    sm: 'min-h-[32px] px-3 py-1.5 gap-1.5',
    md: 'h-10 px-5 gap-2',
    lg: 'h-11 px-6 gap-2',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);
  const content = (
    <>
      {loading && <LoadingSpinner />}
      {children}
    </>
  );

  const control = href ? (
    <a href={href} className={classes}>
      {content}
    </a>
  ) : (
    <button className={classes} disabled={isInactive} {...props}>
      {content}
    </button>
  );

  if (reduced || isInactive) return control;

  return (
    <motion.span
      className="inline-flex"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={springSnappy}
    >
      {control}
    </motion.span>
  );
}

function LoadingSpinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}
