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
  priceMonthly: 99,
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
    priceMonthly: 189,
    popular: false,
    buttonVariant: 'yellow',
    features: [
      { label: 'Boîtier autonome, aucune installation', included: true },
      { label: 'Fonctionne sans WiFi', included: true },
      { label: 'Mises à jour automatiques (zéro maintenance)', included: true },
      { label: 'Diffusion 24/7 sans interruption', included: true },
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
    priceMonthly: 249,
    popular: true,
    buttonVariant: 'green',
    features: [
      { label: 'Tout le pack Club, plus :', included: true },
      { label: 'Rotation pondérée des vidéos', included: true },
      { label: 'Portail sponsor dédié', included: true },
      { label: 'Proof of Play (rapport certifié)', included: true },
      { label: 'Analytics simples + accès Admin hors-ligne', included: true },
    ],
  },
  {
    name: 'Premium',
    slug: 'premium',
    pitch: "On s'occupe de tout",
    mode: 'Boîtier',
    taxType: 'HT',
    priceAnnual: 3000,
    priceMonthly: 349,
    popular: false,
    buttonVariant: 'pink',
    features: [
      { label: 'Tout le pack Pro, plus :', included: true },
      { label: 'Multi-écrans, contenus indépendants', included: true },
      { label: 'Marque blanche incluse', included: true },
      { label: 'Analytics avancées + export CSV', included: true },
      { label: 'Support 24h + tél jour de match', included: true },
    ],
  },
];

// ── Tableau comparatif complet ────────────────────────────────────

export interface ComparisonRow {
  label: string;
  values: [string | boolean, string | boolean, string | boolean, string | boolean]; // Play, Club, Pro, Premium
}

export interface ComparisonCategory {
  title: string;
  rows: ComparisonRow[];
}

export const comparisonTable: ComparisonCategory[] = [
  {
    title: 'Diffusion',
    rows: [
      { label: 'Vidéos illimitées', values: [true, true, true, true] },
      { label: 'Boucle de diffusion automatique', values: [true, true, true, true] },
      { label: 'Upload drag & drop', values: [true, true, true, true] },
      { label: 'Multi-profils (match day, entraînement…)', values: [false, false, true, true] },
      { label: 'Rotation pondérée des vidéos', values: [false, false, true, true] },
      { label: 'Programmation horaire', values: [false, false, true, true] },
    ],
  },
  {
    title: 'Matériel & connexion',
    rows: [
      { label: 'Boîtier autonome, aucune installation', values: [false, true, true, true] },
      { label: 'Fonctionne sans WiFi', values: [false, true, true, true] },
      { label: 'Mises à jour automatiques (zéro maintenance)', values: [false, true, true, true] },
      { label: 'Multi-écrans, contenus indépendants', values: [false, false, false, true] },
    ],
  },
  {
    title: 'Sponsors & analytics',
    rows: [
      { label: 'Portail sponsor (accès dédié)', values: [false, false, true, true] },
      { label: 'Proof of Play (rapport certifié)', values: [false, false, true, true] },
      { label: 'Analytics simples', values: [false, false, true, true] },
      { label: 'Accès Admin hors-ligne', values: [false, false, true, true] },
      { label: 'Analytics avancées + export CSV', values: [false, false, false, true] },
      { label: 'Diagnostic à distance complet', values: [false, false, false, true] },
    ],
  },
  {
    title: 'Marque & personnalisation',
    rows: [
      { label: 'Marque blanche', values: [false, false, 'Option', true] },
      { label: 'Template aux couleurs du club', values: ['Option', 'Option', 'Option', 'Option'] },
    ],
  },
  {
    title: 'Support',
    rows: [
      { label: 'Support email', values: ['Standard', '72h', '48h', '24h'] },
      { label: 'Joignable par téléphone jour de match', values: [false, false, false, true] },
    ],
  },
];

// ── Options à la carte ────────────────────────────────────────────

export const additionalOptions: OptionCategory[] = [
  {
    title: 'Écran & Identité',
    options: [
      { label: 'Double écran (2e HDMI ou 2e URL)', price: '', type: 'Récurrent', availability: 'Toutes offres' },
      { label: 'Boîtier additionnel', price: '', type: 'Setup + abo', availability: 'Club / Pro / Premium' },
      { label: 'Template aux couleurs du club', price: '', type: 'One-shot', availability: 'Toutes offres' },
      { label: 'Marque blanche', price: '', type: 'Récurrent', availability: 'Pro (inclus en Premium)' },
    ],
  },
  {
    title: 'Accompagnement',
    options: [
      { label: 'Audit partenariat (1 jour, fondateur)', price: '', type: 'One-shot', availability: 'Pro / Premium' },
    ],
  },
  {
    title: 'Événement',
    options: [
      { label: 'Pack Media Day', price: '', type: 'One-shot', availability: 'Premium' },
      { label: 'Pack tournoi', price: '', type: 'One-shot', availability: 'Premium' },
    ],
  },
];

// ── Chaîne Neopro (services complémentaires full-stack) ───────────

export interface ChainService {
  label: string;
  hint?: string;
}

export interface ChainStep {
  step: string;          // numéro ou code
  title: string;         // ex: "Shooting"
  tagline: string;       // courte phrase de positionnement
  icon: 'camera' | 'edit' | 'broadcast' | 'screen';
  services: ChainService[];
}

export const chainSteps: ChainStep[] = [
  {
    step: '01',
    title: 'Shooting',
    tagline: 'On capture vos joueurs et votre club',
    icon: 'camera',
    services: [
      { label: 'Shooting photo & vidéo joueurs (1h / équipe)', hint: 'Sur place, matériel pro' },
      { label: 'Captation match ou événement', hint: 'Media Day, tournoi, gala' },
      { label: 'Photos & rushes HD livrés', hint: 'Réutilisables sur tous vos canaux' },
    ],
  },
  {
    step: '02',
    title: 'Production',
    tagline: 'On transforme en contenus qui valorisent vos sponsors',
    icon: 'edit',
    services: [
      { label: 'Annonces de joueurs animées', hint: 'Templates premium' },
      { label: 'Habillage aux couleurs du club', hint: 'Sur-mesure' },
      { label: 'Vidéos sponsors & messages club', hint: 'Mises à jour saison' },
      { label: 'Marque blanche complète', hint: 'Inclus en Premium' },
    ],
  },
  {
    step: '03',
    title: 'Diffusion',
    tagline: 'On diffuse en SaaS ou via boîtier autonome',
    icon: 'broadcast',
    services: [
      { label: 'Player web Play (sans matériel)', hint: 'À partir de 79 €/mois' },
      { label: 'Boîtier autonome (Club / Pro / Premium)', hint: 'Zéro maintenance, sans WiFi' },
      { label: 'Portail sponsor & Proof of Play', hint: 'Pro & Premium' },
      { label: 'Boîtier additionnel', hint: 'Plusieurs salles, plusieurs entrées' },
    ],
  },
  {
    step: '04',
    title: 'Écrans',
    tagline: 'On vous aide à choisir et installer les écrans',
    icon: 'screen',
    services: [
      { label: 'TV grand format (hall, club-house)', hint: 'Conseil et sourcing' },
      { label: 'LED bord de terrain', hint: 'Visibilité maximale match day' },
      { label: 'Multi-écrans, contenus indépendants', hint: 'Ex: hall + bord de terrain' },
      { label: 'Installation & mise en service', hint: 'Sur devis' },
    ],
  },
];

// ── Packages vidéo (legacy, conservés pour rétro-compat) ──────────

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
