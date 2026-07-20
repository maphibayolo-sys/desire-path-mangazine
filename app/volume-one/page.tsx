import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllArticles } from '@/lib/articles';

export const metadata: Metadata = { title: 'Volume One' };

export default function VolumeOnePage() {
  const articles = getAllArticles();
  return (
    <div className="mx-auto max-w-2xl px-6 pt-40 pb-20">
      <div className="text-center">
        <p className="font-mono text-[9px] tracking-[0.5em] text-gold">PREMIERE EDITION \u2726 2026</p>
        <h1 className="mt-5 font-display text-5xl tracking-wide text-parchment md:text-7xl">Volume One</h1>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-mist">Ten ideas. Ten desire paths. A different way to think about work, technology and life.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#contents" className="bg-gold px-7 py-3 font-display text-sm tracking-wide text-abyss transition hover:bg-gold-bright">Read Online</a>
          <a href="/downloads/Desire_Path_Mangazine_Volume_1.pdf" className="border border-gold/30 px-7 py-3 font-display text-sm tracking-wide text-gold-bright transition hover:bg-deep">Download PDF</a>
        </div>
      </div>
      <div id="contents" className="mt-24">
        <p className="mb-12 text-center font-mono text-[9px] tracking-[0.35em] text-gold">CONTENTS</p>
        {articles.map((a) => (
          <Link key={a.slug} href={`/articles/${a.slug}`} className="group flex items-baseline justify-between gap-6 border-b border-gold/[0.08] py-5 transition-all hover:pl-3">
            <div className="flex items-baseline gap-5">
              <span className="font-display text-3xl text-gold/20">{String(a.number).padStart(2,'0')}</span>
              <span className="font-display text-lg text-parchment transition-colors group-hover:text-gold-bright">{a.title}</span>
            </div>
            <span className="shrink-0 font-mono text-[9px] tracking-[0.15em] text-gold-dim">p.{a.pages}</span>
          </Link>
        ))}
        <div className="mt-6 flex items-baseline justify-between border-t border-gold/[0.08] pt-5">
          <Link href="/method" className="font-display text-lg text-parchment hover:text-gold-bright">Disclosure: The Desire Path Method</Link>
          <span className="font-mono text-[9px] tracking-[0.15em] text-gold-dim">p.25-26</span>
        </div>
      </div>
    </div>
  );
}
