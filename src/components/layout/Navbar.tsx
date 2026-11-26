'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';
import { navItems, products } from '@/data/navigation';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleDropdownEnter = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 150);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape' && dropdownOpen) {
        setDropdownOpen(false);
      }
    },
    [dropdownOpen]
  );

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] motion-micro',
          scrolled
            ? 'bg-surface/95 backdrop-blur-md border-b border-border shadow-soft'
            : 'bg-surface/90 backdrop-blur-sm border-b border-border/60'
        )}
      >
        <Container>
          {/* Cursor layout: logo | centered links | utility + pills */}
          <nav
            className="grid h-[52px] grid-cols-[auto_1fr] items-center font-sans lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-x-8"
            role="navigation"
            aria-label="Main navigation"
          >
            <a
              href="#"
              className="shrink-0 lg:justify-self-start"
              aria-label="ClickOps home"
            >
              <Logo priority />
            </a>

            <IconButton
              className="lg:hidden col-start-2 justify-self-end"
              open={mobileOpen}
              onToggle={() => setMobileOpen(!mobileOpen)}
            />

            <div className="hidden lg:flex w-max max-w-full shrink-0 items-center justify-center justify-self-center gap-x-0.5 col-start-2 row-start-1">
              {navItems.map((item) => {
                if (item.label === 'Products') {
                  return (
                    <div
                      key={item.label}
                      ref={dropdownRef}
                      className="relative inline-flex shrink-0"
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleDropdownLeave}
                      onKeyDown={handleKeyDown}
                    >
                      <button
                        type="button"
                        className="nav-btn shrink-0"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        aria-expanded={dropdownOpen}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            'h-3.5 w-3.5 opacity-60 transition-transform duration-200',
                            dropdownOpen && 'rotate-180'
                          )}
                        />
                      </button>

                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 mt-1 w-72 bg-surface border border-border rounded-xl shadow-lg p-1.5 z-50"
                          >
                            {products.map((product) => (
                              <a
                                key={product.name}
                                href={product.href}
                                {...(product.href.startsWith('http')
                                  ? {
                                      target: '_blank',
                                      rel: 'noopener noreferrer',
                                    }
                                  : {})}
                                className="block px-3 py-2.5 rounded-lg hover:bg-surface-secondary transition-colors"
                                onClick={() => setDropdownOpen(false)}
                              >
                                <p className="site-chrome-text text-theme-text">
                                  {product.name}
                                </p>
                                <p className="type-xs text-theme-text-sec mt-0.5 leading-snug font-normal">
                                  {product.description}
                                </p>
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="nav-btn shrink-0"
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center justify-end gap-2 col-start-3 row-start-1 shrink-0">
              <Button variant="primary" size="sm" href="#contact">
                Book a call
              </Button>
            </div>
          </nav>
        </Container>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-surface z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between px-5 h-[52px] border-b border-border">
                  <Logo />
                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    className="p-2 text-text-primary"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto px-4 py-4">
                  <div className="space-y-0.5">
                    {navItems.map((item) => {
                      if (item.label === 'Products') {
                        return (
                          <div key={item.label}>
                            <button
                              type="button"
                              className="nav-btn w-full justify-between rounded-md"
                              onClick={() =>
                                setMobileProductsOpen(!mobileProductsOpen)
                              }
                            >
                              {item.label}
                              <ChevronDown
                                className={cn(
                                  'h-4 w-4 opacity-60 transition-transform duration-200',
                                  mobileProductsOpen && 'rotate-180'
                                )}
                              />
                            </button>
                            <AnimatePresence>
                              {mobileProductsOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="pl-3 pb-2 space-y-0.5">
                                    {products.map((product) => (
                                      <a
                                        key={product.name}
                                        href={product.href}
                                        {...(product.href.startsWith('http')
                                          ? {
                                              target: '_blank',
                                              rel: 'noopener noreferrer',
                                            }
                                          : {})}
                                        className="footer-link block rounded-md px-[15px]"
                                        onClick={() => setMobileOpen(false)}
                                      >
                                        {product.name}
                                      </a>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      }

                      return (
                        <a
                          key={item.label}
                          href={item.href}
                          className="nav-btn block w-full rounded-md text-left"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div className="px-4 py-5 border-t border-border">
                  <Button
                    variant="primary"
                    size="md"
                    href="#contact"
                    className="w-full"
                  >
                    Book a call
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function IconButton({
  className,
  open,
  onToggle,
}: {
  className?: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      className={cn('p-2 -mr-2 text-text-primary shrink-0', className)}
      onClick={onToggle}
      aria-label={open ? 'Close menu' : 'Open menu'}
    >
      {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </button>
  );
}