// ── Schema.org JSON-LD pour le SEO ─────────────────────────────────

interface LocalBusinessOptions {
  name: string;
  description: string;
  email: string;
  url: string;
  phone?: string;
  address?: string;
  sameAs?: string[];
  image?: string;
}

/**
 * Génère le JSON-LD LocalBusiness pour le site.
 * Injecté dans le <head> de chaque page via BaseLayout.
 */
export function buildLocalBusinessJsonLd(options: LocalBusinessOptions): string {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: options.name,
    description: options.description,
    email: options.email,
    url: options.url,
  };

  if (options.phone) {
    schema.telephone = options.phone;
  }

  if (options.address) {
    schema.address = {
      '@type': 'PostalAddress',
      streetAddress: options.address,
    };
  }

  if (options.sameAs && options.sameAs.length > 0) {
    schema.sameAs = options.sameAs;
  }

  if (options.image) {
    schema.image = options.image;
  }

  return JSON.stringify(schema);
}

interface WebPageOptions {
  name: string;
  description: string;
  url: string;
}

/**
 * Génère le JSON-LD WebPage pour une page spécifique.
 */
export function buildWebPageJsonLd(options: WebPageOptions): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: options.name,
    description: options.description,
    url: options.url,
  });
}
