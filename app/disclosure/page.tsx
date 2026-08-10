import Link from 'next/link';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { VOLUME_ONE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Disclosure',
  description:
    'Disclosure: The Desire Path Method. A transparent AI-assisted creative workflow, and why the process behind Desire Path is published openly.',
};

/* The four principles, printed verbatim in Volume One p.25 */
const PRINCIPLES = [
  'Real observations.',
  'Human curiosity.',
  'AI as a tool, not an author.',
  'Human judgment, always.',
];

/* The progression argued in Volume One #10, The Disclosure of It All */
const PROGRESSION = [
  'Detection',
  'Disclosure',
  'Explanation',
  'Accountability',
  'Evaluate the work',
];

/* Division of responsibility, derived stage by stage from p.26 */
const RESPONSIBILITY: [string, string, string][] = [
  ['Observation', 'Originates the observation', 'None'],
  ['Pattern Recognition', 'Defines and judges the pattern', 'None'],
  ['Discussion', 'Directs and evaluates', 'Thinking partner'],
  ['Research', 'Directs, verifies, judges relevance', 'Retrieves, organises, explains'],
  ['Drafting', 'Directs', 'Produces the initial draft'],
  ['Human Editing', 'Leads and approves', 'None'],
  ['Visual Design', 'Defines concept and approves', 'Generates and iterates'],
  ['Final Governance', 'Reviews and approves', 'None'],
  ['Publication', 'Publishes', 'None'],
];

export default function DisclosurePage() {
  return (
    <>
      <PageHeader
        eyebrow="The Desire Path Method"
        title="Disclosure"
        standfirst="A transparent AI-assisted creative workflow."
      />

      {/* Why disclosure matters */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="font-display text-[clamp(1.6rem,4vw,2.4rem)] leading-tight text-paper">
          Why disclosure matters
        </h2>
        <div className="mt-10 max-w-reading space-y-6 font-sans text-[1.02rem] leading-relaxed text-graphite">
          <p className="font-display text-lg leading-relaxed text-paper/85">
            Trust is the foundation of everything I create.
          </p>
          <p>
            The mangazine exists to share ideas worth exploring, and that starts
            with being open about how those ideas are shaped. Every post you
            have read went through the same journey.
          </p>
        </div>

        <ul className="mt-12 space-y-4 border-y border-gold/20 py-10">
          {PRINCIPLES.map((p) => (
            <li key={p} className="font-display text-xl text-paper sm:text-2xl">
              {p}
            </li>
          ))}
        </ul>
      </section>

      {/* The philosophy */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-display text-[clamp(1.6rem,4vw,2.4rem)] leading-tight text-paper">
          The Desire Path philosophy
        </h2>
        <div className="mt-10 max-w-reading space-y-6 font-sans text-[1.02rem] leading-relaxed text-graphite">
          <p>
            The Desire Path series was never created by asking AI to invent
            ideas. Every instalment began with a human observation.
          </p>
          <p>
            AI was then used as a collaborative tool to develop, structure,
            refine and visualise those observations.
          </p>
          <p>
            The result is neither purely human nor purely AI. It is a governed,
            transparent creative workflow.
          </p>
        </div>
        <Link
          href="/process"
          className="mt-10 inline-block font-sans text-[0.72rem] uppercase tracking-[0.18em] text-graphite transition-colors hover:text-paper"
        >
          See all nine stages →
        </Link>
      </section>

      <div className="mx-auto max-w-5xl px-6"><div className="rule" /></div>

      {/* Who did what */}
      <section aria-labelledby="who" className="mx-auto max-w-5xl px-6 py-20">
        <h2 id="who" className="font-display text-[clamp(1.6rem,4vw,2.4rem)] leading-tight text-paper">
          Who did what
        </h2>
        <p className="mt-8 max-w-reading font-sans text-[1.02rem] leading-relaxed text-graphite">
          Saying &ldquo;AI-assisted&rdquo; on its own explains very little. This
          is the division of responsibility across the nine stages, as
          documented in Volume One.
        </p>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[36rem] border-collapse text-left">
            <caption className="sr-only">
              Division of responsibility between the human creator and AI across
              the nine stages of the Desire Path Method
            </caption>
            <thead>
              <tr className="border-y border-gold/25">
                <th scope="col" className="py-4 pr-6 font-sans text-[0.62rem] uppercase tracking-[0.2em] text-gold">
                  Stage
                </th>
                <th scope="col" className="py-4 pr-6 font-sans text-[0.62rem] uppercase tracking-[0.2em] text-gold">
                  Human role
                </th>
                <th scope="col" className="py-4 font-sans text-[0.62rem] uppercase tracking-[0.2em] text-gold">
                  AI role
                </th>
              </tr>
            </thead>
            <tbody>
              {RESPONSIBILITY.map(([stage, human, ai]) => (
                <tr key={stage} className="border-b border-gold/10">
                  <th scope="row" className="py-4 pr-6 font-display text-base font-normal text-paper">
                    {stage}
                  </th>
                  <td className="py-4 pr-6 font-sans text-[0.9rem] text-graphite">{human}</td>
                  <td className="py-4 font-sans text-[0.9rem] text-graphite">{ai}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6"><div className="rule" /></div>

      {/* Disclosure is not the destination */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-display text-[clamp(1.6rem,4vw,2.4rem)] leading-tight text-paper">
          Disclosure is not the destination
        </h2>
        <p className="mt-10 max-w-reading font-sans text-[1.02rem] leading-relaxed text-graphite">
          The final piece in Volume One, The Disclosure of It All: Now What?,
          argues that transparency is a starting point rather than an ending.
          The path runs in one direction:
        </p>

        <ol className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-3">
          {PROGRESSION.map((step, i) => (
            <li key={step} className="flex items-center gap-4">
              <span className="font-display text-lg text-paper">{step}</span>
              {i < PROGRESSION.length - 1 && (
                <span aria-hidden className="text-gold/50">→</span>
              )}
            </li>
          ))}
        </ol>

        <div className="mt-12 max-w-reading space-y-6 font-sans text-[1.02rem] leading-relaxed text-graphite">
          <p>
            Once disclosure becomes ordinary, the interesting questions are not
            about the tool at all. Was the work useful? Was it accurate? Was
            human judgement applied? Can the person explain and defend their
            conclusions? Is there clear accountability for the final outcome?
          </p>
          <p>
            Those questions matter whether AI was involved or not.
          </p>
          <p className="font-display text-lg leading-relaxed text-paper/85">
            The value was never in proving that AI wasn&apos;t used. The value
            was always in demonstrating that the work deserved to be trusted.
          </p>
        </div>

        <p className="mt-14 font-display text-2xl leading-snug text-paper sm:text-3xl">
          Stop chasing the tool.
          <br />
          Start evaluating the thinking.
        </p>

        <a
          href={VOLUME_ONE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-block border border-gold/40 px-8 py-4 font-sans text-[0.72rem] uppercase tracking-[0.18em] text-paper transition-colors hover:border-gold hover:text-gold"
        >
          Read the full method in Volume One ↗
        </a>
      </section>
    </>
  );
}
