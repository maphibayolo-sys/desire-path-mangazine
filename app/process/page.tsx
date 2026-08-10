import Link from 'next/link';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Process',
  description:
    'The Desire Path Method, as documented in Volume One: the nine-stage journey every post followed, from real-world observation to publication.',
};

/* All nine stages, their leads, classifications and content are taken
   directly from Disclosure: The Desire Path Method, Volume One p.26.
   There is no tenth stage. */
const STAGES: {
  n: string;
  name: string;
  lead: string;
  classification: string;
  body: string[];
}[] = [
  {
    n: '01',
    name: 'Observation',
    lead: 'Human',
    classification: 'Human Inspired. Human Led.',
    body: [
      'Every Desire Path began in the real world. Ideas came from conversations, work experiences, recruitment processes, enterprise technology, AI governance, behavioural patterns, LinkedIn discussions, reading research papers, news and notebooks.',
      'No AI generated the original Desire Path concepts. These all originated from personal observations and curiosity.',
    ],
  },
  {
    n: '02',
    name: 'Pattern Recognition',
    lead: 'Human',
    classification: 'Human Analysis. Human Led.',
    body: [
      'Once an observation existed, it was tested against a single question: what are people actually doing? That became the defining question of the series.',
      'The desire path was not the official process. It was the behaviour underneath the process. This framing was created by observing systems rather than asking AI for topics.',
    ],
  },
  {
    n: '03',
    name: 'Discussion',
    lead: 'Human + AI',
    classification: 'AI Assisted. Human Directed.',
    body: [
      'The observation was then explored through discussion, with AI used as a thinking partner. Typical activities included challenging assumptions, testing counterarguments, exploring consequences, identifying hidden incentives, finding stronger framing, identifying contradictions and improving logical flow.',
      'Ideas were debated rather than accepted automatically. Many initial ideas changed substantially during these conversations.',
    ],
  },
  {
    n: '04',
    name: 'Research',
    lead: 'Human Directed',
    classification: 'AI Assisted. Human Directed.',
    body: [
      'Research was performed where required: AI detection research, the Fable 5 suspension and export control directive, employee benefits, AI governance, cloud and on-premise trends, AI models and enterprise technology.',
      'AI helped retrieve, organise, verify and explain information. Both ChatGPT and Claude performed research tasks, including web searches to verify facts before they were included in published posts. The decision about what evidence mattered remained human.',
    ],
  },
  {
    n: '05',
    name: 'Drafting',
    lead: 'Human + AI',
    classification: 'AI Assisted. Human Directed.',
    body: [
      'Once the direction was clear, AI produced an initial draft. In practice, two different drafting workflows emerged. Some posts were drafted first in ChatGPT through brainstorming conversations, then brought to Claude for expansion, structural editing and polishing before publication. Other posts were drafted collaboratively across both tools at different stages.',
      'AI helped organise ideas, improve readability, improve flow, strengthen arguments, remove repetition and create rhythm. The first draft was never considered the final version.',
    ],
  },
  {
    n: '06',
    name: 'Human Editing',
    lead: 'Human',
    classification: 'Human Led. Human Approved.',
    body: [
      'This became one of the largest stages. Typical edits included removing AI-sounding phrases, removing em dashes, removing overly polished language, making writing feel more human, changing wording, changing endings, rewriting sections, changing titles, simplifying explanations, adding stronger observations from handwritten notebooks, fixing repetitive structural patterns and managing LinkedIn character limits.',
      'The posts evolved through multiple iterations, often across several revision rounds.',
    ],
  },
  {
    n: '07',
    name: 'Visual Design',
    lead: 'Human + AI',
    classification: 'AI Assisted. Human Directed. Human Approved.',
    body: [
      'Every image began with a human concept. The desired message was defined first. AI was then used to generate artwork, which was repeatedly refined through prompts: simplifying layouts, changing colours, changing composition, changing facial expressions, adding RPG themes, changing signs, changing symbolism, making visuals less busy and making visuals easier to understand.',
      'The images often went through many revisions before approval.',
    ],
  },
  {
    n: '08',
    name: 'Final Governance',
    lead: 'Human',
    classification: 'Human Oversight. Human Approval.',
    body: [
      'Every post received a final review. Checks included accuracy, tone, message, readability, originality, consistency with previous posts and suitability for publication.',
      'Nothing was published automatically. The human creator retained editorial control.',
    ],
  },
  {
    n: '09',
    name: 'Publication',
    lead: 'Human',
    classification: 'Human Led.',
    body: [
      'Publication remained entirely human. This included selecting hashtags, choosing visuals, deciding publication timing, deciding whether to boost posts and responding to comments.',
      'AI did not publish content.',
    ],
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Desire Path Method"
        title="Every post followed a journey. Here is that journey."
        standfirst="The nine stages below are the creative workflow documented inside Volume One. Each stage carries the lead and classification exactly as published."
      />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="max-w-reading font-display text-lg leading-relaxed text-paper/85">
          The Desire Path series was never created by asking AI to invent ideas.
          Every instalment began with a human observation. AI was then used as a
          collaborative tool to develop, structure, refine and visualise those
          observations.
        </p>
      </section>

      <section aria-label="The nine stages" className="mx-auto max-w-5xl px-6 pb-8">
        <ol className="divide-y divide-gold/15 border-t border-gold/15">
          {STAGES.map((s) => (
            <li key={s.n} className="grid gap-x-10 gap-y-4 py-12 sm:grid-cols-[5rem_1fr]">
              <p className="font-display text-2xl text-gold/50">{s.n}</p>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h2 className="font-display text-xl text-paper">{s.name}</h2>
                  <p className="font-sans text-[0.62rem] uppercase tracking-[0.2em] text-graphite">
                    Lead: {s.lead}
                  </p>
                </div>
                {s.body.map((p, i) => (
                  <p
                    key={i}
                    className="mt-4 max-w-reading font-sans text-[1.0rem] leading-relaxed text-graphite"
                  >
                    {p}
                  </p>
                ))}
                <p className="mt-6 font-sans text-[0.62rem] uppercase tracking-[0.2em] text-gold">
                  Classification: {s.classification}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <blockquote className="border-l border-gold/40 pl-6 sm:pl-8">
          <p className="max-w-reading font-display text-xl leading-snug text-paper sm:text-2xl">
            AI is a powerful ally, but intention, judgment and responsibility
            will always remain human.
          </p>
        </blockquote>
        <Link
          href="/disclosure"
          className="mt-12 inline-block border border-gold/40 px-8 py-4 font-sans text-[0.72rem] uppercase tracking-[0.18em] text-paper transition-colors hover:border-gold hover:text-gold"
        >
          Why this is disclosed →
        </Link>
      </section>
    </>
  );
}
