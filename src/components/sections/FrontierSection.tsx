'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { DemoFrame } from '@/components/ui/DemoFrame';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { duration, easeOut, springSnappy } from '@/lib/motion';
import { cn } from '@/lib/utils';
import { MessageCircle, Send, FileSpreadsheet, Webhook, Database } from 'lucide-react';

const CHANNELS = [
  { id: 'messenger', label: 'Messenger', icon: MessageCircle, suggested: true },
  { id: 'telegram', label: 'Telegram', icon: Send },
  { id: 'sheets', label: 'Google Sheets', icon: FileSpreadsheet },
  { id: 'n8n', label: 'n8n workflows', icon: Webhook },
  { id: 'crm', label: 'Laravel / CRM', icon: Database },
] as const;

const PROMPTS: Record<(typeof CHANNELS)[number]['id'], string> = {
  messenger: 'Reply in Myanmar Unicode when parents ask about course fees',
  telegram: 'Qualify leads and alert sales when budget is above $500',
  sheets: 'Append every new lead with source, language, and timestamp',
  n8n: 'When Facebook lead arrives, dedupe and notify #sales Slack',
  crm: 'Create enrollment record when AI marks handover complete',
};

export function FrontierSection() {
  const [active, setActive] = useState<(typeof CHANNELS)[number]['id']>('messenger');
  const reduced = useReducedMotion();

  return (
    <section
      id="integrations"
      className="border-t border-border bg-surface-secondary py-20 lg:py-28"
      aria-labelledby="frontier-heading"
    >
      <Container>
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
          <h2
            id="frontier-heading"
            className="text-section-heading text-text-primary mb-3 text-balance"
          >
            Built around how your business already works
          </h2>
          <p className="type-md-sm text-text-primary text-balance mb-2">
            Same channels your customers use today
          </p>
          <p className="copy max-w-lg mx-auto">
            We plug into Messenger, Telegram, Sheets, and the tools you rely on—so you keep
            your stack and fix the gaps between inbox, leads, and your team.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} y={32}>
          <DemoFrame className="max-w-3xl mx-auto">
            <div className="w-full max-w-md mx-auto rounded-xl border border-border bg-surface shadow-soft overflow-hidden">
              <div className="px-4 py-3 border-b border-border/60 type-sm text-text-primary">
                Example automations we set up for clients
              </div>
              <div className="p-4 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {CHANNELS.map((ch) => {
                    const selected = active === ch.id;
                    return (
                      <motion.button
                        key={ch.id}
                        type="button"
                        onClick={() => setActive(ch.id)}
                        animate={reduced ? undefined : { scale: selected ? 1.02 : 1 }}
                        whileHover={reduced ? undefined : { scale: 1.02 }}
                        whileTap={reduced ? undefined : { scale: 0.98 }}
                        transition={springSnappy}
                        className={cn(
                          'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 type-xs transition-colors motion-micro',
                          selected
                            ? 'border-text-primary/20 bg-surface-secondary text-text-primary'
                            : 'border-border text-text-secondary hover:text-text-primary'
                        )}
                      >
                        <ch.icon className="h-3 w-3 shrink-0" />
                        {ch.label}
                        {'suggested' in ch && ch.suggested && selected ? (
                          <span className="text-[10px] text-theme-text-mid">Suggested</span>
                        ) : null}
                      </motion.button>
                    );
                  })}
                </div>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.p
                    key={active}
                    initial={reduced ? { opacity: 1 } : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduced ? { opacity: 1 } : { opacity: 0, y: -4 }}
                    transition={
                      reduced
                        ? { duration: duration.reduced }
                        : { duration: 0.22, ease: easeOut }
                    }
                    className="rounded-lg border border-border/60 bg-surface-secondary/60 px-3 py-2.5 type-sm text-text-primary text-pretty min-h-[3.25rem]"
                  >
                    {PROMPTS[active]}
                  </motion.p>
                </AnimatePresence>
                <div className="flex items-center justify-between pt-1">
                  <span className="type-xs text-theme-text-mid">Agent · Myanmar + English</span>
                  <span className="inline-flex h-8 min-w-[4.5rem] items-center justify-center rounded-full bg-[#2e4a73] text-[13px] text-white">
                    Send
                  </span>
                </div>
              </div>
            </div>
          </DemoFrame>
        </ScrollReveal>
      </Container>
    </section>
  );
}