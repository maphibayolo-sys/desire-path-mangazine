import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { getAllArticles, getArticle, getAdjacent } from '@/lib/articles';

export function generateStaticParams() {
  return getAllArticles().map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return { title: a.title, description: a.excerpt, openGraph: { title: a.title, description: a.excerpt, type: 'article', publishedTime: a.date } };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const { prev, next } = getAdjacent(slug);

  return (
    <article>
      {/* Hero artwork if available */}
      {a.art && (
        <div className="relative h-[60vh] min-h-[400px]">
          <Image src={a.art} alt={a.title} fill className="object-cover brightness-[0.6]" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-abyss/40 to-abyss" />
        </div>
      )}

      <div className="mx-auto max-w-prose px-6 pb-20 pt-32 md:pt-40">
        {/* Header */}
        <header className={a.art ? '-mt-32' : ''}>
          <p className="font-mono text-[9px] tracking-[0.35em] text-gold">
            DESIRE PATH: FOLLOW THE CLICKS ✦ No{String(a.number).padStart(2,'0')}
          </p>
          <h1 className="mt-5 font-display text-4xl leading-tight text-parchment md:text-5xl">
            {a.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="font-mono text-[9px] tracking-[0.2em] text-gold-dim">
              {new Date(a.date).toLocaleDateString('en-GB', { day:'numeric', month:'long', year:'numeric' }).toUpperCase()}
            </span>
            <span className="h-1 w-1 rounded-full bg-gold/20" />
            <span className="font-mono text-[9px] tracking-[0.2em] text-gold-dim">{a.world.toUpperCase()}</span>
            <span className="h-1 w-1 rounded-full bg-gold/20" />
            <span className="font-mono text-[9px] tracking-[0.2em] text-gold-dim">{a.readingMinutes} MIN READ</span>
            <span className="h-1 w-1 rounded-full bg-gold/20" />
            <span className="font-mono text-[9px] tracking-[0.2em] text-gold-dim">MANGAZINE P.{a.pages}</span>
          </div>
          <div className="mt-10 h-px w-10 bg-gold/20" />
        </header>

        {/* Body */}
        <div className="prose-editorial mt-10 drop-cap">
          <MDXRemote source={a.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
        </div>

        {/* Navigation */}
        <footer className="mt-20 border-t border-gold/10 pt-10">
          <div className="grid gap-6 md:grid-cols-2">
            {prev ? (
              <Link href={`/articles/${prev.slug}`} className="group">
                <p className="font-mono text-[8px] tracking-[0.25em] text-gold-dim">PREVIOUS PATH</p>
                <p className="mt-2 font-display text-parchment transition-colors group-hover:text-gold-bright">{prev.title}</p>
              </Link>
            ) : <span />}
            {next ? (
              <Link href={`/articles/${next.slug}`} className="group text-right">
                <p className="font-mono text-[8px] tracking-[0.25em] text-gold-dim">NEXT PATH</p>
                <p className="mt-2 font-display text-parchment transition-colors group-hover:text-gold-bright">{next.title}</p>
              </Link>
            ) : <span />}
          </div>
        </footer>
      </div>
    </article>
  );
}
