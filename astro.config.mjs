import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Drives canonical URLs, the sitemap and the absolute og:image URL, so it has
  // to match the domain visitors actually land on.
  site: 'https://niklaslustig.de',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
