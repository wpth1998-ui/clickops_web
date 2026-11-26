'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { DemoFrame } from '@/components/ui/DemoFrame';
import { ScrollReveal, scrollViewportProminent } from '@/components/ui/ScrollReveal';
import { duration } from '@/lib/motion';
import { WindowChrome } from '@/components/ui/WindowChrome';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  LayoutGrid,
  Mail,
  CircleHelp,
  BookOpen,
  History,
  Settings,
  MessageCircle,
  Send,
} from 'lucide-react';

const NAV_ITEMS = [
  { icon: LayoutGrid, label: 'Overview', active: true },
  { icon: Mail, label: 'Messages', active: false },
  { icon: CircleHelp, label: 'Help', active: false },
  { icon: BookOpen, label: 'Docs', active: false },
  { icon: History, label: 'History', active: false },
] as const;

const METRIC_CARDS = [
  { label: 'New leads', value: '3', sub: 'Last 7 days +3 vs prior' },
  { label: 'Open handovers', value: '1', sub: 'Needs admin', alert: true },
  { label: 'Credits left', value: '473', sub: 'Available' },
  { label: 'Used this month', value: '28', sub: 'Of 501 pool' },
] as const;

const CHART_DAYS = ['Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed'] as const;
const CHART_VALUES = [0, 2, 0, 0, 1, 0.35, 0];

const PERIOD_TABS = ['Today', '7d', '30d'] as const;

function InquiriesChart() {
  const w = 320;
  const h = 88;
  const padX = 8;
  const padY = 8;
  const innerW = w - padX * 2;
  const innerH = h - padY * 2;
  const maxVal = 2;

  const points = CHART_VALUES.map((v, i) => {
    const x = padX + (i / (CHART_VALUES.length - 1)) * innerW;
    const y = padY + innerH - (v / maxVal) * innerH;
    return { x, y };
  });

  const line = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const area = `${line} L ${points[points.length - 1].x} ${padY + innerH} L ${points[0].x} ${padY + innerH} Z`;

  return (
    <div className="relative">
      <motion.svg
        viewBox={`0 0 ${w} ${h}`}
        className="w-full h-[88px] text-brand-blue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <defs>
          <linearGradient id="inquiriesFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.22" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#inquiriesFill)" />
        <path d={line} fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        {points.map((p, i) =>
          CHART_VALUES[i] > 0 ? (
            <circle key={i} cx={p.x} cy={p.y} r="3" fill="currentColor" />
          ) : null
        )}
      </motion.svg>
      <div className="flex justify-between text-[10px] text-text-tertiary mt-1 px-0.5">
        {CHART_DAYS.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>
      <div className="absolute left-0 top-0 flex flex-col justify-between h-[72px] text-[10px] text-text-tertiary -ml-1">
        <span>2</span>
        <span>1</span>
        <span>0</span>
      </div>
    </div>
  );
}

export function Hero() {
  const frameRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)');
    const sync = () => setDesktop(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduced || !desktop ? 0 : 24]);

  return (
    <section className="relative pt-[4.75rem] pb-12 lg:pt-[7.5rem] lg:pb-16 overflow-x-clip bg-surface">
      <Container className="relative z-10">
        <ScrollReveal className="max-w-4xl mx-auto text-center" y={26}>
          <h1 className="text-hero text-text-primary mb-6 text-balance">
            Business solutions for customer operations that actually scale.
          </h1>
          <p className="copy max-w-2xl mx-auto mb-8">
            We help Myanmar and Southeast Asia businesses answer customers faster, capture every
            lead, and run enrollments and support without hiring a full dev team—you get systems
            your staff can run day to day.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant="primary" size="lg" href="#contact">
              Book a discovery call
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="lg" href="#business-solutions">
              See business solutions
            </Button>
          </div>
        </ScrollReveal>

        <motion.div
          ref={frameRef}
          style={{ y }}
          className="relative mt-14 lg:mt-16 max-w-[1100px] mx-auto"
        >
          <ScrollReveal
            delay={0.1}
            y={40}
            duration={0.65}
            viewport={scrollViewportProminent}
          >
            <DemoFrame innerClassName="min-h-[360px] lg:min-h-[480px]">
              <HeroShowcase />
            </DemoFrame>
          </ScrollReveal>
        </motion.div>
      </Container>
    </section>
  );
}

function HeroShowcase() {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="relative w-full max-w-5xl"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: reduced
            ? { duration: duration.reduced }
            : { staggerChildren: 0.08, delayChildren: 0.12 },
        },
      }}
    >
      <WindowChrome title="ClickOps Console" className="shadow-[0_24px_60px_-20px_rgba(15,23,42,0.18)]">
        <div className="flex min-h-[420px]">
          <nav
            className="hidden sm:flex flex-col items-center w-12 shrink-0 border-r border-border/50 bg-surface-secondary/40 py-3 gap-1"
            aria-label="Console navigation"
          >
            <span
              className="flex items-center justify-center w-9 h-9 rounded-full text-text-primary text-xs font-bold bg-surface border border-border/60 mb-1"
            >
              C
            </span>
            <div className="flex flex-col gap-1 flex-1 px-1.5">
              {NAV_ITEMS.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  aria-label={item.label}
                  style={{ animationDelay: `${index * 80}ms` }}
                  className={cn(
                    'hero-nav-icon flex items-center justify-center w-9 h-9 rounded-lg transition-colors',
                    item.active
                      ? 'bg-surface text-brand-blue shadow-sm border border-border/60'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface/80'
                  )}
                >
                  <item.icon className="h-4 w-4" />
                </button>
              ))}
            </div>
            <button
              type="button"
              aria-label="Settings"
              className="flex items-center justify-center w-9 h-9 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface/80 mx-1.5"
            >
              <Settings className="h-4 w-4" />
            </button>
            <div
              className="flex items-center justify-center w-9 h-9 rounded-full bg-cta text-on-cta text-[10px] font-semibold mx-1.5 mt-1 mb-0.5"
              aria-hidden
            >
              CA
            </div>
          </nav>

          <div className="flex-1 min-w-0 flex flex-col bg-surface">
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-5 py-3.5 border-b border-border/50">
              <h3 className="text-sm font-medium text-text-primary">Overview</h3>
              <div className="flex items-center gap-3 text-[11px] sm:text-xs text-text-secondary">
                {PERIOD_TABS.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    className={cn(
                      'pb-0.5 transition-colors',
                      tab === '7d'
                        ? 'text-text-primary font-medium border-b border-brand-blue'
                        : 'text-text-secondary hover:text-text-primary'
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 border-b border-border/40 text-[10px] sm:text-[11px] leading-snug">
              <div className="flex items-center gap-2 min-w-0">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue/50 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue" />
                </span>
                <span className="text-text-primary truncate">AI assistant is replying</span>
              </div>
              <span className="inline-flex items-center gap-1 text-text-secondary bg-surface-secondary border border-border rounded-full px-2.5 py-1">
                <MessageCircle className="h-3 w-3" />
                Messenger
              </span>
              <span className="inline-flex items-center gap-1 text-text-secondary bg-surface-secondary border border-border rounded-full px-2.5 py-1">
                <Send className="h-3 w-3 text-[#229ED9]" />
                Telegram
              </span>
              <span className="ml-auto inline-flex items-center rounded-full border border-brand-blue/20 bg-brand-blue-light px-2.5 py-0.5 text-[11px] font-medium text-brand-blue">
                Active
              </span>
            </div>

            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 p-4 sm:p-5"
              variants={{
                hidden: {},
                show: {
                  transition: reduced ? { duration: duration.reduced } : { staggerChildren: 0.06 },
                },
              }}
            >
              {METRIC_CARDS.map((card) => (
                <motion.div
                  key={card.label}
                  variants={{
                    hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 8 },
                    show: { opacity: 1, y: 0 },
                  }}
                  className="rounded-xl border border-border/60 bg-surface-secondary/30 px-3 py-3 sm:px-4 sm:py-3.5"
                >
                  <p className="text-[11px] sm:text-xs text-text-secondary">{card.label}</p>
                  <p className="text-base font-semibold text-text-primary tabular-nums mt-0.5 flex items-center gap-1.5">
                    {card.value}
                    {'alert' in card && card.alert ? (
                      <span className="inline-block w-2 h-2 rounded-full bg-brand-blue" aria-hidden />
                    ) : null}
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-text-tertiary mt-1">{card.sub}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="grid grid-cols-1 lg:grid-cols-[1fr,min(12rem,100%)] gap-3 px-4 sm:px-5 pb-4 sm:pb-5"
              variants={{
                hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <div className="rounded-xl border border-border/60 bg-surface-secondary/20 px-4 py-3.5 sm:py-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <p className="text-xs sm:text-sm font-medium text-text-primary">
                    Inquiries <span className="font-normal text-text-secondary">— last 7 days</span>
                  </p>
                  <span className="text-[11px] text-text-tertiary tabular-nums">3 total</span>
                </div>
                <InquiriesChart />
              </div>

              <div className="rounded-xl border border-border/60 bg-surface-secondary/20 px-4 py-3.5 sm:py-4">
                <p className="text-xs sm:text-sm font-medium text-text-primary mb-3">Credits</p>
                <p className="text-base font-semibold text-text-primary tabular-nums">
                  28 <span className="text-sm font-normal text-text-secondary">/ 501</span>
                </p>
                <p className="text-[10px] text-text-tertiary mb-2">Used / available pool</p>
                <div className="h-1.5 bg-border rounded-full overflow-hidden mb-3">
                  <motion.div
                    className="h-full rounded-full bg-brand-blue"
                    initial={{ width: reduced ? '5.6%' : 0 }}
                    animate={{ width: '5.6%' }}
                    transition={{ duration: reduced ? duration.reduced : 0.8, ease: 'easeOut' }}
                  />
                </div>
                <p className="text-[10px] sm:text-[11px] text-text-secondary mb-3">
                  Monthly grant <span className="text-text-primary font-medium">2,000</span> credits
                </p>
                <dl className="space-y-1.5 text-[10px] sm:text-[11px]">
                  <div className="flex justify-between gap-2">
                    <dt className="text-text-tertiary">Last grant</dt>
                    <dd className="text-text-secondary">Not scheduled</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-text-tertiary">Next grant</dt>
                    <dd className="text-text-secondary">Not scheduled</dd>
                  </div>
                </dl>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 px-4 sm:px-5 pb-4 sm:pb-5 border-t border-border/40 pt-4">
              <ConsoleListPanel
                title="Needs attention"
                viewAll
                items={[
                  {
                    name: 'Justin',
                    detail: 'Telegram · Daw Hnin, မင်္ဂလာပါ',
                    trailing: <span className="w-2 h-2 rounded-full bg-brand-blue shrink-0" />,
                  },
                ]}
              />
              <ConsoleListPanel
                title="Recent inquiries"
                viewAll
                items={[
                  {
                    name: 'John',
                    detail: 'Basic Computer · ဘာသာသင်တန်းရနိုင်မလား',
                    trailing: (
                      <span className="text-[10px] text-text-tertiary whitespace-nowrap">1d ago</span>
                    ),
                    icon: <MessageCircle className="h-3.5 w-3.5 text-text-tertiary shrink-0" />,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </WindowChrome>
    </motion.div>
  );
}

function ConsoleListPanel({
  title,
  viewAll,
  items,
}: {
  title: string;
  viewAll?: boolean;
  items: {
    name: string;
    detail: string;
    trailing: ReactNode;
    icon?: ReactNode;
  }[];
}) {
  return (
    <div className="rounded-xl border border-border/60 bg-surface-secondary/20 px-4 py-3 min-h-[100px]">
      <div className="flex items-center justify-between mb-2.5">
        <p className="text-[11px] font-medium text-text-primary">{title}</p>
        {viewAll ? (
          <button type="button" className="text-[11px] text-text-tertiary hover:text-text-secondary">
            View all
          </button>
        ) : null}
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.name}
            className="flex items-start justify-between gap-2 rounded-lg border border-border/40 bg-surface px-3 py-2.5"
          >
            <div className="min-w-0 flex gap-2">
              {item.icon}
              <div className="min-w-0">
                <p className="text-[11px] font-medium text-text-primary truncate leading-snug">
                  {item.name}
                </p>
                <p className="text-[10px] text-text-secondary truncate leading-snug">{item.detail}</p>
              </div>
            </div>
            {item.trailing}
          </li>
        ))}
      </ul>
    </div>
  );
}