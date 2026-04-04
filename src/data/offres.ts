// ── Types ─────────────────────────────────────────────────────────

export interface PlanFeature {
  label: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  slug: string;
  subtitle: string;
  taxType: string;
  priceAnnual: number;
  priceMonthly?: number;
  popular: boolean;
  buttonVariant: 'green' | 'yellow' | 'pink' | 'black';
  features: PlanFeature[];
}

export interface VideoPackage {
  name: string;
  price: string | null;
  priceExtra: string | null;
  description: string;
  popular: boolean;
  features: string[];
}

// ── Plans ─────────────────────────────────────────────────────────

export const plans: PricingPlan[] = [
  {
    name: 'Essentiel',
    slug: 'essentiel',
    subtitle: "On s'occupe de tout.",
    taxType: 'HT',
    priceAnnual: 1500,
    priceMonthly: 190,
    popular: false,
    buttonVariant: 'yellow',
    features: [
      { label: '10 sponsors max', included: true },
      { label: 'Poids sponsors', included: false },
      { label: 'App télécommande', included: true },
      { label: 'Mode hors-ligne', included: true },
      { label: 'Backoffice temps réel', included: false },
      { label: 'Analytics', included: false },
      { label: 'Dashboard accès sponsor', included: false },
      { label: 'Shooting photo/vidéo + production vidéo', included: false },
      { label: 'Email 72h', included: true },
    ],
  },
  {
    name: 'Autonomie',
    slug: 'autonomie',
    subtitle: 'Pilotez vous-même.',
    taxType: 'HT',
    priceAnnual: 2100,
    priceMonthly: 250,
    popular: true,
    buttonVariant: 'green',
    features: [
      { label: 'Sponsors illimités', included: true },
      { label: 'Poids sponsors', included: false },
      { label: 'App télécommande', included: true },
      { label: 'Mode hors-ligne', included: true },
      { label: 'Backoffice temps réel', included: true },
      { label: 'Analytics simples', included: true },
      { label: 'Dashboard accès sponsor', included: false },
      { label: 'Shooting photo/vidéo + production vidéo', included: false },
      { label: 'Email 48h', included: true },
    ],
  },
  {
    name: 'Premium',
    slug: 'premium',
    subtitle: 'Accompagnement de A à Z.',
    taxType: 'HT',
    priceAnnual: 3000,
    priceMonthly: 350,
    popular: false,
    buttonVariant: 'pink',
    features: [
      { label: 'Sponsors illimités', included: true },
      { label: 'Poids sponsors', included: true },
      { label: 'App télécommande', included: true },
      { label: 'Mode hors-ligne', included: true },
      { label: 'Backoffice temps réel', included: true },
      { label: 'Analytics avancés', included: true },
      { label: 'Dashboard accès sponsor', included: true },
      { label: 'Shooting photo/vidéos + production vidéo **', included: true },
      { label: 'Email 24h + joignable par tél jour de match', included: true },
    ],
  },
];

// ── Packages vidéo ────────────────────────────────────────────────

export const videoPackages: VideoPackage[] = [
  {
    name: 'Classique',
    price: null,
    priceExtra: null,
    description: 'Inclus par défaut dans toutes les offres',
    popular: false,
    features: [
      'Vidéo Boucle partenaires',
      'Vidéo Message partenaire premium',
      'Vidéo Annonce message club',
      'Vidéo Annonce fait de jeu',
    ],
  },
  {
    name: 'Sans shooting',
    price: null,
    priceExtra: null,
    description: "On intègre vos photos à nos templates d'annonce de joueurs.",
    popular: false,
    features: [
      'Package Classique',
      'Vidéos Annonce de joueurs (avec photo uniquement)',
    ],
  },
  {
    name: 'Avec shooting',
    price: null,
    priceExtra: null,
    description: 'On shoote vos joueurs et on les intègre à nos templates.',
    popular: true,
    features: [
      'Package Classique',
      'Vidéos Annonce de joueurs (avec vidéo et photo)',
      "1 shooting vidéo et photo d'1h par équipe",
      'Toutes les photos et vidéos disponibles en HD à dispo',
    ],
  },
];
