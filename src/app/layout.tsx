import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-clickops',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://clickops.chat';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ClickOps — Business Solutions for Customer Operations',
    template: '%s | ClickOps',
  },
  description:
    'Business solutions for customer operations in Myanmar and Southeast Asia—AI support, lead automation, portals, and apps delivered and managed by ClickOps.',
  keywords: [
    'ClickOps',
    'AI automation',
    'Myanmar',
    'Messenger bot',
    'Telegram automation',
    'workflow automation',
    'web development',
  ],
  authors: [{ name: 'ClickOps' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'ClickOps',
    title: 'ClickOps — AI Automation & Digital Solutions',
    description:
      'Custom AI automation and digital systems that solve real operational problems — no hype, measurable business value.',
    images: [{ url: '/brand/clickops-logo-lockup.png', width: 937, height: 302, alt: 'ClickOps' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClickOps — AI Automation & Digital Solutions',
    description:
      'Custom AI automation and digital systems for Myanmar and Southeast Asia businesses.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`h-full antialiased ${plusJakarta.variable}`}>
      <body className="min-h-full flex flex-col font-sans type-base text-theme-text">
        <a
          href="#main-content"
          className="sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#2e4a73] focus:text-white focus:rounded-full focus:w-auto focus:h-auto focus:overflow-visible focus:whitespace-normal"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}