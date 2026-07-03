import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// CONTENT-TODO: replace with the real domain before launch
export default defineConfig({
  site: 'https://example.com',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
