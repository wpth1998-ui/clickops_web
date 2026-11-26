'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, MessageCircle, Bot, Users, TrendingUp } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { caseStudies } from '@/data/case-studies';

export function CaseStudies() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="case-studies" className="py-28 lg:py-36 bg-surface-secondary" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="RECENT CASE STUDIES"
            title="From Manual Chaos to Streamlined Operations"
            description="Real transformations for Myanmar businesses — measurable results, not promises."
          />
        </motion.div>

        <div className="mt-16 space-y-20">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
            >
              <CaseStudyCard study={study} index={index} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CaseStudyCard({
  study,
  index,
}: {
  study: (typeof caseStudies)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
        !isEven ? 'lg:direction-rtl' : ''
      }`}
    >
      {/* Content side */}
      <div className={!isEven ? 'lg:order-2' : ''}>
        <span className="text-eyebrow text-brand-blue mb-4 block">
          {study.category}
        </span>
        <h3 className="text-card-heading text-text-primary mb-8">
          {study.title}
        </h3>

        {/* Before/After comparison */}
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          {/* Before */}
          <div className="bg-surface-secondary rounded-xl p-5 border border-border">
            <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-3">
              Before
            </p>
            <ul className="space-y-2.5">
              {study.before.map((item) => (
                <li
                  key={item.text}
                  className="flex items-start gap-2 text-sm text-text-secondary"
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-text-secondary mt-1.5 shrink-0" />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="bg-brand-blue-light rounded-xl p-5 border border-brand-blue/10">
            <p className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-3">
              After
            </p>
            <ul className="space-y-2.5">
              {study.after.map((item) => (
                <li
                  key={item.text}
                  className="flex items-start gap-2 text-sm text-text-primary"
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 shrink-0" />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue hover:underline underline-offset-4"
          >
            {study.primaryCta}
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <span className="text-border">|</span>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            {study.secondaryCta}
          </a>
        </div>
      </div>

      {/* Product mockup side */}
      <div className={!isEven ? 'lg:order-1' : ''}>
        <CaseStudyMockup index={index} />
      </div>
    </div>
  );
}

function CaseStudyMockup({ index }: { index: number }) {
  if (index === 0) {
    // EduAutomate mockup - Enrollment dashboard
    return (
      <div className="interactive-lift bg-white border border-border rounded-xl overflow-hidden shadow-sm">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-surface-secondary/50">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-border" />
            <div className="w-2.5 h-2.5 rounded-full bg-border" />
            <div className="w-2.5 h-2.5 rounded-full bg-border" />
          </div>
          <span className="text-xs text-text-secondary ml-2">
            EduAutomate Dashboard
          </span>
        </div>
        <div className="p-5 space-y-4">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3">
            <StatCard label="New Inquiries" value="24" icon={<MessageCircle className="h-3.5 w-3.5" />} />
            <StatCard label="Qualified" value="18" icon={<Users className="h-3.5 w-3.5" />} />
            <StatCard label="Enrolled" value="12" icon={<TrendingUp className="h-3.5 w-3.5" />} />
          </div>
          {/* Recent activity */}
          <div>
            <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-3">
              Recent Enrollment Activity
            </p>
            <div className="space-y-2">
              <ActivityRow
                name="Aung Ko Ko"
                action="Enrolled in Web Development"
                time="2 min ago"
                channel="messenger"
              />
              <ActivityRow
                name="Su Su Latt"
                action="Asked about AI course fees"
                time="5 min ago"
                channel="telegram"
              />
              <ActivityRow
                name="Min Thu"
                action="Qualified lead — follow up"
                time="12 min ago"
                channel="messenger"
              />
            </div>
          </div>
          <p className="text-[10px] text-text-secondary italic text-center">
            Sample data for illustration purposes
          </p>
        </div>
      </div>
    );
  }

  // Sale Pilot mockup - Chat + CRM
  return (
    <div className="interactive-lift bg-white border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-surface-secondary/50">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-border" />
          <div className="w-2.5 h-2.5 rounded-full bg-border" />
          <div className="w-2.5 h-2.5 rounded-full bg-border" />
        </div>
        <span className="text-xs text-text-secondary ml-2">
          Sale Pilot — Live Chat
        </span>
      </div>
      <div className="p-5 space-y-3">
        {/* Chat preview */}
        <div className="space-y-2.5">
          <div className="flex justify-end">
            <div className="bg-cta text-on-cta rounded-2xl rounded-br-sm px-3.5 py-2 max-w-[70%]">
              <p className="text-xs">ဈေးနှုန်းသိချင်ပါတယ်</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
              <Bot className="h-3 w-3 text-brand-blue" />
            </div>
            <div className="bg-surface-secondary rounded-2xl rounded-bl-sm px-3.5 py-2 max-w-[80%]">
              <p className="text-xs text-text-primary">
                Product (3) ခုအတွက် ဈေးနှုန်းတွေ ပြပေးပါမယ်...
              </p>
            </div>
          </div>
        </div>
        {/* Lead captured */}
        <div className="bg-brand-blue-light border border-brand-blue/15 rounded-lg p-3 mt-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-blue" />
            <span className="text-xs font-medium text-brand-blue">
              Lead Auto-Captured
            </span>
          </div>
          <p className="text-xs text-text-secondary">
            Added to CRM · Product Interest: Category A
          </p>
        </div>
        <p className="text-[10px] text-text-secondary italic text-center">
          Sample data for illustration purposes
        </p>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-surface-secondary rounded-lg p-3 text-center">
      <div className="flex items-center justify-center text-brand-blue mb-1.5">
        {icon}
      </div>
      <p className="text-lg font-bold text-text-primary">{value}</p>
      <p className="text-[10px] text-text-secondary">{label}</p>
    </div>
  );
}

function ActivityRow({
  name,
  action,
  time,
  channel,
}: {
  name: string;
  action: string;
  time: string;
  channel: 'messenger' | 'telegram';
}) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-border last:border-b-0">
      <div className="flex items-center gap-2 min-w-0">
        <div className="w-7 h-7 rounded-full bg-surface-secondary flex items-center justify-center shrink-0">
          <span className="text-xs font-medium text-text-primary">
            {name[0]}
          </span>
        </div>
        <div className="min-w-0">
          <p className="text-xs font-medium text-text-primary truncate">
            {name}
          </p>
          <p className="text-[10px] text-text-secondary truncate">{action}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 shrink-0 ml-2">
        <span className="text-[10px] text-text-secondary">{time}</span>
        {channel === 'messenger' ? (
          <MessageCircle className="h-3 w-3 text-brand-blue" />
        ) : (
          <Bot className="h-3 w-3 text-[#229ED9]" />
        )}
      </div>
    </div>
  );
}
