import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// CONTENT-TODO: replace with a custom domain once one is bought
export default defineConfig({
  site: 'https://niklaslustig.netlify.app',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
