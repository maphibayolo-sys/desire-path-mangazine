import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const DIR = path.join(process.cwd(), 'content', 'articles');

export type ArticleMeta = {
  slug: string; number: number; title: string; excerpt: string;
  world: string; date: string; pages: string; art?: string; readingMinutes: number;
};
export type Article = ArticleMeta & { content: string };

function mins(t: string) { return Math.max(2, Math.round(t.split(/\s+/).length / 220)); }

export function getAllArticles(): ArticleMeta[] {
  return fs.readdirSync(DIR).filter(f => f.endsWith('.mdx')).map(file => {
    const slug = file.replace(/\.mdx$/, '');
    const { data, content } = matter(fs.readFileSync(path.join(DIR, file), 'utf8'));
    return { slug, number: data.number, title: data.title, excerpt: data.excerpt, world: data.world, date: data.date, pages: data.pages, art: data.art, readingMinutes: mins(content) };
  }).sort((a, b) => a.number - b.number);
}

export function getArticle(slug: string): Article | null {
  const file = path.join(DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, 'utf8'));
  return { slug, number: data.number, title: data.title, excerpt: data.excerpt, world: data.world, date: data.date, pages: data.pages, art: data.art, readingMinutes: mins(content), content };
}

export function getAdjacent(slug: string) {
  const all = getAllArticles();
  const i = all.findIndex(a => a.slug === slug);
  return { prev: i > 0 ? all[i-1] : null, next: i < all.length-1 ? all[i+1] : null };
}

export const WORLDS = ['AI','Work','Governance','Leadership','Technology','Systems Thinking','Behaviour'] as const;
