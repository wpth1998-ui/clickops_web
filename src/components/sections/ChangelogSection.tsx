'use client';

import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const entries = [
  { year: '2026', title: 'ClickOps Console overview', status: 'Live' },
  { year: '2026', title: 'Telegram + Messenger unified inbox', status: 'Live' },
  { year: '2025', title: 'Myanmar Unicode AI replies', status: 'Live' },
  { year: '2025', title: 'n8n lead routing templates', status: 'Live' },
  { year: '2024', title: 'EduAutomate enrollment automation', status: 'Live' },
  { year: '2024', title: 'Laravel admin dashboards', status: 'Live' },
  { year: '2023', title: 'First Messenger bots for training schools', status: 'Live' },
] as const;

export function ChangelogSection() {
  return (
    <section
      id="changelog"
      className="border-t border-border bg-surface py-20 lg:py-28"
      aria-labelledby="changelog-heading"
    >
      <Container className="max-w-3xl">
        <ScrollReveal
          as="h2"
          id="changelog-heading"
          className="text-section-heading text-text-primary mb-10 lg:mb-12"
        >
          Changelog
        </ScrollReveal>

        <ScrollReveal delay={0.08} y={24}>
          <div className="overflow-hidden rounded-xl border border-border/80">
            <table className="w-full text-left border-collapse">
              <tbody>
                {entries.map((row, i) => (
                  <tr
                    key={`${row.year}-${row.title}`}
                    className={cn(
                      'border-b border-border/60 last:border-0',
                      i % 2 === 1 && 'bg-surface-secondary/40'
                    )}
                  >
                    <td className="type-sm text-theme-text-mid whitespace-nowrap px-4 py-3.5 w-20 sm:w-24">
                      {row.year}
                    </td>
                    <td className="type-sm text-text-primary px-4 py-3.5">{row.title}</td>
                    <td className="type-xs text-theme-text-sec whitespace-nowrap px-4 py-3.5 text-right">
                      {row.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}