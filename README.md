# Desire Path

An IT, Tech & Business Mangazine. A single-page site that introduces the
publication, tells the story of how it came about, and sends readers to
Volume One on Zenodo.

The website is the home and identity of the publication.
Zenodo is the archive and reading destination. The site does not duplicate it.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Configuration

Everything reads from `lib/site.ts`, including the DOI, LinkedIn URL and
contact email. Volume One is live:

```ts
export const VOLUME_ONE_DOI = '10.5281/zenodo.21455630';
```

`VOLUME_ONE_URL` resolves through `https://doi.org/`, which is the persistent
route to the Zenodo record, so it will keep working even if Zenodo changes
its record URLs.

The only value still to change is `SITE_URL` (currently
`desirepath.example.com`) once the domain is live.

## Source of truth

All copy about Desire Path's history, origin, creative process, disclosure
philosophy and terminology is derived from Desire Path Mangazine Volume 1:
the cover, the Editor's Welcome (p.2), What Is a Desire Path? (pp.5-6),
The Disclosure of It All (pp.23-24) and Disclosure: The Desire Path Method
(pp.25-26).

The documented method has NINE stages. Do not add a tenth.

Set them once and the hero button, Volume One button, DOI line and footer
link all update together.

Already set from the existing project source:
`LINKEDIN_URL`, `CONTACT_EMAIL` (maphi.bayolo@gmail.com — change if you prefer
another address), and `SITE_URL` (replace `desirepath.example.com` with your
real domain).

## Structure

Six pages:

| Route | Purpose |
|---|---|
| `/` | Hero, what a mangazine is, from LinkedIn to publication, audience, onward links |
| `/volume-one` | The edition, cover, facts, and the Zenodo link |
| `/process` | How Desire Path is made, in ten stages |
| `/disclosure` | Disclosure as editorial philosophy, including who did what |
| `/about` | Maphi Bayolo, and where the name comes from |
| `/contact` | LinkedIn and email |

Shared `Nav`, `Footer` and `PageHeader` components keep the pages consistent.
Adding a page means one file in `app/` plus one line in `components/Nav.tsx`
and `app/sitemap.ts`.

## Assets

`public/art/volume-one-cover.png` — the Volume One cover, extracted from
page one of the print-ready PDF.
`public/art/heroine.png` — kept for future use; not currently referenced.

The 52 MB Volume One PDF was removed from the repo: Zenodo hosts the file,
and shipping a duplicate would bloat every deploy. Re-add it to
`public/downloads/` if you ever want a direct download.

## Stack

Next.js 15 (App Router), React 19, Tailwind. No CMS, no MDX, no content
pipeline. Fonts: Fraunces (display) and Inter (body), self-hosted at build
via next/font.
