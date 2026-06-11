import type { PricingPlan, VideoPackage, ComparisonCategory, OptionCategory, ChainStep } from '../offres-v2';

// ── PLAY (indgangsprodukt SaaS, vist i separat banner) ──────────

export const playPlan: PricingPlan = {
  name: 'Play',
  slug: 'play',
  pitch: 'Prøv det, det er klar',
  mode: 'SaaS',
  taxType: 'ekskl. moms',
  priceAnnual: 790,
  priceMonthly: 79,
  popular: false,
  buttonVariant: 'black',
  features: [
    { label: 'Adgang til webafspiller (2 skærme + fjernbetjening)', included: true },
    { label: 'Ubegrænsede videoer', included: true },
    { label: 'Automatisk afspilningsløkke', included: true },
    { label: 'Drag & drop upload', included: true },
    { label: 'Cloud-fjernbetjening', included: true },
    { label: 'Uden hardware — internetforbindelse påkrævet', included: true },
    { label: 'E-mailsupport', included: true },
  ],
};

// ── Hovedplaner (boks) ──────────────────────────────────────────

export const plans: PricingPlan[] = [
  {
    name: 'Club',
    slug: 'club',
    pitch: 'Jeres klubs professionelle TV',
    mode: 'Boîtier',
    taxType: 'ekskl. moms',
    priceAnnual: 1500,
    priceMonthly: 149,
    popular: false,
    buttonVariant: 'yellow',
    features: [
      { label: 'Selvstændig boks, ingen installation', included: true },
      { label: 'Fungerer uden WiFi', included: true },
      { label: 'Automatiske opdateringer (nul vedligeholdelse)', included: true },
      { label: '24/7 afspilning uden afbrydelse', included: true },
      { label: 'E-mailsupport 72t', included: true },
    ],
  },
  {
    name: 'Pro',
    slug: 'pro',
    pitch: 'Jeres sponsorer ser resultatet',
    mode: 'Boîtier',
    taxType: 'ekskl. moms',
    priceAnnual: 2100,
    priceMonthly: 199,
    popular: true,
    buttonVariant: 'green',
    features: [
      { label: 'Alt i Club-pakken, plus:', included: true },
      { label: 'Vægtet videorotation', included: true },
      { label: 'Dedikeret sponsorportal', included: true },
      { label: 'Proof of Play (certificeret rapport)', included: true },
      { label: 'Simpel statistik + offline admin-adgang', included: true },
    ],
  },
  {
    name: 'Premium',
    slug: 'premium',
    pitch: 'Vi tager os af alt',
    mode: 'Boîtier',
    taxType: 'ekskl. moms',
    priceAnnual: 3000,
    priceMonthly: 299,
    popular: false,
    buttonVariant: 'pink',
    features: [
      { label: 'Alt i Pro-pakken, plus:', included: true },
      { label: 'Multi-skærme, uafhængigt indhold', included: true },
      { label: 'White label inkluderet', included: true },
      { label: 'Avanceret statistik + CSV-eksport', included: true },
      { label: 'Support 24t + telefon på kampdagen', included: true },
    ],
  },
];

// ── Detaljeret sammenligningstabel ──────────────────────────────

export const comparisonTable: ComparisonCategory[] = [
  {
    title: 'Afspilning',
    rows: [
      { label: 'Ubegrænsede videoer', values: [true, true, true, true] },
      { label: 'Automatisk afspilningsløkke', values: [true, true, true, true] },
      { label: 'Drag & drop upload', values: [true, true, true, true] },
      { label: 'Multi-profiler (kampdag, træning...)', values: [false, false, true, true] },
      { label: 'Vægtet videorotation', values: [false, false, true, true] },
      { label: 'Tidsplanlægning', values: [false, false, true, true] },
    ],
  },
  {
    title: 'Hardware & forbindelse',
    rows: [
      { label: 'Selvstændig boks, ingen installation', values: [false, true, true, true] },
      { label: 'Fungerer uden WiFi', values: [false, true, true, true] },
      { label: 'Automatiske opdateringer (nul vedligeholdelse)', values: [false, true, true, true] },
      { label: 'Multi-skærme, uafhængigt indhold', values: [false, false, false, true] },
    ],
  },
  {
    title: 'Sponsorer & statistik',
    rows: [
      { label: 'Sponsorportal (dedikeret adgang)', values: [false, false, true, true] },
      { label: 'Proof of Play (certificeret rapport)', values: [false, false, true, true] },
      { label: 'Simpel statistik', values: [false, false, true, true] },
      { label: 'Offline admin-adgang', values: [false, false, true, true] },
      { label: 'Avanceret statistik + CSV-eksport', values: [false, false, false, true] },
      { label: 'Komplet fjerndiagnostik', values: [false, false, false, true] },
    ],
  },
  {
    title: 'Branding & tilpasning',
    rows: [
      { label: 'White label', values: [false, false, 'Tilvalg', true] },
      { label: 'Skabelon i klubbens farver', values: ['Tilvalg', 'Tilvalg', 'Tilvalg', 'Tilvalg'] },
    ],
  },
  {
    title: 'Support',
    rows: [
      { label: 'E-mailsupport', values: ['Standard', '72t', '48t', '24t'] },
      { label: 'Telefonisk kontakt på kampdagen', values: [false, false, false, true] },
    ],
  },
];

// ── Tilvalg à la carte ──────────────────────────────────────────

export const additionalOptions: OptionCategory[] = [
  {
    title: 'Skærm & Identitet',
    options: [
      { label: 'Dobbelt skærm (2. HDMI eller 2. URL)', price: '', type: 'Récurrent', availability: 'Alle tilbud' },
      { label: 'Ekstra boks', price: '', type: 'Setup + abo', availability: 'Club / Pro / Premium' },
      { label: 'Skabelon i klubbens farver', price: '', type: 'One-shot', availability: 'Alle tilbud' },
      { label: 'White label', price: '', type: 'Récurrent', availability: 'Pro (inkl. i Premium)' },
    ],
  },
  {
    title: 'Rådgivning',
    options: [
      { label: 'Partnerskabsaudit (1 dag, grundlægger)', price: '', type: 'One-shot', availability: 'Pro / Premium' },
    ],
  },
  {
    title: 'Event',
    options: [
      { label: 'Media Day-pakke', price: '', type: 'One-shot', availability: 'Premium' },
      { label: 'Turneringspakke', price: '', type: 'One-shot', availability: 'Premium' },
    ],
  },
];

// ── MADXP-kæden (komplementære full-stack tjenester) ───────────

export const chainSteps: ChainStep[] = [
  {
    step: '01',
    title: 'Shooting',
    tagline: 'Vi fanger jeres spillere og jeres klub',
    icon: 'camera',
    services: [
      { label: 'Foto- & videooptagelse af spillere (1t / hold)', hint: 'På stedet, professionelt udstyr' },
      { label: 'Optagelse af kamp eller event', hint: 'Media Day, turnering, gala' },
      { label: 'HD-fotos & råoptagelser leveret', hint: 'Kan genbruges på alle jeres kanaler' },
    ],
  },
  {
    step: '02',
    title: 'Produktion',
    tagline: 'Vi omdanner til indhold der fremhæver jeres sponsorer',
    icon: 'edit',
    services: [
      { label: 'Animerede spillerannonceringer', hint: 'Premium skabeloner' },
      { label: 'Design i klubbens farver', hint: 'Skræddersyet' },
      { label: 'Sponsorvideoer & klubbeskeder', hint: 'Sæsonopdateringer' },
      { label: 'Komplet white label', hint: 'Inkluderet i Premium' },
    ],
  },
  {
    step: '03',
    title: 'Afspilning',
    tagline: 'Vi afspiller via SaaS eller selvstændig boks',
    icon: 'broadcast',
    services: [
      { label: 'Play webafspiller (uden hardware)', hint: 'Fra 79 €/md' },
      { label: 'Selvstændig boks (Club / Pro / Premium)', hint: 'Nul vedligeholdelse, uden WiFi' },
      { label: 'Sponsorportal & Proof of Play', hint: 'Pro & Premium' },
      { label: 'Ekstra boks', hint: 'Flere sale, flere indgange' },
    ],
  },
  {
    step: '04',
    title: 'Skærme',
    tagline: 'Vi hjælper jer med at vælge og installere skærme',
    icon: 'screen',
    services: [
      { label: 'Storformat-TV (hal, klubhus)', hint: 'Rådgivning og sourcing' },
      { label: 'LED langs banen', hint: 'Maksimal synlighed på kampdagen' },
      { label: 'Multi-skærme, uafhængigt indhold', hint: 'F.eks. hal + langs banen' },
      { label: 'Installation & idriftsættelse', hint: 'På tilbud' },
    ],
  },
];

// ── Videopakker ─────────────────────────────────────────────────

export const videoPackages: VideoPackage[] = [
  {
    name: 'Standard',
    price: null,
    priceExtra: null,
    description: 'Inkluderet som standard i alle tilbud',
    popular: false,
    features: [
      'Sponsor-løkkevideo',
      'Premium sponsor-beskedvideo',
      'Klubmeddelsesvideo',
      'Kampevent-annonceringsvideo',
    ],
  },
  {
    name: 'Uden fotoshoot',
    price: null,
    priceExtra: null,
    description: 'Vi integrerer jeres fotos i vores spillerannoncerings-skabeloner.',
    popular: false,
    features: [
      'Standardpakke',
      'Spillerannonceringsvideoer (kun foto)',
    ],
  },
  {
    name: 'Med fotoshoot',
    price: null,
    priceExtra: null,
    description: 'Vi filmer jeres spillere og integrerer dem i vores skabeloner.',
    popular: true,
    features: [
      'Standardpakke',
      'Spillerannonceringsvideoer (video og foto)',
      '1t video- og fotooptagelse pr. hold',
      'Alle fotos og videoer tilgængelige i HD',
    ],
  },
];
