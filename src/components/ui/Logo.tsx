import Image from 'next/image';
import { cn } from '@/lib/utils';

const LOGO = {
  src: '/brand/clickops-logo.png',
  width: 861,
  height: 226,
} as const;

type LogoProps = {
  className?: string;
  /** Light pill behind logo on dark backgrounds (e.g. footer). */
  onDark?: boolean;
  priority?: boolean;
};

export function Logo({ className, onDark = false, priority = false }: LogoProps) {
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center',
        onDark && 'rounded-md bg-[#f7f7f4] px-2 py-1'
      )}
    >
      <Image
        src={LOGO.src}
        alt="ClickOps"
        width={LOGO.width}
        height={LOGO.height}
        priority={priority}
        className={cn('h-[30px] w-auto object-contain object-left', className)}
      />
    </span>
  );
}