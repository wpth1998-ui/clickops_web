import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function WindowChrome({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'bg-surface/95 backdrop-blur-sm rounded-xl border border-border/80 shadow-soft ring-1 ring-black/[0.04] overflow-hidden',
        className
      )}
    >
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/60 bg-surface-secondary/80">
        <span className="flex gap-1.5" aria-hidden>
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span className="text-xs text-text-secondary ml-1 font-medium">{title}</span>
      </div>
      {children}
    </div>
  );
}