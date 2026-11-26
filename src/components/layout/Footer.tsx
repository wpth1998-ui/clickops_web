import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';

const footerColumns = [
  {
    title: 'Products',
    links: [
      { label: 'EduAutomate', href: 'https://www.eduautomate.app' },
      { label: 'Sale Pilot', href: '#products' },
      { label: 'Property Lead Desk', href: '#products' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Business solutions', href: '#business-solutions' },
      { label: 'AI Customer Support', href: '#services' },
      { label: 'Workflow Automation', href: '#services' },
      { label: 'Web Development', href: '#services' },
      { label: 'Mobile Applications', href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Process', href: '#process' },
      { label: 'Case Studies', href: '#case-studies' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Training Schools', href: '#' },
      { label: 'Myanmar Business', href: '#' },
    ],
  },
];

export function Footer() {
  return (
    <footer
      className="border-t border-footer-border bg-footer-bg"
      role="contentinfo"
    >
      <Container>
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8">
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
              <a href="#" aria-label="ClickOps home">
                <Logo />
              </a>
              <p className="mt-4 max-w-xs text-pretty text-[13px] font-normal leading-[1.35] text-footer-text">
                AI and workflow automation for businesses in Myanmar and
                Southeast Asia — customer operations, integrations, and custom
                digital systems.
              </p>
            </div>

            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="footer-heading">{column.title}</h3>
                <ul className="space-y-1">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(link.href.startsWith('http')
                          ? {
                              target: '_blank',
                              rel: 'noopener noreferrer',
                            }
                          : {})}
                        className="footer-link"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-footer-border py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 text-[13px] font-normal leading-[1.35] text-footer-text">
              <a
                href="mailto:clickops.chat@gmail.com"
                className="footer-link"
              >
                clickops.chat@gmail.com
              </a>
              <span className="hidden sm:inline text-text-muted">·</span>
              <span>Yangon, Myanmar · Bangkok, Thailand</span>
            </div>
            <p className="text-[13px] font-normal leading-[1.35] text-footer-text">
              © 2026 ClickOps. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}