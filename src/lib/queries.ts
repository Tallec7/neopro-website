// ── Requêtes GROQ pour Sanity CMS ──────────────────────────────────

/** Paramètres globaux du site (nav, footer, socials) */
export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  siteName,
  email,
  phone,
  address,
  socialLinks {
    facebook,
    instagram,
    linkedin
  },
  navLinks[] {
    label,
    href
  },
  ctaPrimary {
    label,
    href
  },
  ctaSecondary {
    label,
    href
  },
  footerDescription,
  footerLinks[] {
    label,
    href
  }
}`;

/** Contenu d'une page par slug (hero + SEO) */
export const pageQuery = `*[_type == "page" && slug.current == $slug][0]{
  title,
  slug,
  hero {
    title,
    subtitle,
    "imageUrl": image.asset->url,
    "imageAlt": image.alt,
    ctaLabel,
    ctaHref
  },
  seo {
    metaTitle,
    metaDescription,
    "ogImageUrl": ogImage.asset->url
  }
}`;

/** Offres de pricing triées par ordre */
export const pricingPlansQuery = `*[_type == "pricingPlan"] | order(order asc) {
  _id,
  name,
  slug,
  priceAnnual,
  priceMonthly,
  popular,
  buttonVariant,
  features[]
}`;

/** Packages vidéo triés */
export const videoPackagesQuery = `*[_type == "videoPackage"] | order(order asc) {
  _id,
  name,
  price,
  priceExtra,
  description,
  popular,
  features[]
}`;

/** Témoignages clients */
export const testimonialsQuery = `*[_type == "testimonial"] | order(order asc) {
  _id,
  quote,
  clubName,
  division
}`;

/** Logos des clubs partenaires */
export const clubLogosQuery = `*[_type == "clubLogo"] | order(order asc) {
  _id,
  name,
  "logoUrl": logo.asset->url,
  "logoAlt": logo.alt
}`;

/** Panneaux sticky de la page Solution */
export const solutionPanelsQuery = `*[_type == "solutionPanel"] | order(order asc) {
  _id,
  title,
  description,
  "imageUrl": image.asset->url,
  "imageAlt": image.alt
}`;

/** Features de la page Solution */
export const solutionFeaturesQuery = `*[_type == "solutionFeature"] | order(order asc) {
  _id,
  title,
  description
}`;

/** Panneaux colorés de la page Solution */
export const colorPanelsQuery = `*[_type == "colorPanel"] | order(order asc) {
  _id,
  title,
  features[],
  bgColor
}`;
