import type { PricingPlan, VideoPackage, ComparisonCategory, OptionCategory, ChainStep } from '../offres-v2';

// ── PLAY (entry-level SaaS, no hardware) ────────────────────────

export const playPlan: PricingPlan = {
  name: 'Play',
  slug: 'play',
  pitch: "Try it, it's ready",
  mode: 'SaaS',
  taxType: 'excl. VAT',
  priceAnnual: 790,
  priceMonthly: 79,
  popular: false,
  buttonVariant: 'black',
  features: [
    { label: 'Web player access (2 screens + remote)', included: true },
    { label: 'Unlimited videos', included: true },
    { label: 'Automatic broadcast loop', included: true },
    { label: 'Drag & drop upload', included: true },
    { label: 'Cloud remote control', included: true },
    { label: 'No hardware — connection required', included: true },
    { label: 'Email support', included: true },
  ],
};

// ── Main plans (hardware box) ─────────────────────────────────

export const plans: PricingPlan[] = [
  {
    name: 'Club',
    slug: 'club',
    pitch: "Your club's pro TV",
    mode: 'Boîtier',
    taxType: 'excl. VAT',
    priceAnnual: 1500,
    priceMonthly: 149,
    popular: false,
    buttonVariant: 'yellow',
    features: [
      { label: 'Standalone box, no installation', included: true },
      { label: 'Works without WiFi', included: true },
      { label: 'Automatic updates (zero maintenance)', included: true },
      { label: '24/7 uninterrupted broadcast', included: true },
      { label: 'Email support 72h', included: true },
    ],
  },
  {
    name: 'Pro',
    slug: 'pro',
    pitch: 'Your sponsors see the results',
    mode: 'Boîtier',
    taxType: 'excl. VAT',
    priceAnnual: 2100,
    priceMonthly: 199,
    popular: true,
    buttonVariant: 'green',
    features: [
      { label: 'Everything in Club, plus:', included: true },
      { label: 'Weighted video rotation', included: true },
      { label: 'Dedicated sponsor portal', included: true },
      { label: 'Proof of Play (certified report)', included: true },
      { label: 'Simple analytics + offline Admin access', included: true },
    ],
  },
  {
    name: 'Premium',
    slug: 'premium',
    pitch: 'We handle everything',
    mode: 'Boîtier',
    taxType: 'excl. VAT',
    priceAnnual: 3000,
    priceMonthly: 299,
    popular: false,
    buttonVariant: 'pink',
    features: [
      { label: 'Everything in Pro, plus:', included: true },
      { label: 'Multi-screen, independent content', included: true },
      { label: 'White label included', included: true },
      { label: 'Advanced analytics + CSV export', included: true },
      { label: '24h support + phone on match day', included: true },
    ],
  },
];

// ── Full comparison table ─────────────────────────────────────

export const comparisonTable: ComparisonCategory[] = [
  {
    title: 'Broadcast',
    rows: [
      { label: 'Unlimited videos', values: [true, true, true, true] },
      { label: 'Automatic broadcast loop', values: [true, true, true, true] },
      { label: 'Drag & drop upload', values: [true, true, true, true] },
      { label: 'Multi-profiles (match day, training...)', values: [false, false, true, true] },
      { label: 'Weighted video rotation', values: [false, false, true, true] },
      { label: 'Scheduled programming', values: [false, false, true, true] },
    ],
  },
  {
    title: 'Hardware & connectivity',
    rows: [
      { label: 'Standalone box, no installation', values: [false, true, true, true] },
      { label: 'Works without WiFi', values: [false, true, true, true] },
      { label: 'Automatic updates (zero maintenance)', values: [false, true, true, true] },
      { label: 'Multi-screen, independent content', values: [false, false, false, true] },
    ],
  },
  {
    title: 'Sponsors & analytics',
    rows: [
      { label: 'Sponsor portal (dedicated access)', values: [false, false, true, true] },
      { label: 'Proof of Play (certified report)', values: [false, false, true, true] },
      { label: 'Simple analytics', values: [false, false, true, true] },
      { label: 'Offline Admin access', values: [false, false, true, true] },
      { label: 'Advanced analytics + CSV export', values: [false, false, false, true] },
      { label: 'Full remote diagnostics', values: [false, false, false, true] },
    ],
  },
  {
    title: 'Branding & customisation',
    rows: [
      { label: 'White label', values: [false, false, 'Option', true] },
      { label: 'Template in club colours', values: ['Option', 'Option', 'Option', 'Option'] },
    ],
  },
  {
    title: 'Support',
    rows: [
      { label: 'Email support', values: ['Standard', '72h', '48h', '24h'] },
      { label: 'Phone support on match day', values: [false, false, false, true] },
    ],
  },
];

// ── A la carte options ────────────────────────────────────────

export const additionalOptions: OptionCategory[] = [
  {
    title: 'Screen & Identity',
    options: [
      { label: 'Dual screen (2nd HDMI or 2nd URL)', price: '', type: 'Récurrent', availability: 'All plans' },
      { label: 'Additional box', price: '', type: 'Setup + abo', availability: 'Club / Pro / Premium' },
      { label: 'Template in club colours', price: '', type: 'One-shot', availability: 'All plans' },
      { label: 'White label', price: '', type: 'Récurrent', availability: 'Pro (included in Premium)' },
    ],
  },
  {
    title: 'Coaching',
    options: [
      { label: 'Partnership audit (1 day, founder)', price: '', type: 'One-shot', availability: 'Pro / Premium' },
    ],
  },
  {
    title: 'Events',
    options: [
      { label: 'Media Day package', price: '', type: 'One-shot', availability: 'Premium' },
      { label: 'Tournament package', price: '', type: 'One-shot', availability: 'Premium' },
    ],
  },
];

// ── MADXP Chain (full-stack complementary services) ──────────

export const chainSteps: ChainStep[] = [
  {
    step: '01',
    title: 'Shooting',
    tagline: 'We capture your players and your club',
    icon: 'camera',
    services: [
      { label: 'Photo & video shoot (1h / team)', hint: 'On-site, professional gear' },
      { label: 'Match or event capture', hint: 'Media Day, tournament, gala' },
      { label: 'HD photos & rushes delivered', hint: 'Reusable across all your channels' },
    ],
  },
  {
    step: '02',
    title: 'Production',
    tagline: 'We turn it into content that showcases your sponsors',
    icon: 'edit',
    services: [
      { label: 'Animated player announcements', hint: 'Premium templates' },
      { label: 'Club-branded graphics', hint: 'Custom-made' },
      { label: 'Sponsor videos & club messages', hint: 'Seasonal updates' },
      { label: 'Full white label', hint: 'Included in Premium' },
    ],
  },
  {
    step: '03',
    title: 'Broadcast',
    tagline: 'We broadcast via SaaS or standalone box',
    icon: 'broadcast',
    services: [
      { label: 'Play web player (no hardware)', hint: 'From \u20ac79/month' },
      { label: 'Standalone box (Club / Pro / Premium)', hint: 'Zero maintenance, no WiFi needed' },
      { label: 'Sponsor portal & Proof of Play', hint: 'Pro & Premium' },
      { label: 'Additional box', hint: 'Multiple rooms, multiple entrances' },
    ],
  },
  {
    step: '04',
    title: 'Screens',
    tagline: 'We help you choose and install the right screens',
    icon: 'screen',
    services: [
      { label: 'Large-format TV (lobby, clubhouse)', hint: 'Advice and sourcing' },
      { label: 'LED courtside boards', hint: 'Maximum match day visibility' },
      { label: 'Multi-screen, independent content', hint: 'E.g. lobby + courtside' },
      { label: 'Installation & commissioning', hint: 'On quote' },
    ],
  },
];

// ── Video packages (legacy, kept for backward compat) ─────────

export const videoPackages: VideoPackage[] = [
  {
    name: 'Standard',
    price: null,
    priceExtra: null,
    description: 'Included by default in all plans',
    popular: false,
    features: [
      'Sponsor loop video',
      'Premium sponsor message video',
      'Club announcement video',
      'Game event announcement video',
    ],
  },
  {
    name: 'Without shoot',
    price: null,
    priceExtra: null,
    description: 'We integrate your photos into our player announcement templates.',
    popular: false,
    features: [
      'Standard package',
      'Player announcement videos (photo only)',
    ],
  },
  {
    name: 'With shoot',
    price: null,
    priceExtra: null,
    description: 'We shoot your players and integrate them into our templates.',
    popular: true,
    features: [
      'Standard package',
      'Player announcement videos (video and photo)',
      '1h video and photo shoot per team',
      'All photos and videos available in HD',
    ],
  },
];
