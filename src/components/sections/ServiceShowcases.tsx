'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bot, MessageCircle, Workflow } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { WindowChrome } from '@/components/ui/WindowChrome';
import { DemoFrame } from '@/components/ui/DemoFrame';
import { serviceShowcases } from '@/data/service-showcases';
import { cn } from '@/lib/utils';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function ServiceShowcases() {
  return (
    <div id="services">
      {serviceShowcases.map((showcase, index) => (
        <ServiceShowcaseBlock key={showcase.id} showcase={showcase} index={index} />
      ))}
    </div>
  );
}

function ServiceShowcaseBlock({
  showcase,
  index,
}: {
  showcase: (typeof serviceShowcases)[number];
  index: number;
}) {
  return (
    <section
      className={cn(
        'border-t border-border py-20 lg:py-28',
        index % 2 === 0 ? 'bg-surface' : 'bg-surface-secondary'
      )}
    >
      <Container>
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
          <h2 className="text-section-heading text-text-primary text-balance mb-3">
            {showcase.title}
          </h2>
          <p className="copy max-w-xl mx-auto">{showcase.description}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.08} y={32}>
          <DemoFrame
            className={
              showcase.visual === 'mobile'
                ? 'border-0 bg-footer-bg shadow-none'
                : undefined
            }
            innerClassName={showcase.visual === 'mobile' ? 'py-6 sm:py-8' : undefined}
          >
            <div className="w-full max-w-3xl mx-auto">
              <ShowcaseVisual type={showcase.visual} />
            </div>
          </DemoFrame>
        </ScrollReveal>

        <div className="text-center mt-8">
          <a
            href={showcase.href}
            className="type-sm text-text-primary hover:text-brand-blue transition-colors"
          >
            {showcase.ctaLabel}
          </a>
        </div>
      </Container>
    </section>
  );
}

function ShowcaseVisual({
  type,
}: {
  type: ServiceShowcase['visual'];
}) {
  return (
    <div className="relative w-full">
      {type === 'messenger' && <MessengerMock />}
      {type === 'workflow' && <WorkflowMock />}
      {type === 'web' && <WebMock />}
      {type === 'mobile' && <MobileMock />}
    </div>
  );
}

function MessengerMock() {
  return (
    <WindowChrome title="ClickOps — Messenger inbox" className="shadow-none ring-0">
      <div className="p-4 space-y-3">
        <div className="flex justify-end">
          <div className="bg-cta text-on-cta text-[10px] sm:text-[11px] leading-snug rounded-2xl rounded-br-md px-2.5 py-1.5 max-w-[85%]">
            အခန်းသွင်းရင် ဘယ်လို လုပ်ရမလဲ?
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-7 h-7 rounded-full bg-brand-blue-light border border-border flex items-center justify-center shrink-0">
            <Bot className="w-3.5 h-3.5 text-brand-blue" />
          </div>
          <div className="bg-surface-secondary text-[10px] sm:text-[11px] leading-snug rounded-2xl rounded-bl-md px-2.5 py-1.5 max-w-[88%] text-text-primary">
            မင်္ဂလာပါ! ကျွန်တော်တို့ enrollment process ကို ရှင်းပြပေးပါမယ်။ ဖုန်းနံပါတ် ထားပေးရင်
            advisor က ဆက်သွယ်ပါမယ်။
          </div>
        </div>
        <div className="flex gap-2 pl-9">
          <span className="text-[10px] border border-border rounded-full px-2 py-0.5">Course fees</span>
          <span className="text-[10px] border border-border rounded-full px-2 py-0.5">Book call</span>
        </div>
        <div className="flex items-center gap-2 pt-2 border-t border-border/50 text-[10px] text-text-secondary leading-snug">
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Human handoff · Myanmar + English</span>
        </div>
      </div>
    </WindowChrome>
  );
}

function WorkflowMock() {
  return (
    <WindowChrome title="n8n — Lead pipeline" className="shadow-none ring-0">
      <div className="p-4 space-y-3 font-mono text-xs">
        {[
          { node: 'Facebook Lead', status: '✓ 24 today', color: 'bg-brand-blue' },
          { node: 'Google Sheet', status: 'Synced', color: 'bg-brand-blue' },
          { node: 'Telegram alert', status: 'Sent', color: 'bg-brand-blue' },
          { node: 'CRM create', status: 'Running', color: 'bg-brand-blue/50' },
        ].map((row) => (
          <div
            key={row.node}
            className="flex items-center justify-between bg-surface-secondary rounded-lg px-3 py-2 border border-border/50"
          >
            <div className="flex items-center gap-2">
              <Workflow className="w-3.5 h-3.5 text-text-secondary" />
              <span className="text-text-primary">{row.node}</span>
            </div>
            <span className="flex items-center gap-1.5 text-text-secondary">
              <span className={cn('w-1.5 h-1.5 rounded-full', row.color)} />
              {row.status}
            </span>
          </div>
        ))}
      </div>
    </WindowChrome>
  );
}

function WebMock() {
  return (
    <div className="flex justify-center w-full">
      <Image
        src="/mockups/enrollment-dashboard.png"
        alt="Enrollment pipeline dashboard — filterable student enrollments with status, payments, and trends"
        width={1024}
        height={576}
        className="w-full h-auto rounded-xl border border-border/60 drop-shadow-[0_20px_40px_-12px_rgba(15,23,42,0.2)]"
        sizes="(max-width: 640px) 90vw, 768px"
        priority={false}
      />
    </div>
  );
}

function MobileMock() {
  return (
    <div className="flex justify-center w-full">
      <Image
        src="/mockups/field-check-in-phone.png"
        alt="Field check-in mobile app — checked in with offline sync and task list on iOS and Android"
        width={416}
        height={760}
        className="w-full max-w-[min(100%,16.5rem)] h-auto"
        sizes="(max-width: 640px) 72vw, 264px"
        priority={false}
      />
    </div>
  );
}

type ServiceShowcase = (typeof serviceShowcases)[number];