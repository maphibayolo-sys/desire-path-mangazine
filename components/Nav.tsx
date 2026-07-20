'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const LINKS = [
  { href: '/', label: 'The Journey' },
  { href: '/volume-one', label: 'Volume One' },
  { href: '/archive', label: 'Archive' },
  { href: '/method', label: 'The Method' },
  { href: '/about', label: 'About' },
];

export default function Nav() {
  const p = usePathname();
  const [s, setS] = useState(false);
  const [o, setO] = useState(false);
  useEffect(() => {
    const h = () => setS(window.scrollY > 60);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${s ? 'bg-abyss/92 backdrop-blur-md' : ''}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="font-display text-sm tracking-[0.15em] text-gold-bright">DESIRE PATH</Link>
        <nav className="hidden gap-8 md:flex">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href}
              className={`font-mono text-[9px] tracking-[0.2em] uppercase transition-colors ${p === l.href ? 'text-gold-bright' : 'text-mist hover:text-gold-bright'}`}
            >{l.label}</Link>
          ))}
        </nav>
        <button className="font-mono text-xs tracking-widest text-gold md:hidden" onClick={() => setO(!o)}>{o ? 'CLOSE' : 'MENU'}</button>
      </div>
      {o && (
        <nav className="border-t border-gold/10 px-6 pb-6 md:hidden">
          {LINKS.map(l => <Link key={l.href} href={l.href} onClick={() => setO(false)} className="block py-3 font-mono text-xs tracking-wide text-cream">{l.label.toUpperCase()}</Link>)}
        </nav>
      )}
    </header>
  );
}
