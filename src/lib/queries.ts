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

/** Offres de pricing triées par ordre */
export const pricingPlansQuery = `*[_type == "pricingPlan"] | order(order asc) {
  _id,
  name,
  "slug": slug.current,
  taxType,
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
  "videoUrl": video.asset->url,
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

// ── Requêtes pages éditables ────────────────────────────────────────

/** Page d'accueil (singleton) */
export const homePageQuery = `*[_type == "homePage"][0]{
  seoTitle,
  seoDescription,
  hero { line1, line2, line3, ctaLabel, ctaHref, "imageUrl": image.asset->url, "imageAlt": image.alt },
  welcome { titleItalic, titleBold, description, "videoUrl": video.asset->url },
  regie { title, subtitle, ctaLabel, ctaHref, "imageUrl": image.asset->url, "imageAlt": image.alt },
  offres { title, subtitle, ctaLabel, ctaHref, "imageUrl": image.asset->url, "imageAlt": image.alt }
}`;

/** Page Solution (singleton) */
export const solutionPageQuery = `*[_type == "solutionPage"][0]{
  seoTitle,
  seoDescription,
  hero { label, titleItalic, titleBold, ctaLabel, ctaHref, "imageUrl": image.asset->url, "imageAlt": image.alt },
  panelsLabel,
  howItWorks { label, steps[] { number, title, description } },
  colorPanelsTitle,
  ctaOffres { title, subtitle, ctaLabel, ctaHref, "imageUrl": image.asset->url, "imageAlt": image.alt }
}`;

/** Page Offres (singleton) */
export const offresPageQuery = `*[_type == "offresPage"][0]{
  seoTitle,
  seoDescription,
  hero { label, titleItalic, titleBold, ctaLabel, ctaHref, "imageUrl": image.asset->url, "imageAlt": image.alt },
  plansTitle,
  popularBadge,
  chooseCta,
  engagementNote,
  videoSection { title, description, popularBadge }
}`;

/** Page Qui sommes-nous (singleton) */
export const aboutPageQuery = `*[_type == "aboutPage"][0]{
  seoTitle,
  seoDescription,
  hero { repeatedWord, overlayLine1, overlayLine2 },
  aboutTitle,
  aboutBody,
  faqTitle,
  "mainImageUrl": mainImage.asset->url,
  "mainImageAlt": mainImage.alt
}`;

/** Page Devis (singleton) */
export const devisPageQuery = `*[_type == "devisPage"][0]{
  seoTitle,
  seoDescription
}`;

/** Questions FAQ triées par ordre */
export const faqItemsQuery = `*[_type == "faqItem"] | order(order asc) {
  _id,
  question,
  body
}`;

/** Section Finançable depuis siteSettings */
export const financableQuery = `*[_type == "siteSettings"][0]{
  financable {
    title,
    description,
    emailPlaceholder,
    buttonLabel,
    "documentPdfUrl": documentPdf.asset->url
  }
}`;

/** Membres de l'équipe triés par ordre */
export const teamMembersQuery = `*[_type == "teamMember"] | order(order asc) {
  _id,
  name,
  role,
  "photoUrl": photo.asset->url,
  "photoAlt": photo.alt,
  bio
}`;
