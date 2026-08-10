import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { SITE_URL } from '@/lib/site';

const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600'],
  display: 'swap',
});

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500'],
  display: 'swap',
});

const DESCRIPTION =
  'A business mangazine combining thought-provoking articles with manga-inspired illustrations to explore the hidden behaviours shaping work, technology, AI and modern life.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Desire Path Mangazine',
    template: '%s — Desire Path',
  },
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: 'Desire Path',
    title: 'Desire Path — An IT, Tech & Business Mangazine',
    description: DESCRIPTION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-ink font-sans text-paper antialiased">
        <Nav />
        <main id="top">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
