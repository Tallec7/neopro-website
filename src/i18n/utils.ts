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
