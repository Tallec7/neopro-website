// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.neopro-communication.fr',
  output: 'static',
  adapter: vercel(),
  integrations: [
    react(),
    sitemap({
      i18n: { defaultLocale: 'fr', locales: { fr: 'fr-FR' } },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
