import Link from 'next/link';
import { VOLUME_ONE_URL, LINKEDIN_URL } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-5xl px-6 pb-16 pt-24">
      <div className="rule" />
      <div className="flex flex-wrap items-end justify-between gap-8 pt-10">
        <div>
          <p className="font-display text-[0.95rem] tracking-[0.22em] text-paper">
            DESIRE PATH
          </p>
          <p className="mt-2 font-sans text-[0.8rem] text-graphite">
            A business mangazine
          </p>
          <p className="mt-1 font-sans text-[0.8rem] text-graphite">
            Maphi Bayolo, Editor in Chief
          </p>
        </div>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 font-sans text-[0.72rem] uppercase tracking-[0.16em] text-graphite">
          <li>
            <a
              href={VOLUME_ONE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-paper"
            >
              Volume One ↗
            </a>
          </li>
          <li aria-hidden className="text-gold/40">·</li>
          <li>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-paper"
            >
              LinkedIn ↗
            </a>
          </li>
          <li aria-hidden className="text-gold/40">·</li>
          <li>
            <Link href="/contact" className="transition-colors hover:text-paper">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <p className="mt-10 font-sans text-[0.72rem] text-graphite/70">
        © 2026 Desire Path.
      </p>
    </footer>
  );
}
