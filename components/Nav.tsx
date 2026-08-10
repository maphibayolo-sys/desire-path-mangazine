'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const LINKS = [
  { href: '/volume-one', label: 'Volume One' },
  { href: '/process', label: 'Process' },
  { href: '/disclosure', label: 'Disclosure' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/95 backdrop-blur-sm' : 'bg-ink'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-5"
      >
        <Link
          href="/"
          className="font-display text-[0.95rem] tracking-[0.22em] text-paper"
        >
          DESIRE PATH
        </Link>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-7">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={active ? 'page' : undefined}
                  className={`font-sans text-[0.68rem] uppercase tracking-[0.18em] transition-colors hover:text-paper ${
                    active ? 'text-paper' : 'text-graphite'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
