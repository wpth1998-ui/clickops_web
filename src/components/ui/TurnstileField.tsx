'use client';

import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';
import { useEffect, useRef, type MutableRefObject } from 'react';
import { cn } from '@/lib/utils';

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() ?? '';

interface TurnstileFieldProps {
  onToken: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
  className?: string;
  resetRef?: MutableRefObject<(() => void) | null>;
}

export function isTurnstileConfigured(): boolean {
  return Boolean(siteKey);
}

export function TurnstileField({
  onToken,
  onExpire,
  onError,
  className,
  resetRef,
}: TurnstileFieldProps) {
  const instanceRef = useRef<TurnstileInstance | null>(null);

  useEffect(() => {
    if (!resetRef) return;
    resetRef.current = () => instanceRef.current?.reset();
    return () => {
      resetRef.current = null;
    };
  }, [resetRef]);

  if (!siteKey) {
    return null;
  }

  return (
    <div className={cn('flex justify-center sm:justify-start', className)}>
      <Turnstile
        ref={instanceRef}
        siteKey={siteKey}
        onSuccess={onToken}
        onExpire={() => {
          onExpire?.();
        }}
        onError={() => {
          onError?.();
        }}
        options={{
          theme: 'light',
          size: 'normal',
        }}
      />
    </div>
  );
}