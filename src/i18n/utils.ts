import { ui, defaultLocale, type Locale, type TranslationKey } from './ui';

/**
 * Get the locale from a URL pathname.
 * /en/solution → 'en'
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
 * Get the alternate locale.
 */
export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'fr' ? 'en' : 'fr';
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
const routeMap: Record<string, Record<Locale, string>> = {
  'qui-sommes-nous': { fr: '/qui-sommes-nous', en: '/about' },
  'about': { fr: '/qui-sommes-nous', en: '/about' },
};

/**
 * Get the switch URL for alternating between locales,
 * handling pages with different slugs.
 */
export function getSwitchUrl(pathname: string, currentLocale: Locale): string {
  const altLocale = getAlternateLocale(currentLocale);
  const pathWithoutLocale = getPathWithoutLocale(pathname);

  // Check if this path needs slug translation
  const cleanSlug = pathWithoutLocale.replace(/^\/|\/$/g, '').split('/')[0];
  const mapped = routeMap[cleanSlug];
  if (mapped) {
    return localePath(mapped[altLocale], altLocale);
  }

  return localePath(pathWithoutLocale, altLocale);
}
