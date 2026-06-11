import type { APIRoute } from 'astro';

const SITE = 'https://madxp.kalonpartners.bzh';

// Images principales du site avec leurs pages et descriptions
const imageEntries = [
  {
    page: '/',
    images: [
      { loc: '/og-default.jpg', title: 'MADXP — Régie sport digitale pour clubs' },
    ],
  },
  {
    page: '/regie-sport',
    images: [
      { loc: '/og-default.jpg', title: 'Régie sport digitale MADXP — écrans et régie clé en main pour clubs' },
    ],
  },
  {
    page: '/solution',
    images: [
      { loc: '/_astro/hero-solution', title: 'Joueurs de handball devant un écran digital MADXP' },
    ],
  },
  {
    page: '/offres',
    images: [
      { loc: '/_astro/hero-offres', title: 'Gymnase équipé d\'un écran digital MADXP avec les offres partenaires' },
    ],
  },
  {
    page: '/qui-sommes-nous',
    images: [
      { loc: '/_astro/qui-sommes-nous', title: 'L\'équipe MADXP lors d\'une installation dans un gymnase' },
    ],
  },
];

export const prerender = true;

export const GET: APIRoute = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${imageEntries
  .map(
    (entry) => `  <url>
    <loc>${SITE}${entry.page}</loc>
${entry.images
  .map(
    (img) => `    <image:image>
      <image:loc>${SITE}${img.loc}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
    </image:image>`,
  )
  .join('\n')}
  </url>`,
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
