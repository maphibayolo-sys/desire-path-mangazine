import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getAllArticles } from '@/lib/articles';

export const metadata: Metadata = { title: 'Archive' };

export default function ArchivePage() {
  const articles = getAllArticles();
  return (
    <div className="mx-auto max-w-3xl px-6 pt-40 pb-20">
      <p className="font-mono text-[9px] tracking-[0.4em] text-gold">THE ARCHIVE</p>
      <h1 className="mt-4 font-display text-4xl text-parchment md:text-5xl">Every path ever walked</h1>
      <p className="mt-5 max-w-md text-base leading-relaxed text-mist">Organised by world. Built for twenty volumes.</p>
      <div className="mt-16">
        {articles.map((a, i) => (
          <Link key={a.slug} href={`/articles/${a.slug}`} className={`group flex gap-8 py-8 transition-all hover:pl-2 ${i < articles.length-1 ? 'border-b border-gold/[0.06]' : ''}`}>
            {a.art && <div className="relative hidden h-28 w-28 shrink-0 overflow-hidden md:block"><Image src={a.art} alt="" fill className="object-cover" /></div>}
            <div className="flex flex-col justify-center">
              <p className="font-mono text-[8px] tracking-[0.3em] text-gold">PATH {String(a.number).padStart(2,'0')} \u2726 {a.world.toUpperCase()}</p>
              <h3 className="mt-2 font-display text-xl text-parchment transition-colors group-hover:text-gold-bright">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{a.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
