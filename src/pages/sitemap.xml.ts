import type { APIRoute } from 'astro';
import { PUBLIC_PAGES, SITE_URL } from '../data/seo';
export const GET: APIRoute = () => {
  const urls = PUBLIC_PAGES.map((path) => `  <url><loc>${new URL(path, SITE_URL).toString()}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
