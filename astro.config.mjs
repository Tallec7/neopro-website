// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://www.neopro-communication.fr',
  output: 'static',
  trailingSlash: 'always',
  adapter: node({ mode: 'standalone' }),
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-FR', en: 'en-US', es: 'es-ES', de: 'de-DE', da: 'da-DK' },
      },
      changefreq: 'weekly',
      lastmod: new Date(),
      serialize(item) {
        const url = new URL(item.url);
        const path = url.pathname;

        // Priorités (1.0 = max, 0.1 = min)
        if (path === '/' || /^\/(en|es|de|da)\/$/.test(path)) {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (/\/(offres|pricing|precios|angebote|priser)\/$/.test(path)) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        } else if (/\/(solution|regie-sport|sports-signage|sport-regie|produccion-deportiva|sport-regi)\/$/.test(path)) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        } else if (/^\/((en|es|de|da)\/)?(basketball|handball|haandbold|balonmano|volleyball|voleibol|football|futbol|fussball|fodbold|badminton|rugby|futsal|hockey|ice-hockey|eishockey|ishockey)/.test(path)) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else if (path.includes('/implantations/')) {
          // Pages implantations : priorité plus faible (crawl budget)
          item.priority = path.split('/').filter(Boolean).length >= 4 ? 0.5 : 0.6;
          item.changefreq = 'monthly';
        } else if (path.includes('/blog/')) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        } else if (/\/(mentions-legales|politique-de-confidentialite|404)\/$/.test(path)) {
          item.priority = 0.3;
          item.changefreq = 'yearly';
        } else {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        }

        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
