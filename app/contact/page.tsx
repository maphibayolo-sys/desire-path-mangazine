import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { LINKEDIN_URL, CONTACT_EMAIL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch about Desire Path: research, publishing, speaking, collaborations, print editions or related work.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Contact"
        standfirst="For conversations about Desire Path, research, publishing, speaking, collaborations, print editions or related work, get in touch."
      />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 sm:gap-16">
          <div>
            <h2 className="font-sans text-[0.68rem] uppercase tracking-[0.22em] text-gold">
              LinkedIn
            </h2>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block font-display text-lg text-paper underline decoration-gold/40 underline-offset-[6px] transition-colors hover:decoration-gold"
            >
              Connect with Maphi on LinkedIn ↗
            </a>
            <p className="mt-4 max-w-sm font-sans text-[0.92rem] leading-relaxed text-graphite">
              Where Desire Path was first published, week by week.
            </p>
          </div>

          <div>
            <h2 className="font-sans text-[0.68rem] uppercase tracking-[0.22em] text-gold">
              Email
            </h2>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-5 inline-block font-display text-lg text-paper underline decoration-gold/40 underline-offset-[6px] transition-colors hover:decoration-gold"
            >
              Send an Email ↗
            </a>
            <p className="mt-4 max-w-sm font-sans text-[0.92rem] leading-relaxed text-graphite">
              Better for anything with detail attached.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
