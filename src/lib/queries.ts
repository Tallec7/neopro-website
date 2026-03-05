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

/** Médias d'une page (vidéos, images) par slug */
export const pageMediaQuery = `*[_type == "pageMedia" && pageSlug == $slug][0]{
  "heroVideoUrl": heroVideo.asset->url,
  "heroImageUrl": heroImage.asset->url,
  "heroImageAlt": heroImage.alt,
  "mainImageUrl": mainImage.asset->url,
  "mainImageAlt": mainImage.alt
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
  hero { line1, line2, line3, ctaLabel, ctaHref },
  welcome { titleItalic, titleBold, description },
  regie { title, subtitle, ctaLabel, ctaHref },
  offres { title, subtitle, ctaLabel, ctaHref }
}`;

/** Page Solution (singleton) */
export const solutionPageQuery = `*[_type == "solutionPage"][0]{
  seoTitle,
  seoDescription,
  hero { label, titleItalic, titleBold, ctaLabel, ctaHref },
  panelsLabel,
  howItWorks { label, steps[] { number, title, description } },
  colorPanelsTitle,
  ctaOffres { title, subtitle, ctaLabel, ctaHref }
}`;

/** Page Offres (singleton) */
export const offresPageQuery = `*[_type == "offresPage"][0]{
  seoTitle,
  seoDescription,
  hero { label, titleItalic, titleBold, ctaLabel, ctaHref },
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
  aboutParagraphs,
  faqTitle
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
  answer,
  bullets,
  answerAfterBullets
}`;

/** Section Finançable depuis siteSettings */
export const financableQuery = `*[_type == "siteSettings"][0]{
  financable {
    title,
    description,
    emailPlaceholder,
    buttonLabel
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
