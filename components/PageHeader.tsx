export default function PageHeader({
  eyebrow,
  title,
  standfirst,
}: {
  eyebrow: string;
  title: string;
  standfirst?: string;
}) {
  return (
    <header className="mx-auto max-w-5xl px-6 pb-4 pt-20 sm:pt-24">
      <p className="font-sans text-[0.68rem] uppercase tracking-[0.3em] text-gold">
        {eyebrow}
      </p>
      <h1 className="mt-6 font-display text-[clamp(2.25rem,7vw,4.25rem)] leading-[1.02] tracking-[-0.015em] text-paper">
        {title}
      </h1>
      {standfirst && (
        <p className="mt-8 max-w-reading font-sans text-[1.02rem] leading-relaxed text-graphite">
          {standfirst}
        </p>
      )}
      <div className="rule mt-14" />
    </header>
  );
}
