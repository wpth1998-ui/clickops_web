import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

/** Cursor.com-style product demo backdrop (solid brand wash, minimal chrome). */
export function DemoFrame({
  children,
  className,
  innerClassName,
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl border border-[#26251e12] bg-footer-bg',
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(61,95,148,0.06),transparent_58%)]"
      />
      <div
        className={cn(
          'relative flex items-center justify-center p-5 sm:p-8 lg:p-10 xl:p-12',
          innerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}