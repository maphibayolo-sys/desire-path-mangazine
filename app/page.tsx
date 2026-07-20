import Link from 'next/link';
import Image from 'next/image';
import { getAllArticles } from '@/lib/articles';

export default function JourneyPage() {
  const articles = getAllArticles();
  const featured = articles.filter(a => a.art);

  return (
    <>
      {/* HERO: Full-viewport heroine */}
      <section className="relative flex min-h-screen flex-col justify-end overflow-hidden">
        <Image src="/art/heroine.png" alt="The guide" fill className="object-cover object-[center_20%] brightness-[0.55]" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-abyss/30 via-transparent to-abyss" />
        <div className="relative px-6 pb-20 md:px-12 md:pb-24 lg:max-w-3xl">
          <p className="font-mono text-[9px] tracking-[0.4em] text-gold opacity-80">
            OBSERVE ✦ QUESTION ✦ UNDERSTAND ✦ BUILD BETTER TOMORROWS
          </p>
          <h1 className="mt-6 font-display text-6xl leading-[0.95] text-parchment md:text-8xl">
            Desire Path
          </h1>
          <p className="mt-3 font-display text-lg italic tracking-[0.5em] text-gold">
            Follow the Clicks
          </p>
          <p className="mt-8 max-w-md text-[17px] leading-relaxed text-mist">
            The most revealing part of any system is rarely the official process.
            It is the behaviour happening around it.
          </p>
          <div className="mt-10 flex gap-4">
            <Link href="/volume-one" className="bg-gold px-8 py-3.5 font-display text-sm tracking-wide text-abyss transition hover:bg-gold-bright">Begin the Journey</Link>
            <Link href="/archive" className="border border-gold/30 px-8 py-3.5 font-display text-sm tracking-wide text-gold-bright transition hover:bg-abyss/50">The Archive</Link>
          </div>
        </div>
      </section>

      {/* EDITOR QUOTE */}
      <section className="px-6 py-28 text-center md:py-36">
        <div className="thread" />
        <p className="mx-auto mt-10 max-w-lg font-display text-[1.65rem] italic leading-relaxed text-parchment">
          &ldquo;Desire Path isn&apos;t just a name. It&apos;s a reminder that the most meaningful
          outcomes rarely come from following the expected route.&rdquo;
        </p>
        <p className="mt-8 font-mono text-[9px] tracking-[0.3em] text-gold-dim">
          MAPHI BAYOLO ✦ EDITOR IN CHIEF
        </p>
        <div className="thread mt-10" />
      </section>

      {/* FEATURED SPREADS */}
      {featured.map((a, i) => (
        <section key={a.slug} className={`flex min-h-[500px] flex-col bg-deep md:flex-row ${i % 2 ? 'md:flex-row-reverse' : ''}`}>
          <div className="relative min-h-[320px] flex-1 md:min-h-0">
            <Image src={a.art!} alt={a.title} fill className="object-cover" />
          </div>
          <div className="flex flex-1 flex-col justify-center px-8 py-14 md:px-14">
            <p className="font-mono text-[9px] tracking-[0.3em] text-gold">
              PATH {String(a.number).padStart(2,'0')} ✦ {a.world.toUpperCase()}
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-parchment md:text-4xl">
              {a.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-mist">{a.excerpt}</p>
            <p className="mt-6 font-mono text-[9px] tracking-[0.2em] text-gold-dim">
              {new Date(a.date).toLocaleDateString('en-GB', { day:'numeric', month:'long', year:'numeric' }).toUpperCase()} ✦ P.{a.pages}
            </p>
            <Link href={`/articles/${a.slug}`} className="mt-6 inline-block self-start border-b border-gold/30 pb-0.5 font-display text-sm text-gold-bright transition hover:border-gold">
              Read this path →
            </Link>
          </div>
        </section>
      ))}

      {/* CONTENTS SCROLL */}
      <section className="mx-auto max-w-2xl px-6 py-24 md:py-32">
        <p className="mb-14 text-center font-mono text-[9px] tracking-[0.4em] text-gold">
          VOLUME ONE ✦ THE FULL JOURNEY
        </p>
        {articles.map((a, i) => (
          <Link key={a.slug} href={`/articles/${a.slug}`}
            className="group flex items-baseline justify-between gap-6 border-b border-gold/[0.08] py-5 transition-all hover:pl-3"
          >
            <div className="flex items-baseline gap-5">
              <span className="font-display text-3xl text-gold/20">{String(a.number).padStart(2,'0')}</span>
              <div>
                <span className="font-display text-lg text-parchment transition-colors group-hover:text-gold-bright">{a.title}</span>
                <span className="mt-1 block font-mono text-[8px] tracking-[0.2em] text-gold-dim">{a.world.toUpperCase()}</span>
              </div>
            </div>
            <span className="shrink-0 font-mono text-[9px] tracking-[0.15em] text-gold-dim">p.{a.pages}</span>
          </Link>
        ))}
      </section>

      {/* CLOSING PHILOSOPHY */}
      <section className="px-6 py-24 text-center">
        <p className="mx-auto max-w-md font-display text-xl italic leading-relaxed text-parchment">
          The most interesting part of any technology environment is rarely the documented process.
          It&apos;s the behaviour happening around it.
        </p>
        <p className="mt-8 font-mono text-[9px] tracking-[0.4em] text-gold">
          THAT IS WHERE THE OPERATIONAL TRUTH LIVES
        </p>
      </section>
    </>
  );
}
