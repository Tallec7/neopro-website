#!/usr/bin/env node
/**
 * Script de seed — Remplit Sanity avec le contenu initial du site MADXP.
 *
 * Usage : node seed.mjs
 *
 * Note : les images (héros, logos clubs, panneaux) doivent être ajoutées
 * manuellement via Sanity Studio (neopro.sanity.studio).
 */

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '2r4zw7v3',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN, // Nécessite un token write
});

// ── Helper ─────────────────────────────────────────────────────────
async function createDoc(doc) {
  try {
    const result = await client.createOrReplace(doc);
    console.log(`✓ ${result._type} → ${result._id}`);
    return result;
  } catch (err) {
    console.error(`✗ ${doc._type} (${doc._id}):`, err.message);
  }
}

// ── 1. Site Settings ───────────────────────────────────────────────
await createDoc({
  _id: 'siteSettings',
  _type: 'siteSettings',
  siteName: 'MADXP',
  email: 'contact@kalonpartners.bzh',
  phone: '',
  address: 'Nantes, France',
  socialLinks: {
    facebook: 'https://facebook.com/neopro',
    instagram: 'https://instagram.com/neopro',
    linkedin: 'https://linkedin.com/company/neopro',
  },
  navLinks: [
    { _key: 'nav1', label: 'La solution', href: '/solution' },
    { _key: 'nav2', label: 'Les offres', href: '/offres' },
    { _key: 'nav3', label: 'Qui sommes-nous ?', href: '/qui-sommes-nous' },
  ],
  ctaPrimary: { label: 'Obtenez un devis', href: '/devis' },
  ctaSecondary: { label: 'Planifier une demo', href: '#contact' },
  footerDescription: 'MADXP — Regie digitale pour clubs de sport amateurs.',
  footerLinks: [
    { _key: 'foot1', label: 'La solution', href: '/solution' },
    { _key: 'foot2', label: 'Les offres', href: '/offres' },
    { _key: 'foot3', label: 'Qui sommes-nous ?', href: '/qui-sommes-nous' },
  ],
});

// ── 2. Pages ───────────────────────────────────────────────────────
const pages = [
  {
    _id: 'page-accueil',
    slug: { _type: 'slug', current: 'accueil' },
    title: 'Accueil',
    hero: {
      title: "On fait de votre ecran, un media interactif. Tel un club pro.",
      subtitle: '',
      ctaLabel: 'Decouvrez la solution',
      ctaHref: '/solution',
    },
    seo: {
      metaTitle: 'MADXP — Regie digitale pour clubs de sport amateurs',
      metaDescription:
        "MADXP transforme l'ecran de votre club en un media interactif professionnel. Spots partenaires, animations de match, pilotage depuis un smartphone.",
    },
  },
  {
    _id: 'page-solution',
    slug: { _type: 'slug', current: 'solution' },
    title: 'La solution',
    hero: {
      title: 'La regie digitale de votre club',
      subtitle: '',
      ctaLabel: '',
      ctaHref: '',
    },
    seo: {
      metaTitle: 'La solution de regie digitale — MADXP',
      metaDescription:
        'Decouvrez la solution MADXP : regie digitale cle en main pour clubs amateurs. Sans wifi, sans fil, pilotable depuis un smartphone.',
    },
  },
  {
    _id: 'page-offres',
    slug: { _type: 'slug', current: 'offres' },
    title: 'Les offres',
    hero: {
      title: 'Adaptees a vos besoins',
      subtitle: 'Les offres',
      ctaLabel: '',
      ctaHref: '',
    },
    seo: {
      metaTitle: 'Les offres — MADXP',
      metaDescription:
        'Decouvrez les offres MADXP : Standard, Autonomie, Premium. Des solutions de regie digitale financables par vos partenaires.',
    },
  },
  {
    _id: 'page-devis',
    slug: { _type: 'slug', current: 'devis' },
    title: 'Devis',
    hero: { title: '', subtitle: '', ctaLabel: '', ctaHref: '' },
    seo: {
      metaTitle: 'Obtenez votre devis — MADXP',
      metaDescription:
        'Obtenez une estimation personnalisee pour votre solution de regie digitale MADXP. Standard, Autonomie ou Premium.',
    },
  },
  {
    _id: 'page-qui-sommes-nous',
    slug: { _type: 'slug', current: 'qui-sommes-nous' },
    title: 'Qui sommes-nous ?',
    hero: {
      title: 'Qui sommes-nous ?',
      subtitle: '',
      ctaLabel: '',
      ctaHref: '',
    },
    seo: {
      metaTitle: 'Qui sommes-nous ? — MADXP',
      metaDescription:
        'Decouvrez l\'equipe derriere MADXP, la solution de regie digitale pour clubs de sport amateurs.',
    },
  },
];

for (const page of pages) {
  await createDoc({ ...page, _type: 'page' });
}

// ── 3. Pricing Plans ───────────────────────────────────────────────
const plans = [
  {
    _id: 'plan-standard',
    name: 'Standard',
    slug: 'standard',
    priceAnnual: '1 500',
    priceMonthly: '190',
    popular: false,
    buttonVariant: 'yellow',
    features: [
      'Mise a jour de videos',
      'Support 72h',
      '1 seule boucle par defaut',
      'Sponsors illimites',
      'Rotation aleatoire des partenaires',
      'Rapport de diffusion basique',
    ],
    order: 1,
  },
  {
    _id: 'plan-autonomie',
    name: 'Autonomie',
    slug: 'autonomie',
    priceAnnual: '2 100',
    priceMonthly: '250',
    popular: true,
    buttonVariant: 'green',
    features: [
      'Acces admin club (pour ajouter des visuels/videos de votre cote)',
      'Mise a jour de videos',
      'Support 48h',
      '2 boucles par defaut (ex : break / match)',
      'Sponsors illimites',
      'Rotation aleatoire des partenaires',
      'Rapport de diffusion basique',
    ],
    order: 2,
  },
  {
    _id: 'plan-premium',
    name: 'Premium',
    slug: 'premium',
    priceAnnual: '3 000',
    priceMonthly: '350',
    popular: false,
    buttonVariant: 'pink',
    features: [
      'Acces admin club',
      'Mise a jour de videos',
      'Support 24h',
      'Nombre de boucles par defaut illimite',
      'Integration score',
      'Sponsors illimites',
      'Rotation controlee des partenaires',
      'Rapport de diffusion premium',
    ],
    order: 3,
  },
];

for (const plan of plans) {
  await createDoc({ ...plan, _type: 'pricingPlan' });
}

// ── 4. Video Packages ──────────────────────────────────────────────
const videoPkgs = [
  {
    _id: 'vidpkg-classique',
    name: 'Classique',
    price: null,
    priceExtra: null,
    description: 'Inclus par defaut dans toutes les offres',
    popular: false,
    features: [
      'Video Boucle partenaires',
      'Video Message partenaire premium',
      'Video Annonce message club',
      'Video Annonce fait de jeu',
    ],
    order: 1,
  },
  {
    _id: 'vidpkg-sans-shooting',
    name: 'Sans shooting',
    price: '500',
    priceExtra: '250',
    description: "On integre vos photos a nos templates d'annonce de joueurs.",
    popular: true,
    features: [
      'Package Classique',
      'Videos Annonce de joueurs (avec photo uniquement)',
    ],
    order: 2,
  },
  {
    _id: 'vidpkg-avec-shooting',
    name: 'Avec shooting',
    price: '1 000',
    priceExtra: '500',
    description: 'On shoote vos joueurs et on les integre a nos templates.',
    popular: false,
    features: [
      'Package Classique',
      'Videos Annonce de joueurs (avec video et photo)',
      "1 shooting video et photo d'1h par equipe",
      'Toutes les photos et videos disponibles en HD a dispo',
    ],
    order: 3,
  },
];

for (const pkg of videoPkgs) {
  await createDoc({ ...pkg, _type: 'videoPackage' });
}

// ── 5. Testimonials ────────────────────────────────────────────────
const testimonials = [
  {
    _id: 'testimonial-1',
    quote: "Le jour ou on a utilise MADXP pour la premiere fois, ca en a surpris plus d'un.",
    clubName: 'RACC Handball Nantes',
    division: 'NM3',
    order: 1,
  },
  {
    _id: 'testimonial-2',
    quote: "Tous les joueurs attendaient que ca : voir leurs celebrations.",
    clubName: 'NANTES ATLANTIQUE RINK HOCKEY',
    division: 'D2',
    order: 2,
  },
  {
    _id: 'testimonial-3',
    quote: "C'est vraiment instantane, c'est tres satisfaisant.",
    clubName: 'CORSAIRES DE NANTES',
    division: 'D1',
    order: 3,
  },
  {
    _id: 'testimonial-4',
    quote: "C'est un outil qui nous facilite la vie, ca complete vraiment le speaker.",
    clubName: 'NANTES LOIRE FEMININ',
    division: 'NF3',
    order: 4,
  },
];

for (const t of testimonials) {
  await createDoc({ ...t, _type: 'testimonial' });
}

// ── 6. Club Logos (sans images — à ajouter via Studio) ─────────────
const clubs = [
  { _id: 'club-racc', name: 'RACC Handball Nantes', order: 1 },
  { _id: 'club-narh', name: 'NARH', order: 2 },
  { _id: 'club-nlf', name: 'Nantes Loire Feminin', order: 3 },
  { _id: 'club-corsaires', name: 'Corsaires de Nantes', order: 4 },
  { _id: 'club-rinkhockey', name: 'Nantes Rink Hockey', order: 5 },
];

for (const club of clubs) {
  await createDoc({ ...club, _type: 'clubLogo' });
}

// ── 7. Solution Panels (sans images — à ajouter via Studio) ────────
const solutionPanels = [
  {
    _id: 'solpanel-1',
    title: 'Valorisez vos partenaires',
    description:
      "Toute l'annee, vos partenaires beneficieront d'un support de communication pendant vos matchs pour partager leurs actualites. Ils peuvent mettre a jour leurs actualites d'une semaine a l'autre et obtenir des rapports de diffusion.",
    order: 1,
  },
  {
    _id: 'solpanel-2',
    title: 'Celebrez vos joueurs',
    description:
      "Vos joueurs aussi ont le droit de faire comme les pros. Nous proposons de venir filmer leurs celebrations en debut d'annee, ainsi que tout type de contenu (video/photo) relatif a votre media day.",
    order: 2,
  },
  {
    _id: 'solpanel-3',
    title: 'Partagez vos actualites',
    description:
      "Assurez-vous que vos supporters ne passent pas a cote de vos prochains matchs, les soirees du club et vos produits a vendre sur votre boutique.",
    order: 3,
  },
];

for (const panel of solutionPanels) {
  await createDoc({ ...panel, _type: 'solutionPanel' });
}

// ── 8. Solution Features ───────────────────────────────────────────
const solutionFeatures = [
  {
    _id: 'solfeat-1',
    title: 'Sans connexion internet',
    description: 'Pas besoin de wifi dans votre salle.',
    order: 1,
  },
  {
    _id: 'solfeat-2',
    title: 'Sans fil',
    description:
      'Commandable a distance grace a votre telephone qui sert de telecommande.',
    order: 2,
  },
  {
    _id: 'solfeat-3',
    title: "Simple d'utilisation",
    description:
      "Interface ultra simplifiee, utilisable par n'importe quel benevole les jours de match.",
    order: 3,
  },
];

for (const feat of solutionFeatures) {
  await createDoc({ ...feat, _type: 'solutionFeature' });
}

// ── 9. Color Panels ────────────────────────────────────────────────
const colorPanels = [
  {
    _id: 'colpanel-1',
    title: 'Accompagnement continu',
    features: [
      'Formation initiale complete',
      'Support technique reactif',
      'Conseils pour optimiser vos contenus',
      "Assistance & mise a jour de videos d'une semaine a l'autre",
      "Possibilite d'autonomie complete : acces admin avec integration visuels/videos",
    ],
    bgColor: 'bg-[#3d3036]',
    order: 1,
  },
  {
    _id: 'colpanel-2',
    title: 'Solution cle en main',
    features: [
      'Boitier pre-configure livre chez vous',
      'Installation en moins de 5 minutes',
      'Application intuitive et simple',
      'Compatible avec tous les ecrans HDMI',
    ],
    bgColor: 'bg-[#423e33]',
    order: 2,
  },
  {
    _id: 'colpanel-3',
    title: 'Production video professionnelle',
    features: [
      'Offre de media day complete (photo+video)',
      'Des templates video de qualite Broadcast, personnalisable aux couleurs de votre club',
    ],
    bgColor: 'bg-[#06263f]',
    order: 3,
  },
  {
    _id: 'colpanel-4',
    title: 'Les retombees pour votre club',
    features: [
      'Image professionnelle et moderne',
      'Support de communication efficace',
      'Supporters mieux informes et engages',
      'Visibilite quantifiee pour vos partenaires',
      'Meilleure fidelisation des partenaires',
    ],
    bgColor: 'bg-[#334244]',
    order: 4,
  },
];

for (const panel of colorPanels) {
  await createDoc({ ...panel, _type: 'colorPanel' });
}

console.log('\n🎉 Seed terminé ! Ouvrez https://neopro.sanity.studio pour vérifier.');
console.log('📸 N\'oubliez pas d\'ajouter les images manuellement via le Studio.');
