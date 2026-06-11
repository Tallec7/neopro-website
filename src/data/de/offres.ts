import type {
  PricingPlan,
  VideoPackage,
  ComparisonCategory,
  OptionCategory,
  ChainStep,
} from '../offres-v2';

// ── PLAY (SaaS-Einstiegsprodukt, separates Banner) ─────────────

export const playPlan: PricingPlan = {
  name: 'Play',
  slug: 'play',
  pitch: 'Testen Sie es, es ist bereit',
  mode: 'SaaS',
  taxType: 'zzgl. MwSt.',
  priceAnnual: 790,
  priceMonthly: 79,
  popular: false,
  buttonVariant: 'black',
  features: [
    { label: 'Zugang zum Web-Player (2 Bildschirme + Fernbedienung)', included: true },
    { label: 'Unbegrenzte Videos', included: true },
    { label: 'Automatische Wiedergabeschleife', included: true },
    { label: 'Drag & Drop Upload', included: true },
    { label: 'Cloud-Fernbedienung', included: true },
    { label: 'Ohne Hardware — Internetverbindung erforderlich', included: true },
    { label: 'E-Mail-Support', included: true },
  ],
};

// ── Hauptangebote (mit Gerät) ─────────────────────────────────

export const plans: PricingPlan[] = [
  {
    name: 'Club',
    slug: 'club',
    pitch: 'Das Profi-TV Ihres Vereins',
    mode: 'Boîtier',
    taxType: 'zzgl. MwSt.',
    priceAnnual: 1500,
    priceMonthly: 149,
    popular: false,
    buttonVariant: 'yellow',
    features: [
      { label: 'Autonomes Gerät, keine Installation', included: true },
      { label: 'Funktioniert ohne WLAN', included: true },
      { label: 'Automatische Updates (null Wartung)', included: true },
      { label: '24/7-Ausstrahlung ohne Unterbrechung', included: true },
      { label: 'E-Mail-Support 72h', included: true },
    ],
  },
  {
    name: 'Pro',
    slug: 'pro',
    pitch: 'Ihre Sponsoren sehen das Ergebnis',
    mode: 'Boîtier',
    taxType: 'zzgl. MwSt.',
    priceAnnual: 2100,
    priceMonthly: 199,
    popular: true,
    buttonVariant: 'green',
    features: [
      { label: 'Alles aus dem Club-Paket, plus:', included: true },
      { label: 'Gewichtete Video-Rotation', included: true },
      { label: 'Eigenes Sponsor-Portal', included: true },
      { label: 'Proof of Play (zertifizierter Bericht)', included: true },
      { label: 'Einfache Statistiken + Offline-Admin-Zugang', included: true },
    ],
  },
  {
    name: 'Premium',
    slug: 'premium',
    pitch: 'Wir kümmern uns um alles',
    mode: 'Boîtier',
    taxType: 'zzgl. MwSt.',
    priceAnnual: 3000,
    priceMonthly: 299,
    popular: false,
    buttonVariant: 'pink',
    features: [
      { label: 'Alles aus dem Pro-Paket, plus:', included: true },
      { label: 'Multi-Screen, unabhängige Inhalte', included: true },
      { label: 'White Label inklusive', included: true },
      { label: 'Erweiterte Statistiken + CSV-Export', included: true },
      { label: 'Support 24h + Telefon am Spieltag', included: true },
    ],
  },
];

// ── Vergleichstabelle ─────────────────────────────────────────

export const comparisonTable: ComparisonCategory[] = [
  {
    title: 'Ausstrahlung',
    rows: [
      { label: 'Unbegrenzte Videos', values: [true, true, true, true] },
      { label: 'Automatische Wiedergabeschleife', values: [true, true, true, true] },
      { label: 'Drag & Drop Upload', values: [true, true, true, true] },
      { label: 'Multi-Profile (Spieltag, Training…)', values: [false, false, true, true] },
      { label: 'Gewichtete Video-Rotation', values: [false, false, true, true] },
      { label: 'Zeitgesteuerte Programmierung', values: [false, false, true, true] },
    ],
  },
  {
    title: 'Hardware & Verbindung',
    rows: [
      { label: 'Autonomes Gerät, keine Installation', values: [false, true, true, true] },
      { label: 'Funktioniert ohne WLAN', values: [false, true, true, true] },
      { label: 'Automatische Updates (null Wartung)', values: [false, true, true, true] },
      { label: 'Multi-Screen, unabhängige Inhalte', values: [false, false, false, true] },
    ],
  },
  {
    title: 'Sponsoren & Statistiken',
    rows: [
      { label: 'Sponsor-Portal (eigener Zugang)', values: [false, false, true, true] },
      { label: 'Proof of Play (zertifizierter Bericht)', values: [false, false, true, true] },
      { label: 'Einfache Statistiken', values: [false, false, true, true] },
      { label: 'Offline-Admin-Zugang', values: [false, false, true, true] },
      { label: 'Erweiterte Statistiken + CSV-Export', values: [false, false, false, true] },
      { label: 'Vollständige Ferndiagnose', values: [false, false, false, true] },
    ],
  },
  {
    title: 'Marke & Personalisierung',
    rows: [
      { label: 'White Label', values: [false, false, 'Option', true] },
      { label: 'Template in Vereinsfarben', values: ['Option', 'Option', 'Option', 'Option'] },
    ],
  },
  {
    title: 'Support',
    rows: [
      { label: 'E-Mail-Support', values: ['Standard', '72h', '48h', '24h'] },
      { label: 'Telefonisch erreichbar am Spieltag', values: [false, false, false, true] },
    ],
  },
];

// ── Zusatzoptionen ────────────────────────────────────────────

export const additionalOptions: OptionCategory[] = [
  {
    title: 'Bildschirm & Identität',
    options: [
      { label: 'Doppelbildschirm (2. HDMI oder 2. URL)', price: '', type: 'Récurrent', availability: 'Alle Angebote' },
      { label: 'Zusätzliches Gerät', price: '', type: 'Setup + abo', availability: 'Club / Pro / Premium' },
      { label: 'Template in Vereinsfarben', price: '', type: 'One-shot', availability: 'Alle Angebote' },
      { label: 'White Label', price: '', type: 'Récurrent', availability: 'Pro (in Premium enthalten)' },
    ],
  },
  {
    title: 'Begleitung',
    options: [
      { label: 'Partnerschafts-Audit (1 Tag, Gründer)', price: '', type: 'One-shot', availability: 'Pro / Premium' },
    ],
  },
  {
    title: 'Veranstaltung',
    options: [
      { label: 'Media Day Paket', price: '', type: 'One-shot', availability: 'Premium' },
      { label: 'Turnier-Paket', price: '', type: 'One-shot', availability: 'Premium' },
    ],
  },
];

// ── MADXP-Kette (Full-Stack-Servicekette) ──────────────────

export const chainSteps: ChainStep[] = [
  {
    step: '01',
    title: 'Shooting',
    tagline: 'Wir fotografieren Ihre Spieler und Ihren Verein',
    icon: 'camera',
    services: [
      { label: 'Foto- & Video-Shooting der Spieler (1h / Mannschaft)', hint: 'Vor Ort, professionelle Ausrüstung' },
      { label: 'Aufnahme von Spielen oder Events', hint: 'Media Day, Turnier, Gala' },
      { label: 'HD-Fotos & -Rohaufnahmen geliefert', hint: 'Auf allen Kanälen wiederverwendbar' },
    ],
  },
  {
    step: '02',
    title: 'Produktion',
    tagline: 'Wir erstellen Inhalte, die Ihre Sponsoren aufwerten',
    icon: 'edit',
    services: [
      { label: 'Animierte Spielerankündigungen', hint: 'Premium-Templates' },
      { label: 'Design in Vereinsfarben', hint: 'Maßgeschneidert' },
      { label: 'Sponsor-Videos & Vereinsnachrichten', hint: 'Saison-Updates' },
      { label: 'Komplettes White Label', hint: 'In Premium enthalten' },
    ],
  },
  {
    step: '03',
    title: 'Ausstrahlung',
    tagline: 'Wir senden per SaaS oder autonomem Gerät',
    icon: 'broadcast',
    services: [
      { label: 'Web-Player Play (ohne Hardware)', hint: 'Ab 79 €/Monat' },
      { label: 'Autonomes Gerät (Club / Pro / Premium)', hint: 'Null Wartung, ohne WLAN' },
      { label: 'Sponsor-Portal & Proof of Play', hint: 'Pro & Premium' },
      { label: 'Zusätzliches Gerät', hint: 'Mehrere Räume, mehrere Eingänge' },
    ],
  },
  {
    step: '04',
    title: 'Bildschirme',
    tagline: 'Wir helfen Ihnen bei der Auswahl und Installation',
    icon: 'screen',
    services: [
      { label: 'Großformat-TV (Foyer, Clubhaus)', hint: 'Beratung und Beschaffung' },
      { label: 'LED am Spielfeldrand', hint: 'Maximale Sichtbarkeit am Spieltag' },
      { label: 'Multi-Screen, unabhängige Inhalte', hint: 'Z.B. Foyer + Spielfeldrand' },
      { label: 'Installation & Inbetriebnahme', hint: 'Auf Anfrage' },
    ],
  },
];

// ── Video-Pakete ──────────────────────────────────────────────

export const videoPackages: VideoPackage[] = [
  {
    name: 'Standard',
    price: null,
    priceExtra: null,
    description: 'Standardmäßig in allen Angeboten enthalten',
    popular: false,
    features: [
      'Sponsor-Schleifenvideo',
      'Premium-Sponsor-Nachrichtenvideo',
      'Vereinsankündigungsvideo',
      'Spielevent-Ankündigungsvideo',
    ],
  },
  {
    name: 'Ohne Shooting',
    price: null,
    priceExtra: null,
    description: 'Wir integrieren Ihre Fotos in unsere Spielerankündigungs-Vorlagen.',
    popular: false,
    features: [
      'Standardpaket',
      'Spielerankündigungsvideos (nur Foto)',
    ],
  },
  {
    name: 'Mit Shooting',
    price: null,
    priceExtra: null,
    description: 'Wir filmen Ihre Spieler und integrieren sie in unsere Vorlagen.',
    popular: true,
    features: [
      'Standardpaket',
      'Spielerankündigungsvideos (Video und Foto)',
      '1h Video- und Fotodreh pro Mannschaft',
      'Alle Fotos und Videos in HD verfügbar',
    ],
  },
];
