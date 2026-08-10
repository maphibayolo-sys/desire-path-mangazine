import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { LINKEDIN_URL, THEME_FRAMEWORK } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'How Desire Path came to be, and about Maphi Bayolo, Editor in Chief of Desire Path Mangazine.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Editor in Chief"
        title="Maphi Bayolo"
        standfirst="Creator and Editor in Chief of Desire Path Mangazine."
      />

      {/* Portrait */}
      <section className="mx-auto max-w-5xl px-6 pt-8">
        <figure className="max-w-[17rem]">
          <Image
            src="/art/maphi-bayolo.jpg"
            alt="Portrait of Maphi Bayolo, Editor in Chief of Desire Path Mangazine"
            width={400}
            height={591}
            sizes="(max-width: 640px) 60vw, 17rem"
            className="h-auto w-full"
            priority
          />
          <figcaption className="mt-4 font-sans text-[0.68rem] uppercase tracking-[0.22em] text-graphite">
            Maphi Bayolo · Editor in Chief
          </figcaption>
        </figure>
      </section>

      {/* How Desire Path came to be — chronology from Volume One p.2 and p.25 */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="font-display text-[clamp(1.6rem,4vw,2.4rem)] leading-tight text-paper">
          How Desire Path came to be
        </h2>
        <div className="mt-10 max-w-reading space-y-6 font-sans text-[1.02rem] leading-relaxed text-graphite">
          <p>
            Maphi first came across the term &ldquo;desire path&rdquo; in a
            TikTok video posted by{' '}
            <span className="text-paper">@designingspacestv</span>, and was
            fascinated by the concept of people creating their own way when the
            existing path doesn&apos;t make sense for them.
          </p>
          <p>
            It described something she had seen everywhere, especially in
            business, technology and life.
          </p>
          <blockquote className="border-l border-gold/40 py-1 pl-6 sm:pl-8">
            <p className="font-display text-lg leading-relaxed text-paper">
              &ldquo;I wanted to explore how this idea fits into my industry,
              and more importantly, how it connects to the way we work, lead,
              build and make decisions today.&rdquo;
            </p>
          </blockquote>
          <p>
            Using her own professional skills, real world observations and the
            things she loved as a child and still loves today, drawing, manga
            and video games, she created a space to explore different topics in
            a way that feels both thought-provoking and engaging.
          </p>
          <p>
            She first started posting weekly on LinkedIn. What began as ten
            weekly reflections sparked conversations, challenged assumptions and
            revealed patterns worth exploring deeper. A collection of those
            posts became{' '}
            <span className="text-paper">Desire Path Mangazine Volume 1</span>.
          </p>
          <blockquote className="border-l border-gold/40 py-1 pl-6 sm:pl-8">
            <p className="font-display text-lg leading-relaxed text-paper">
              &ldquo;My goal is simple: to ask better questions, challenge
              default thinking and inspire stronger futures.&rdquo;
            </p>
          </blockquote>
        </div>

        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-block border border-gold/40 px-8 py-4 font-sans text-[0.72rem] uppercase tracking-[0.18em] text-paper transition-colors hover:border-gold hover:text-gold"
        >
          Connect with Maphi on LinkedIn ↗
        </a>
        <p className="mt-4 font-sans text-[0.88rem] text-graphite">
          LinkedIn is where Desire Path was first published, week by week.
        </p>
      </section>

      <div className="mx-auto max-w-5xl px-6"><div className="rule" /></div>

      {/* Theme of this mangazine — framework from Volume One p.2 */}
      <section aria-labelledby="framework" className="mx-auto max-w-5xl px-6 py-20">
        <h2 id="framework" className="font-display text-[clamp(1.6rem,4vw,2.4rem)] leading-tight text-paper">
          Theme of this mangazine
        </h2>
        <dl className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {THEME_FRAMEWORK.map((t) => (
            <div key={t.name}>
              <dt className="font-sans text-[0.68rem] uppercase tracking-[0.22em] text-gold">
                {t.name}
              </dt>
              <dd className="mt-3 font-sans text-[0.98rem] leading-relaxed text-graphite">
                {t.body}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-14 max-w-reading font-display text-lg leading-relaxed text-paper/85">
          Each issue is a quest. Each topic, a new world to explore.
        </p>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          <Link href="/process" className="font-sans text-[0.72rem] uppercase tracking-[0.18em] text-graphite transition-colors hover:text-paper">
            How the work is made →
          </Link>
          <Link href="/contact" className="font-sans text-[0.72rem] uppercase tracking-[0.18em] text-graphite transition-colors hover:text-paper">
            Get in touch →
          </Link>
        </div>
      </section>
    </>
  );
}
