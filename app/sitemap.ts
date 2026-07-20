import type { MetadataRoute } from 'next';
import { getAllArticles } from '@/lib/articles';
const SITE = 'https://desirepath.example.com';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...['','/volume-one','/archive','/method','/about','/contact'].map(p => ({ url: `${SITE}${p}`, changeFrequency: 'monthly' as const })),
    ...getAllArticles().map(a => ({ url: `${SITE}/articles/${a.slug}`, lastModified: a.date, changeFrequency: 'yearly' as const })),
  ];
}
