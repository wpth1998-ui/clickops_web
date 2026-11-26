import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleId?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  description,
  align = 'left',
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <p className="text-eyebrow mb-4 text-text-secondary">{eyebrow}</p>
      )}
      <h2
        id={titleId}
        className={cn('text-section-heading text-text-primary', titleClassName)}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'copy mt-5 max-w-2xl',
            align === 'center' && 'mx-auto',
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
