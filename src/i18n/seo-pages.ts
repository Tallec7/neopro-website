import { seoPagesP1 } from './seo-pages-part1';
import { seoPagesP2 } from './seo-pages-part2';
import { seoPagesP3 } from './seo-pages-part3';
import { seoPagesPivotsIt } from './seo-pages-pivots-it';
import { seoPagesPivotsPl } from './seo-pages-pivots-pl';
import { seoPagesPivotsNl } from './seo-pages-pivots-nl';

// Locali IT/PL/NL/PT : per le 2 pagine pivot (seo_tableau + seo_ecran) usiamo
// traduzioni native; per le altre 4 pagine SEO, fallback FR temporaneo
// (da sostituire con traduzioni native in iterazioni successive).
export const seoPages = {
  fr: {
    ...seoPagesP1.fr,
  } as const,
  en: {
    ...seoPagesP1.en,
  } as const,
  es: {
    ...seoPagesP2.es,
  } as const,
  de: {
    ...seoPagesP2.de,
  } as const,
  da: {
    ...seoPagesP3.da,
  } as const,
  it: {
    ...seoPagesP1.fr,
    ...seoPagesPivotsIt,
  } as const,
  pl: {
    ...seoPagesP1.fr,
    ...seoPagesPivotsPl,
  } as const,
  nl: {
    ...seoPagesP1.fr,
    ...seoPagesPivotsNl,
  } as const,
  pt: {
    ...seoPagesP1.fr,
  } as const,
};
