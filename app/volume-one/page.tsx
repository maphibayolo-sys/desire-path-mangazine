import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { VOLUME_ONE_DOI, DOI_URL, VOLUME_ONE_URL, VOLUME_ONE_CONTENTS } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Volume One',
  description:
    'Desire Path Mangazine, Volume 1, Premiere Edition. Ten pieces exploring the hidden behaviours shaping work, technology, AI and modern life. Available through Zenodo with a persistent DOI.',
};

export default function VolumeOnePage() {
  return (
    <>
      <PageHeader
        eyebrow="Premiere Edition · 2026"
        title="Desire Path Mangazine, Volume 1"
        standfirst="Ideas. Patterns. Action. Ten pieces combining thought-provoking articles with manga-inspired illustration to explore the hidden behaviours shaping work, technology, AI and modern life."
      />

      <section className="mx-auto grid max-w-5xl gap-14 px-6 py-16 md:grid-cols-[minmax(0,19rem)_1fr] md:items-start md:gap-16">
        <Image
          src="/art/volume-one-cover.png"
          alt="Cover of Desire Path Mangazine, Volume 1, Premiere Edition"
          width={765}
          height={1123}
          sizes="(max-width: 768px) 75vw, 19rem"
          className="h-auto w-full max-w-xs shadow-2xl md:max-w-none"
          priority
        />

        <div>
          <p className="max-w-reading font-sans text-[1.02rem] leading-relaxed text-graphite">
            Volume One is available through Zenodo with a persistent DOI.
          </p>

          <a
            href={VOLUME_ONE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-paper px-8 py-4 font-sans text-[0.72rem] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-gold"
          >
            Read Volume One on Zenodo ↗
          </a>

          <p className="mt-5 font-sans text-[0.78rem] text-graphite">
            DOI:{' '}
            <a
              href={DOI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper underline decoration-gold/50 underline-offset-4 transition-colors hover:decoration-gold"
            >
              {VOLUME_ONE_DOI}
            </a>
          </p>

          <div className="rule my-10" />

          <h2 className="font-sans text-[0.68rem] uppercase tracking-[0.22em] text-gold">
            Contents
          </h2>
          <ol className="mt-6 space-y-3">
            {VOLUME_ONE_CONTENTS.map((title, i) => (
              <li key={title} className="flex gap-4">
                <span className="w-6 shrink-0 font-display text-sm text-gold/50">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-base text-paper">{title}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6 flex gap-4 font-sans text-[0.88rem] text-graphite">
            <span className="w-6 shrink-0" aria-hidden />
            <span>
              Plus{' '}
              <Link href="/disclosure" className="text-paper underline decoration-gold/50 underline-offset-4 transition-colors hover:decoration-gold">
                Disclosure: The Desire Path Method
              </Link>
              .
            </span>
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6"><div className="rule" /></div>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-display text-[clamp(1.6rem,4vw,2.4rem)] leading-tight text-paper">
          What it moves across
        </h2>
        <p className="mt-10 max-w-reading font-sans text-[1.02rem] leading-relaxed text-graphite">
          Volume One travels through organisational behaviour and technology
          systems, security clearance and recruitment, remote work and physical
          presence, work culture and talent development, technological ownership
          and dependency, employee benefits, AI-generated content and human
          taste, AI detection, and disclosure itself.
        </p>
        <p className="mt-6 max-w-reading font-sans text-[1.02rem] leading-relaxed text-graphite">
          Each piece is illustrated. Each issue is a quest. Each topic, a new
          world to explore.
        </p>
        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
          <Link href="/process" className="font-sans text-[0.72rem] uppercase tracking-[0.18em] text-graphite transition-colors hover:text-paper">
            How it was made →
          </Link>
          <Link href="/disclosure" className="font-sans text-[0.72rem] uppercase tracking-[0.18em] text-graphite transition-colors hover:text-paper">
            The disclosure philosophy →
          </Link>
        </div>
      </section>
    </>
  );
}
