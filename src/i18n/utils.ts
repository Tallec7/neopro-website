import { ui, defaultLocale, languages, type Locale, type TranslationKey } from './ui';

/**
 * Get the locale from a URL pathname.
 * /en/solution → 'en'
 * /es/solution → 'es'
 * /solution    → 'fr'
 */
export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Locale;
  return defaultLocale;
}

/**
 * Return a translation function for the given locale.
 */
export function useTranslations(locale: Locale) {
  return function t(key: TranslationKey): string {
    return ui[locale][key] ?? ui[defaultLocale][key] ?? key;
  };
}

/**
 * Prefix a path with the locale (skip prefix for default locale).
 * localePath('/solution', 'en') → '/en/solution'
 * localePath('/solution', 'fr') → '/solution'
 */
export function localePath(path: string, locale: Locale): string {
  if (locale === defaultLocale) return path;
  return `/${locale}${path}`;
}

/**
 * Get all other locales (excluding the current one).
 */
export function getOtherLocales(locale: Locale): Locale[] {
  return (Object.keys(languages) as Locale[]).filter((l) => l !== locale);
}

/**
 * Get the path without the locale prefix.
 */
export function getPathWithoutLocale(pathname: string): string {
  const [, maybeLang, ...rest] = pathname.split('/');
  if (maybeLang in ui) return '/' + rest.join('/');
  return pathname;
}

/**
 * Route mapping for pages with different slugs between locales.
 */
const aboutRoute = { fr: '/qui-sommes-nous', en: '/about', es: '/sobre-nosotros', de: '/ueber-uns', da: '/om-os' };
const annonceurRoute = { fr: '/annonceurs', en: '/advertisers', es: '/anunciantes', de: '/werbetreibende', da: '/annoncorer' };
const offresRoute = { fr: '/offres', en: '/pricing', es: '/precios', de: '/angebote', da: '/priser' };
const devisRoute = { fr: '/devis', en: '/quote', es: '/presupuesto', de: '/angebot', da: '/tilbud' };
const regieRoute = { fr: '/regie-sport', en: '/sports-signage', es: '/produccion-deportiva', de: '/sport-regie', da: '/sport-regi' };

// ── Sport pages ─────────────────────────────────────────────────
const basketballRoute = { fr: '/basketball', en: '/basketball', es: '/baloncesto', de: '/basketball', da: '/basketball' };
const handballRoute = { fr: '/handball', en: '/handball', es: '/balonmano', de: '/handball', da: '/haandbold' };
const volleyballRoute = { fr: '/volleyball', en: '/volleyball', es: '/voleibol', de: '/volleyball', da: '/volleyball' };
const futsalRoute = { fr: '/futsal', en: '/futsal', es: '/futsal', de: '/futsal', da: '/futsal' };
const badmintonRoute = { fr: '/badminton', en: '/badminton', es: '/badminton', de: '/badminton', da: '/badminton' };
const footballRoute = { fr: '/football', en: '/football', es: '/futbol', de: '/fussball', da: '/fodbold' };
const rugbyRoute = { fr: '/rugby', en: '/rugby', es: '/rugby', de: '/rugby', da: '/rugby' };
const hockeyGlaceRoute = { fr: '/hockey-sur-glace', en: '/ice-hockey', es: '/hockey-hielo', de: '/eishockey', da: '/ishockey' };
const rinkHockeyRoute = { fr: '/rink-hockey', en: '/rink-hockey', es: '/hockey-patines', de: '/rollhockey', da: '/rullehockey' };
const hockeyGazonRoute = { fr: '/hockey-sur-gazon', en: '/field-hockey', es: '/hockey-hierba', de: '/feldhockey', da: '/landhockey' };

// ── SEO pages ───────────────────────────────────────────────────
const tableauAffichageRoute = { fr: '/tableau-affichage-sportif', en: '/sports-scoreboard', es: '/marcador-deportivo', de: '/sport-anzeigetafel', da: '/sport-resultattavle' };
const tableauScoreRoute = { fr: '/tableau-de-score-electronique', en: '/electronic-scoreboard', es: '/marcador-electronico', de: '/elektronische-anzeigetafel', da: '/elektronisk-resultattavle' };
const ecranLedRoute = { fr: '/ecran-led-gymnase', en: '/gymnasium-led-screen', es: '/pantalla-led-gimnasio', de: '/led-bildschirm-sporthalle', da: '/led-skaerm-gymnastiksalen' };
const affichageDynamiqueRoute = { fr: '/affichage-dynamique-salle-sport', en: '/digital-signage-sports-venue', es: '/senalizacion-digital-deportiva', de: '/digitale-beschilderung-sporthalle', da: '/digital-skiltning-sportshal' };
const scoringDigitalRoute = { fr: '/scoring-digital', en: '/digital-scoring', es: '/marcador-digital', de: '/digitales-scoring', da: '/digital-scoring' };
const comparatifRoute = { fr: '/comparatif-tableau-affichage-sportif', en: '/sports-scoreboard-comparison', es: '/comparativa-marcador-deportivo', de: '/vergleich-sport-anzeigetafel', da: '/sammenligning-sport-resultattavle' };

const routeMap: Record<string, Record<Locale, string>> = {
  'qui-sommes-nous': aboutRoute,
  'about': aboutRoute,
  'sobre-nosotros': aboutRoute,
  'ueber-uns': aboutRoute,
  'om-os': aboutRoute,
  'annonceurs': annonceurRoute,
  'advertisers': annonceurRoute,
  'anunciantes': annonceurRoute,
  'werbetreibende': annonceurRoute,
  'annoncorer': annonceurRoute,
  'offres': offresRoute,
  'pricing': offresRoute,
  'precios': offresRoute,
  'angebote': offresRoute,
  'priser': offresRoute,
  'devis': devisRoute,
  'demo': devisRoute,
  'quote': devisRoute,
  'presupuesto': devisRoute,
  'angebot': devisRoute,
  'tilbud': devisRoute,
  'regie-sport': regieRoute,
  'sports-signage': regieRoute,
  'produccion-deportiva': regieRoute,
  'sport-regie': regieRoute,
  'sport-regi': regieRoute,
  // Sport pages
  'basketball': basketballRoute,
  'baloncesto': basketballRoute,
  'handball': handballRoute,
  'balonmano': handballRoute,
  'haandbold': handballRoute,
  'volleyball': volleyballRoute,
  'voleibol': volleyballRoute,
  'futsal': futsalRoute,
  'badminton': badmintonRoute,
  'football': footballRoute,
  'futbol': footballRoute,
  'fussball': footballRoute,
  'fodbold': footballRoute,
  'rugby': rugbyRoute,
  'hockey-sur-glace': hockeyGlaceRoute,
  'ice-hockey': hockeyGlaceRoute,
  'hockey-hielo': hockeyGlaceRoute,
  'eishockey': hockeyGlaceRoute,
  'ishockey': hockeyGlaceRoute,
  'rink-hockey': rinkHockeyRoute,
  'hockey-patines': rinkHockeyRoute,
  'rollhockey': rinkHockeyRoute,
  'rullehockey': rinkHockeyRoute,
  'hockey-sur-gazon': hockeyGazonRoute,
  'field-hockey': hockeyGazonRoute,
  'hockey-hierba': hockeyGazonRoute,
  'feldhockey': hockeyGazonRoute,
  'landhockey': hockeyGazonRoute,
  // SEO pages
  'tableau-affichage-sportif': tableauAffichageRoute,
  'sports-scoreboard': tableauAffichageRoute,
  'marcador-deportivo': tableauAffichageRoute,
  'sport-anzeigetafel': tableauAffichageRoute,
  'sport-resultattavle': tableauAffichageRoute,
  'tableau-de-score-electronique': tableauScoreRoute,
  'electronic-scoreboard': tableauScoreRoute,
  'marcador-electronico': tableauScoreRoute,
  'elektronische-anzeigetafel': tableauScoreRoute,
  'elektronisk-resultattavle': tableauScoreRoute,
  'ecran-led-gymnase': ecranLedRoute,
  'gymnasium-led-screen': ecranLedRoute,
  'pantalla-led-gimnasio': ecranLedRoute,
  'led-bildschirm-sporthalle': ecranLedRoute,
  'led-skaerm-gymnastiksalen': ecranLedRoute,
  'affichage-dynamique-salle-sport': affichageDynamiqueRoute,
  'digital-signage-sports-venue': affichageDynamiqueRoute,
  'senalizacion-digital-deportiva': affichageDynamiqueRoute,
  'digitale-beschilderung-sporthalle': affichageDynamiqueRoute,
  'digital-skiltning-sportshal': affichageDynamiqueRoute,
  'scoring-digital': scoringDigitalRoute,
  'digital-scoring': scoringDigitalRoute,
  'marcador-digital': scoringDigitalRoute,
  'digitales-scoring': scoringDigitalRoute,
  'comparatif-tableau-affichage-sportif': comparatifRoute,
  'sports-scoreboard-comparison': comparatifRoute,
  'comparativa-marcador-deportivo': comparatifRoute,
  'vergleich-sport-anzeigetafel': comparatifRoute,
  'sammenligning-sport-resultattavle': comparatifRoute,
};

/**
 * Build a locale-aware path from a FR slug.
 * localeRoutePath('/annonceurs', 'en') → '/en/advertisers'
 */
export function localeRoutePath(frPath: string, locale: Locale): string {
  const slug = frPath.replace(/^\/|\/$/g, '').split('/')[0];
  const mapped = routeMap[slug];
  if (mapped) return localePath(mapped[locale], locale);
  return localePath(frPath, locale);
}

/**
 * Get the URL for a specific locale, handling slug translation.
 */
export function getLocaleUrl(pathname: string, currentLocale: Locale, targetLocale: Locale): string {
  const pathWithoutLocale = getPathWithoutLocale(pathname);
  const cleanSlug = pathWithoutLocale.replace(/^\/|\/$/g, '').split('/')[0];
  const mapped = routeMap[cleanSlug];
  if (mapped) {
    return localePath(mapped[targetLocale], targetLocale);
  }
  return localePath(pathWithoutLocale, targetLocale);
}

/**
 * Get all alternate URLs for hreflang tags.
 */
export function getAlternateUrls(pathname: string, currentLocale: Locale, siteUrl: string): { locale: Locale; url: string }[] {
  return (Object.keys(languages) as Locale[]).map((locale) => ({
    locale,
    url: new URL(getLocaleUrl(pathname, currentLocale, locale), siteUrl).href,
  }));
}
