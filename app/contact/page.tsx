import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-lg px-6 pt-40 pb-20">
      <p className="font-mono text-[9px] tracking-[0.4em] text-gold">SEND A RAVEN</p>
      <h1 className="mt-4 font-display text-4xl text-gold-bright md:text-5xl">Contact</h1>
      <p className="mt-6 leading-relaxed text-mist">For print edition enquiries, collaborations, speaking, research or simply to share a desire path you have noticed in the wild.</p>
      <div className="mt-10 font-mono text-[10px] tracking-[0.15em]">
        <p><span className="text-gold-dim">LINKEDIN </span><a className="text-gold-bright underline underline-offset-4" href="https://www.linkedin.com/in/maphi-b-22a23b155" target="_blank" rel="me noopener">MAPHI BAYOLO</a></p>
      </div>
    </div>
  );
}
