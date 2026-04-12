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
    '@type': ['LocalBusiness', 'Organization'],
    name: options.name,
    alternateName: 'Neopro Communication',
    description: options.description,
    slogan: 'La régie sport digitale pour clubs',
    email: options.email,
    url: options.url,
    knowsAbout: [
      'régie sport',
      'régie digitale',
      'écran LED gymnase',
      'sponsoring sportif',
      'digital signage sport',
      'affichage dynamique sport',
      'animation match',
      'expérience match-day',
      'affichage dynamique gymnase',
      'publicité sport amateur',
      'DOOH sport',
    ],
    foundingDate: '2025',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 2 },
    priceRange: '€€',
  };

  if (options.phone) {
    schema.telephone = options.phone;
  }

  if (options.address) {
    schema.address = {
      '@type': 'PostalAddress',
      addressLocality: 'Nantes',
      addressRegion: 'Pays de la Loire',
      postalCode: '44000',
      addressCountry: 'FR',
    };
  }

  schema.geo = {
    '@type': 'GeoCoordinates',
    latitude: 47.2184,
    longitude: -1.5536,
  };

  schema.areaServed = {
    '@type': 'Country',
    name: 'France',
  };

  if (options.sameAs && options.sameAs.length > 0) {
    schema.sameAs = options.sameAs;
  }

  schema.logo = {
    '@type': 'ImageObject',
    url: `${options.url}/NeoPro_Core_Assets_Logo_NShape_Stacked_BLK.png`,
    width: 567,
    height: 567,
  };

  if (options.image) {
    schema.image = options.image;
  }

  return JSON.stringify(schema);
}

interface WebSiteOptions {
  name: string;
  alternateName?: string;
  url: string;
}

/**
 * Génère le JSON-LD WebSite pour permettre à Google d'afficher
 * le nom du site (plutôt que le domaine) dans les SERP.
 * Voir : https://developers.google.com/search/docs/appearance/site-names
 */
export function buildWebSiteJsonLd(options: WebSiteOptions): string {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: options.name,
    url: options.url,
  };

  if (options.alternateName) {
    schema.alternateName = options.alternateName;
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

// ── Article Schema ───────────────────────────────────────────────

interface ArticleOptions {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  author: string;
  image?: string;
}

export function buildArticleJsonLd(options: ArticleOptions): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: options.title,
    description: options.description,
    url: options.url,
    datePublished: options.datePublished,
    author: {
      '@type': 'Organization',
      name: options.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Neopro',
      url: 'https://www.neopro-communication.fr',
    },
    ...(options.image && { image: options.image }),
  });
}

// ── BreadcrumbList Schema ────────────────────────────────────────

interface BreadcrumbItem {
  name: string;
  url: string;
}

// ── Service Schema (régie sport) ──────────────────────────────────

interface ServiceOptions {
  name: string;
  description: string;
  url: string;
  providerName: string;
  providerUrl: string;
  areaServed?: string[];
  serviceType?: string;
}

/**
 * Génère le JSON-LD Service pour renforcer la sémantique
 * d'une page de service (ex: /regie-sport).
 */
export function buildServiceJsonLd(options: ServiceOptions): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: options.name,
    description: options.description,
    url: options.url,
    serviceType: options.serviceType || 'Régie sport digitale',
    category: 'Sports digital signage',
    provider: {
      '@type': 'Organization',
      name: options.providerName,
      url: options.providerUrl,
    },
    areaServed: (options.areaServed || ['France', 'Belgique', 'Suisse']).map((name) => ({
      '@type': 'Country',
      name,
    })),
    audience: {
      '@type': 'Audience',
      audienceType: 'Clubs de sport (professionnels, semi-professionnels et amateurs)',
    },
  });
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
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
    '@type': 'SoftwareApplication',
    name: `${businessName} — Régie sport digitale`,
    description:
      'La régie sport digitale clé en main pour clubs. Écrans LED, scoring digital, contenus vidéo et valorisation partenaires — du club pro au club régional.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
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
