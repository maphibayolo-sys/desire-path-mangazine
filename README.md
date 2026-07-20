# DESIRE PATH: Follow the Clicks

The digital home of Desire Path Mangazine. An editorial publication exploring
work, technology, AI, governance and modern life through systems thinking,
storytelling and manga-inspired illustration.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Content

Articles live in `content/articles/*.mdx`. Drop a new file and it appears
everywhere: homepage, archive, RSS, sitemap, prev/next navigation.

Frontmatter fields: `number`, `title`, `excerpt`, `world`, `date`, `pages`, `art` (optional path to artwork in /public/art/).

## Artwork

Drop illustrations into `public/art/`. The homepage hero uses `heroine.png`.
Article art is referenced via the `art` frontmatter field.

## Downloads

The Volume One PDF lives at `public/downloads/Desire_Path_Mangazine_Volume_1.pdf`
and is linked from the Volume One page.

## Before going live

Search and replace `desirepath.example.com` with your real domain.

## Design

Navy #0C1226. Gold #D0AC5C. Parchment #F0E3C8. Mist #9AA3C4.
Display + body: Georgia. Utility: monospace.
No cards, no borders, no dashboard elements.
Editorial magazine layout. Artwork is the hero. Interface disappears.
