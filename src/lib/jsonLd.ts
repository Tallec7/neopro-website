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

// ── FAQPage Schema ────────────────────────────────────────────────

interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Génère le JSON-LD FAQPage pour les questions fréquentes.
 * Permet d'obtenir des rich snippets FAQ dans les SERP Google.
 */
export function buildFAQPageJsonLd(items: FAQItem[]): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  });
}

// ── Offer Schema ──────────────────────────────────────────────────

interface OfferOptions {
  name: string;
  description: string;
  price: number;
  priceCurrency?: string;
  url: string;
}

/**
 * Génère le JSON-LD AggregateOffer pour la page offres.
 * Permet d'afficher les prix dans les SERP Google.
 */
export function buildAggregateOfferJsonLd(
  offers: OfferOptions[],
  businessName: string,
  url: string,
): string {
  const prices = offers.map((o) => o.price);
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${businessName} — Régie digitale`,
    description:
      'Solution de régie digitale pour clubs de sport amateurs. Écrans LED, scoring digital, valorisation partenaires.',
    brand: {
      '@type': 'Brand',
      name: businessName,
    },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: Math.min(...prices),
      highPrice: Math.max(...prices),
      priceCurrency: 'EUR',
      offerCount: offers.length,
      offers: offers.map((o) => ({
        '@type': 'Offer',
        name: o.name,
        description: o.description,
        price: o.price,
        priceCurrency: o.priceCurrency || 'EUR',
        url: o.url,
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: o.price,
          priceCurrency: o.priceCurrency || 'EUR',
          unitText: 'YEAR',
        },
      })),
    },
  });
}
