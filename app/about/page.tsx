import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-prose px-6 pt-40 pb-20">
      <p className="font-mono text-[9px] tracking-[0.4em] text-gold">THE STORY</p>
      <h1 className="mt-4 font-display text-4xl text-gold-bright md:text-5xl">About Desire Path</h1>
      <div className="prose-editorial mt-12">
        <p>In urban design, a desire path is the unofficial route people naturally create when the designed path does not match real human behaviour.</p>
        <p>Some universities delay paving their campus walkways on purpose. They wait to see where students naturally walk first, then build the permanent paths based on the evidence. That is not laziness. That is intelligent design.</p>
        <p>The idea arrived through a TikTok video by @designingspacestv, and it described something visible everywhere: in business, in technology, in life.</p>
        <blockquote><p>The most revealing part of any technology environment is rarely the official process. It is the behaviour happening around it.</p></blockquote>
        <p>Desire Path began as ten weekly reflections on LinkedIn. A collection of those posts became Desire Path Mangazine, Volume One.</p>
        <p>A recurring heroine guides every journey. She arrives in a different landscape each week and asks the same question: what path are people actually taking?</p>
      </div>
    </div>
  );
}
