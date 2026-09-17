import type { APIRoute } from 'astro';
import { PRELAUNCH } from '../data/site';

// Generated rather than static so PRELAUNCH controls the meta tag and this file
// from one switch — two places to remember would be one place to forget.
export const GET: APIRoute = ({ site }) => {
  const body = PRELAUNCH
    ? `User-agent: *\nDisallow: /\n`
    : `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
