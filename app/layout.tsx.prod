import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const SITE = 'https://desirepath.example.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: 'Desire Path: Follow the Clicks', template: '%s — Desire Path' },
  description: 'A premium editorial publication exploring work, technology, AI, governance and modern life through systems thinking, storytelling and manga-inspired illustration.',
  openGraph: { type: 'website', siteName: 'Desire Path: Follow the Clicks' },
  alternates: { types: { 'application/rss+xml': `${SITE}/feed.xml` } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body className="font-body antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
