// ── Types ─────────────────────────────────────────────────────────

export interface PlanFeature {
  label: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  slug: string;
  pitch: string;
  mode: 'SaaS' | 'Boîtier';
  taxType: string;
  priceAnnual: number;
  priceMonthly: number;
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

export interface AdditionalOption {
  label: string;
  price: string;
  type: 'Récurrent' | 'One-shot' | 'Setup + abo';
  availability: string;
}

export interface OptionCategory {
  title: string;
  options: AdditionalOption[];
}

// ── PLAY (produit d'appel SaaS, affiché en bandeau séparé) ────────

export const playPlan: PricingPlan = {
  name: 'Play',
  slug: 'play',
  pitch: "Essayez, c'est prêt",
  mode: 'SaaS',
  taxType: 'HT',
  priceAnnual: 790,
  priceMonthly: 79,
  popular: false,
  buttonVariant: 'black',
  features: [
    { label: 'Accès player web (2 écrans + télécommande)', included: true },
    { label: 'Vidéos illimitées', included: true },
    { label: 'Boucle de diffusion automatique', included: true },
    { label: 'Upload drag & drop', included: true },
    { label: 'Télécommande cloud', included: true },
    { label: 'Sans matériel — connexion requise', included: true },
    { label: 'Support email', included: true },
  ],
};

// ── Plans principaux (boîtier) ────────────────────────────────────

export const plans: PricingPlan[] = [
  {
    name: 'Club',
    slug: 'club',
    pitch: 'La TV pro de votre club',
    mode: 'Boîtier',
    taxType: 'HT',
    priceAnnual: 1500,
    priceMonthly: 149,
    popular: false,
    buttonVariant: 'yellow',
    features: [
      { label: 'Boîtier Raspberry Pi inclus', included: true },
      { label: 'Mode hors-ligne', included: true },
      { label: 'Hotspot WiFi intégré', included: true },
      { label: 'Watchdog 24/7 (relance auto)', included: true },
      { label: 'Contrôle TV CEC (allumage/extinction)', included: true },
      { label: 'Mises à jour OTA automatiques', included: true },
      { label: 'Télécommande locale', included: true },
      { label: 'Rotation pondérée des vidéos', included: false },
      { label: 'Portail sponsor & Proof of Play', included: false },
      { label: 'Support email 72h', included: true },
    ],
  },
  {
    name: 'Pro',
    slug: 'pro',
    pitch: 'Vos sponsors voient le résultat',
    mode: 'Boîtier',
    taxType: 'HT',
    priceAnnual: 2100,
    priceMonthly: 199,
    popular: true,
    buttonVariant: 'green',
    features: [
      { label: 'Tout le pack Club, plus :', included: true },
      { label: 'Multi-profils (match day, entraînement…)', included: true },
      { label: 'Rotation pondérée des vidéos', included: true },
      { label: 'Vidéos épinglées & programmation horaire', included: true },
      { label: 'Portail sponsor (accès dédié par annonceur)', included: true },
      { label: 'Proof of Play (rapport certifié)', included: true },
      { label: 'Pack prospection sponsor inclus', included: true },
      { label: 'Analytics complètes (impressions, completion…)', included: true },
      { label: 'Backoffice temps réel', included: true },
      { label: 'Support email 48h', included: true },
    ],
  },
  {
    name: 'Premium',
    slug: 'premium',
    pitch: "On s'occupe de tout",
    mode: 'Boîtier',
    taxType: 'HT',
    priceAnnual: 3000,
    priceMonthly: 299,
    popular: false,
    buttonVariant: 'pink',
    features: [
      { label: 'Tout le pack Pro, plus :', included: true },
      { label: 'Double écran inclus (2 HDMI)', included: true },
      { label: 'Failover HDMI automatique', included: true },
      { label: 'Marque blanche incluse', included: true },
      { label: 'Analytics avancées + export CSV', included: true },
      { label: 'Diagnostic à distance complet', included: true },
      { label: 'Support 24h + tél jour de match', included: true },
    ],
  },
];

// ── Options à la carte ────────────────────────────────────────────

export const additionalOptions: OptionCategory[] = [
  {
    title: 'Écran & Identité',
    options: [
      { label: 'Double écran (2e HDMI ou 2e URL)', price: '350 €/an', type: 'Récurrent', availability: 'Toutes offres' },
      { label: 'Boîtier additionnel', price: '500 € + 30 €/mois', type: 'Setup + abo', availability: 'Club / Pro / Premium' },
      { label: 'Template aux couleurs du club', price: '700 €', type: 'One-shot', availability: 'Toutes offres' },
      { label: 'Marque blanche', price: '500 €/an', type: 'Récurrent', availability: 'Pro (inclus en Premium)' },
    ],
  },
  {
    title: 'Accompagnement',
    options: [
      { label: 'Audit partenariat (1 jour, fondateur)', price: '1 000 €', type: 'One-shot', availability: 'Pro / Premium' },
    ],
  },
  {
    title: 'Événement',
    options: [
      { label: 'Pack Media Day', price: '2 500 €', type: 'One-shot', availability: 'Premium' },
      { label: 'Pack tournoi', price: 'Sur devis', type: 'One-shot', availability: 'Premium' },
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
