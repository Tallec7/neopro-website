import { seoPagesP1 } from './seo-pages-part1';
import { seoPagesP2 } from './seo-pages-part2';
import { seoPagesP3 } from './seo-pages-part3';

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
};
