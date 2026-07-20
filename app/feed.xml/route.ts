import { getAllArticles } from '@/lib/articles';
const SITE = 'https://desirepath.example.com';
export function GET() {
  const items = getAllArticles().map(a => `<item><title><![CDATA[${a.title}]]></title><link>${SITE}/articles/${a.slug}</link><guid>${SITE}/articles/${a.slug}</guid><pubDate>${new Date(a.date).toUTCString()}</pubDate><description><![CDATA[${a.excerpt}]]></description></item>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Desire Path: Follow the Clicks</title><link>${SITE}</link><language>en-gb</language>${items}</channel></rss>`, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
