export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gold/10">
      <div className="mx-auto flex max-w-5xl flex-wrap justify-between gap-12 px-6 py-16 md:px-10">
        <div>
          <p className="font-display text-sm tracking-[0.15em] text-gold-bright">DESIRE PATH</p>
          <p className="mt-1 font-display text-xs tracking-[0.4em] text-gold-dim italic">Follow the Clicks</p>
          <p className="mt-5 max-w-[18rem] text-sm leading-relaxed text-mist">A publication about work, technology, AI, governance and modern life, told through systems thinking and manga-inspired illustration.</p>
        </div>
        <div className="font-mono text-[9px] leading-[2.2] tracking-[0.15em] text-mist">
          <p>Every click reveals a behaviour.</p>
          <p>Every behaviour reveals a system.</p>
          <p>Every system reveals incentives.</p>
          <p>Every incentive reveals a story.</p>
          <p>Every story reveals an opportunity to build something better.</p>
        </div>
      </div>
      <p className="pb-6 text-center font-mono text-[8px] tracking-[0.4em] text-gold-dim/40">DESIRE PATH MANGAZINE ✦ 2026</p>
    </footer>
  );
}
