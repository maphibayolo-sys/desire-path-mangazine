import Link from 'next/link';
import { VOLUME_ONE_URL, VOLUME_ONE_DOI, DOI_URL, SUBJECT_AREAS } from '@/lib/site';

const ONWARD = [
  { href: '/volume-one', label: 'Volume One', note: 'The premiere edition, and where to read it.' },
  { href: '/process', label: 'Process', note: 'The nine-stage journey every post followed.' },
  { href: '/disclosure', label: 'Disclosure', note: 'A transparent AI-assisted creative workflow.' },
  { href: '/about', label: 'About', note: 'How Desire Path came to be.' },
];

export default function Home() {
  return (
    <>
      {/* HERO — language from the Volume One cover */}
      <section className="mx-auto max-w-5xl px-6 pb-28 pt-20 sm:pb-36 sm:pt-28">
        <p className="font-sans text-[0.68rem] uppercase tracking-[0.3em] text-gold">
          Mangazine · Volume 1 · Premiere Edition
        </p>
        <h1 className="mt-8 font-display text-[clamp(2.75rem,11vw,7rem)] leading-[0.92] tracking-[-0.02em] text-paper">
          DESIRE PATH
        </h1>
        <p className="mt-6 font-display text-xl text-paper/80 sm:text-2xl">
          A different path. Better questions. Stronger futures.
        </p>
        <p className="mt-8 max-w-reading font-sans text-[1.02rem] leading-relaxed text-graphite">
          A business mangazine combining thought-provoking articles with
          manga-inspired illustrations to explore the hidden behaviours shaping
          work, technology, AI and modern life.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href={VOLUME_ONE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-paper px-8 py-4 font-sans text-[0.72rem] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-gold"
          >
            Read Volume One ↗
          </a>
          <Link
            href="/about"
            className="font-sans text-[0.72rem] uppercase tracking-[0.18em] text-graphite transition-colors hover:text-paper"
          >
            How Desire Path came to be →
          </Link>
        </div>
        <p className="mt-14 font-sans text-[0.7rem] uppercase tracking-[0.28em] text-gold/80">
          Observe · Question · Understand · Build Better Tomorrows
        </p>
      </section>

      <div className="mx-auto max-w-5xl px-6"><div className="rule" /></div>

      {/* WHAT IS A DESIRE PATH — from Volume One pp.5-6 */}
      <section aria-labelledby="what" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <h2 id="what" className="font-display text-[clamp(1.9rem,4.5vw,3rem)] leading-tight text-paper">
          What is a desire path?
        </h2>
        <div className="mt-10 max-w-reading space-y-6 font-sans text-[1.02rem] leading-relaxed text-graphite">
          <p>
            In urban design, a desire path is the unofficial route people
            naturally create when the designed path doesn&apos;t match real
            human behaviour. You see it when people walk across grass instead of
            following the paved walkway. Nobody planned it. Nobody approved it.
            But enough people made the same choice that the grass wore down and
            a new path appeared.
          </p>
          <p>
            Technology works the same way. Every workaround, every spreadsheet
            built beside an enterprise system, every shadow AI tool adopted
            without approval, every unofficial Slack channel, every bypassed
            approval flow, every temporary process that has quietly run for
            three years. They all point to the same thing: a gap between how
            systems were designed and how humans actually operate.
          </p>
          <p>
            A desire path is not automatically a failure of discipline. It can
            be a failure of design.
          </p>
        </div>

        <blockquote className="mt-14 border-l border-gold/40 pl-6 sm:pl-8">
          <p className="font-display text-xl leading-snug text-paper sm:text-2xl">
            The most revealing part of any technology environment is rarely the
            official process. It&apos;s the behaviour happening around it.
          </p>
        </blockquote>

        <p className="mt-10 font-sans text-[0.72rem] uppercase tracking-[0.28em] text-gold">
          Follow the clicks. Find the path.
        </p>
      </section>

      <div className="mx-auto max-w-5xl px-6"><div className="rule" /></div>

      {/* WHAT IT EXPLORES — subject areas from the cover */}
      <section aria-labelledby="explores" className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <h2 id="explores" className="font-display text-[clamp(1.9rem,4.5vw,3rem)] leading-tight text-paper">
          What it explores
        </h2>
        <dl className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {SUBJECT_AREAS.map((s) => (
            <div key={s.name}>
              <dt className="font-sans text-[0.68rem] uppercase tracking-[0.22em] text-gold">
                {s.name}
              </dt>
              <dd className="mt-3 font-sans text-[0.98rem] leading-relaxed text-graphite">
                {s.body}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="mx-auto max-w-5xl px-6"><div className="rule" /></div>

      {/* ORIGIN — short, accurate */}
      <section aria-labelledby="origin" className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <h2 id="origin" className="font-display text-[clamp(1.9rem,4.5vw,3rem)] leading-tight text-paper">
          From LinkedIn to publication
        </h2>
        <div className="mt-10 max-w-reading space-y-6 font-sans text-[1.02rem] leading-relaxed text-graphite">
          <p>
            Desire Path began as weekly posts on LinkedIn. What began as ten
            weekly reflections sparked conversations, challenged assumptions and
            revealed patterns worth exploring deeper.
          </p>
          <p>
            A collection of those posts became Desire Path Mangazine Volume 1,
            published through Zenodo with a persistent DOI:{' '}
            <a
              href={DOI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper underline decoration-gold/50 underline-offset-4 transition-colors hover:decoration-gold"
            >
              {VOLUME_ONE_DOI}
            </a>
            .
          </p>
        </div>
        <Link
          href="/about"
          className="mt-10 inline-block font-sans text-[0.72rem] uppercase tracking-[0.18em] text-graphite transition-colors hover:text-paper"
        >
          Read the full story →
        </Link>
      </section>

      <div className="mx-auto max-w-5xl px-6"><div className="rule" /></div>

      {/* ONWARD */}
      <section aria-labelledby="onward" className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <h2 id="onward" className="font-sans text-[0.68rem] uppercase tracking-[0.3em] text-gold">
          Continue
        </h2>
        <ul className="mt-10 divide-y divide-gold/15 border-y border-gold/15">
          {ONWARD.map((o) => (
            <li key={o.href}>
              <Link
                href={o.href}
                className="group flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 py-6"
              >
                <span className="font-display text-xl text-paper transition-colors group-hover:text-gold">
                  {o.label}
                </span>
                <span className="font-sans text-[0.9rem] text-graphite">{o.note}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
