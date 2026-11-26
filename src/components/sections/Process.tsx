'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Clock, Users, CheckCircle, ChevronDown } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { processStages } from '@/data/process';
import { cn } from '@/lib/utils';

export function Process() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const activeStage = processStages[activeIndex];

  return (
    <section id="process" className="py-28 lg:py-36 bg-surface" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="OUR PROCESS"
            title="From discovery to launch — a clear path with measurable outcomes at every stage."
            align="center"
          />
        </motion.div>

        {/* Desktop: Horizontal tabs + detail panel */}
        <div className="mt-16 hidden lg:block">
          {/* Tab navigation */}
          <div className="flex border-b border-border">
            {processStages.map((stage, index) => (
              <button
                key={stage.index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  'flex-1 py-4 text-sm font-medium text-center transition-all relative',
                  'border-r border-border last:border-r-0',
                  activeIndex === index
                    ? 'text-brand-blue'
                    : 'text-text-secondary hover:text-text-primary'
                )}
              >
                <span className="text-xs font-mono opacity-50 mr-1.5">
                  {stage.index}
                </span>
                {stage.title}
                {activeIndex === index && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="mt-8 bg-white border border-border rounded-xl p-8 lg:p-10"
            >
              <h3 className="text-card-heading text-text-primary mb-4">
                {activeStage.title}
              </h3>
              <p className="text-body mb-8 max-w-2xl">
                {activeStage.description}
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Timing */}
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-blue-light shrink-0">
                    <Clock className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-1">
                      Timing
                    </p>
                    <p className="text-sm font-semibold text-text-primary">
                      {activeStage.timing}
                    </p>
                  </div>
                </div>

                {/* Team */}
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-blue-light shrink-0">
                    <Users className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-1">
                      Team
                    </p>
                    <p className="text-sm font-semibold text-text-primary">
                      {activeStage.team}
                    </p>
                  </div>
                </div>

                {/* Outcomes */}
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-blue-light shrink-0">
                    <CheckCircle className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-2">
                      Outcomes
                    </p>
                    <ul className="space-y-1.5">
                      {activeStage.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="text-sm text-text-primary flex items-start gap-2"
                        >
                          <span className="inline-block w-1 h-1 rounded-full bg-brand-blue mt-2 shrink-0" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="mt-12 lg:hidden space-y-0">
          {processStages.map((stage, index) => (
            <MobileProcessItem
              key={stage.index}
              stage={stage}
              isActive={activeIndex === index}
              isLast={index === processStages.length - 1}
              onToggle={() =>
                setActiveIndex(activeIndex === index ? -1 : index)
              }
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function MobileProcessItem({
  stage,
  isActive,
  isLast,
  onToggle,
}: {
  stage: (typeof processStages)[0];
  isActive: boolean;
  isLast: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex gap-4">
      {/* Timeline line & dot */}
      <div className="flex flex-col items-center">
        <div
          className={cn(
            'w-3 h-3 rounded-full border-2 shrink-0 mt-4 transition-colors',
            isActive
              ? 'bg-cta border-cta'
              : 'bg-white border-border'
          )}
        />
        {!isLast && <div className="w-0.5 flex-1 bg-border" />}
      </div>

      {/* Content */}
      <div className={cn('pb-6 flex-1', isLast && 'pb-0')}>
        <button
          onClick={onToggle}
          className="flex items-center justify-between w-full text-left py-3"
          aria-expanded={isActive}
        >
          <div>
            <span className="text-xs font-mono text-brand-blue mr-2">
              {stage.index}
            </span>
            <span className="text-base font-semibold text-text-primary">
              {stage.title}
            </span>
          </div>
          <ChevronDown
            className={cn(
              'h-4 w-4 text-text-secondary transition-transform',
              isActive && 'rotate-180'
            )}
          />
        </button>

        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="pb-4">
                <p className="text-sm text-text-secondary mb-4">
                  {stage.description}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-brand-blue" />
                    <span className="text-text-secondary">Timing:</span>
                    <span className="font-medium text-text-primary">
                      {stage.timing}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-brand-blue" />
                    <span className="text-text-secondary">Team:</span>
                    <span className="font-medium text-text-primary">
                      {stage.team}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-brand-blue mt-0.5" />
                    <div>
                      <span className="text-text-secondary">Outcomes:</span>
                      <ul className="mt-1 space-y-1">
                        {stage.outcomes.map((outcome) => (
                          <li
                            key={outcome}
                            className="text-text-primary flex items-start gap-2"
                          >
                            <span className="inline-block w-1 h-1 rounded-full bg-brand-blue mt-1.5 shrink-0" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
