import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'The Method' };

const S = [
  { n:1, name:'Observation', lead:'Human', t:'Every path begins in the real world: conversations, work, recruitment, enterprise tech, research papers, news and notebooks.' },
  { n:2, name:'Pattern Recognition', lead:'Human', t:'Each observation is tested against one question: what are people actually doing?' },
  { n:3, name:'Discussion', lead:'Human + AI', t:'AI challenges assumptions and sharpens framing. Ideas are debated, never accepted automatically.' },
  { n:4, name:'Research', lead:'Human directed', t:'Facts are verified. AI retrieves and organises; human judgement decides what evidence counts.' },
  { n:5, name:'Drafting', lead:'Human + AI', t:'AI produces an initial draft under direction. The first draft is never the final version.' },
  { n:6, name:'Editing', lead:'Human', t:'Removing AI-sounding phrases, rewriting sections, adding observations from handwritten notebooks.' },
  { n:7, name:'Visual Design', lead:'Human + AI', t:'Every image starts with a human concept. Iteration refines composition, colour and symbolism.' },
  { n:8, name:'Governance', lead:'Human', t:'A final review of accuracy, tone, message and consistency. Nothing is published automatically.' },
  { n:9, name:'Publication', lead:'Human', t:'Choosing visuals, timing and where each piece lives. AI does not publish content.' },
  { n:10, name:'Reflection', lead:'Human', t:'Every published path becomes another observation. The loop begins again.' },
];

export default function MethodPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 pt-40 pb-20">
      <div className="text-center">
        <p className="font-mono text-[9px] tracking-[0.4em] text-gold">DISCLOSURE</p>
        <h1 className="mt-5 font-display text-4xl text-gold-bright md:text-5xl">The Desire Path Method</h1>
        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-mist">A transparent, AI-assisted creative workflow. Every instalment began with a human observation.</p>
      </div>
      <div className="mt-20 space-y-14">
        {S.map((s) => (
          <div key={s.n}>
            <div className="flex items-baseline justify-between gap-3">
              <p className="font-mono text-[8px] tracking-[0.3em] text-gold">STAGE {String(s.n).padStart(2,'0')}</p>
              <p className="font-mono text-[8px] tracking-[0.15em] text-mist">{s.lead.toUpperCase()}</p>
            </div>
            <h2 className="mt-3 font-display text-xl text-parchment">{s.name}</h2>
            <p className="mt-2 text-sm leading-relaxed text-mist">{s.t}</p>
          </div>
        ))}
      </div>
      <div className="mt-24 border-y border-gold/15 py-12 text-center">
        <p className="mx-auto max-w-lg font-display text-xl italic leading-relaxed text-parchment">AI is a powerful ally, but intention, judgement and responsibility will always remain human.</p>
      </div>
    </div>
  );
}
