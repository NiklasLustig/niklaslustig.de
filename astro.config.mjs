import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Drives canonical URLs, the sitemap and the absolute og:image URL, so it has
  // to match the host that actually serves. Vercel redirects the apex to www
  // (308), so www is that host. If the apex is ever made primary in Vercel,
  // change this back — a canonical that redirects is the bug this avoids.
  site: 'https://www.niklaslustig.de',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
