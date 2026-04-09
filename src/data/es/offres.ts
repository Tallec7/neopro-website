import type { PricingPlan, VideoPackage, ComparisonCategory, OptionCategory, ChainStep } from '../offres-v2';

// ── PLAY (producto de entrada SaaS, sin hardware) ───────────────

export const playPlan: PricingPlan = {
  name: 'Play',
  slug: 'play',
  pitch: 'Pruébalo, ya está listo',
  mode: 'SaaS',
  taxType: 'sin IVA',
  priceAnnual: 790,
  priceMonthly: 79,
  popular: false,
  buttonVariant: 'black',
  features: [
    { label: 'Acceso al reproductor web (2 pantallas + mando)', included: true },
    { label: 'Vídeos ilimitados', included: true },
    { label: 'Bucle de difusión automático', included: true },
    { label: 'Subida drag & drop', included: true },
    { label: 'Mando a distancia cloud', included: true },
    { label: 'Sin hardware — conexión requerida', included: true },
    { label: 'Soporte email', included: true },
  ],
};

// ── Planes principales (dispositivo) ─────────────────────────────

export const plans: PricingPlan[] = [
  {
    name: 'Club',
    slug: 'club',
    pitch: 'La TV pro de tu club',
    mode: 'Boîtier',
    taxType: 'sin IVA',
    priceAnnual: 1500,
    priceMonthly: 149,
    popular: false,
    buttonVariant: 'yellow',
    features: [
      { label: 'Dispositivo autónomo, sin instalación', included: true },
      { label: 'Funciona sin WiFi', included: true },
      { label: 'Actualizaciones automáticas (cero mantenimiento)', included: true },
      { label: 'Difusión 24/7 sin interrupción', included: true },
      { label: 'Soporte email 72h', included: true },
    ],
  },
  {
    name: 'Pro',
    slug: 'pro',
    pitch: 'Tus patrocinadores ven el resultado',
    mode: 'Boîtier',
    taxType: 'sin IVA',
    priceAnnual: 2100,
    priceMonthly: 199,
    popular: true,
    buttonVariant: 'green',
    features: [
      { label: 'Todo el pack Club, más:', included: true },
      { label: 'Rotación ponderada de vídeos', included: true },
      { label: 'Portal de patrocinador dedicado', included: true },
      { label: 'Proof of Play (informe certificado)', included: true },
      { label: 'Analíticas simples + acceso Admin sin conexión', included: true },
    ],
  },
  {
    name: 'Premium',
    slug: 'premium',
    pitch: 'Nos encargamos de todo',
    mode: 'Boîtier',
    taxType: 'sin IVA',
    priceAnnual: 3000,
    priceMonthly: 299,
    popular: false,
    buttonVariant: 'pink',
    features: [
      { label: 'Todo el pack Pro, más:', included: true },
      { label: 'Multipantalla, contenidos independientes', included: true },
      { label: 'Marca blanca incluida', included: true },
      { label: 'Analíticas avanzadas + exportar CSV', included: true },
      { label: 'Soporte 24h + teléfono el día del partido', included: true },
    ],
  },
];

// ── Tabla comparativa completa ───────────────────────────────────

export const comparisonTable: ComparisonCategory[] = [
  {
    title: 'Difusión',
    rows: [
      { label: 'Vídeos ilimitados', values: [true, true, true, true] },
      { label: 'Bucle de difusión automático', values: [true, true, true, true] },
      { label: 'Subida drag & drop', values: [true, true, true, true] },
      { label: 'Multi-perfiles (día de partido, entrenamiento…)', values: [false, false, true, true] },
      { label: 'Rotación ponderada de vídeos', values: [false, false, true, true] },
      { label: 'Programación horaria', values: [false, false, true, true] },
    ],
  },
  {
    title: 'Hardware y conexión',
    rows: [
      { label: 'Dispositivo autónomo, sin instalación', values: [false, true, true, true] },
      { label: 'Funciona sin WiFi', values: [false, true, true, true] },
      { label: 'Actualizaciones automáticas (cero mantenimiento)', values: [false, true, true, true] },
      { label: 'Multipantalla, contenidos independientes', values: [false, false, false, true] },
    ],
  },
  {
    title: 'Patrocinadores y analíticas',
    rows: [
      { label: 'Portal de patrocinador (acceso dedicado)', values: [false, false, true, true] },
      { label: 'Proof of Play (informe certificado)', values: [false, false, true, true] },
      { label: 'Analíticas simples', values: [false, false, true, true] },
      { label: 'Acceso Admin sin conexión', values: [false, false, true, true] },
      { label: 'Analíticas avanzadas + exportar CSV', values: [false, false, false, true] },
      { label: 'Diagnóstico remoto completo', values: [false, false, false, true] },
    ],
  },
  {
    title: 'Marca y personalización',
    rows: [
      { label: 'Marca blanca', values: [false, false, 'Opción', true] },
      { label: 'Plantilla con los colores del club', values: ['Opción', 'Opción', 'Opción', 'Opción'] },
    ],
  },
  {
    title: 'Soporte',
    rows: [
      { label: 'Soporte email', values: ['Estándar', '72h', '48h', '24h'] },
      { label: 'Contacto telefónico el día del partido', values: [false, false, false, true] },
    ],
  },
];

// ── Opciones a la carta ──────────────────────────────────────────

export const additionalOptions: OptionCategory[] = [
  {
    title: 'Pantalla e identidad',
    options: [
      { label: 'Doble pantalla (2.º HDMI o 2.ª URL)', price: '', type: 'Récurrent', availability: 'Todos los planes' },
      { label: 'Dispositivo adicional', price: '', type: 'Setup + abo', availability: 'Club / Pro / Premium' },
      { label: 'Plantilla con los colores del club', price: '', type: 'One-shot', availability: 'Todos los planes' },
      { label: 'Marca blanca', price: '', type: 'Récurrent', availability: 'Pro (incluido en Premium)' },
    ],
  },
  {
    title: 'Acompañamiento',
    options: [
      { label: 'Auditoría de patrocinio (1 día, fundador)', price: '', type: 'One-shot', availability: 'Pro / Premium' },
    ],
  },
  {
    title: 'Evento',
    options: [
      { label: 'Pack Media Day', price: '', type: 'One-shot', availability: 'Premium' },
      { label: 'Pack torneo', price: '', type: 'One-shot', availability: 'Premium' },
    ],
  },
];

// ── Cadena Neopro (servicios complementarios full-stack) ─────────

export const chainSteps: ChainStep[] = [
  {
    step: '01',
    title: 'Shooting',
    tagline: 'Capturamos a tus jugadores y tu club',
    icon: 'camera',
    services: [
      { label: 'Sesión de foto y vídeo de jugadores (1h/equipo)', hint: 'En el sitio, equipo profesional' },
      { label: 'Grabación de partido o evento', hint: 'Media Day, torneo, gala' },
      { label: 'Fotos y rushes HD entregados', hint: 'Reutilizables en todos tus canales' },
    ],
  },
  {
    step: '02',
    title: 'Producción',
    tagline: 'Transformamos en contenidos que valorizan a tus patrocinadores',
    icon: 'edit',
    services: [
      { label: 'Anuncios de jugadores animados', hint: 'Plantillas premium' },
      { label: 'Diseño con los colores del club', hint: 'A medida' },
      { label: 'Vídeos de patrocinadores y mensajes del club', hint: 'Actualizaciones de temporada' },
      { label: 'Marca blanca completa', hint: 'Incluido en Premium' },
    ],
  },
  {
    step: '03',
    title: 'Difusión',
    tagline: 'Difundimos en SaaS o mediante dispositivo autónomo',
    icon: 'broadcast',
    services: [
      { label: 'Reproductor web Play (sin hardware)', hint: 'Desde 79 €/mes' },
      { label: 'Dispositivo autónomo (Club / Pro / Premium)', hint: 'Cero mantenimiento, sin WiFi' },
      { label: 'Portal de patrocinador y Proof of Play', hint: 'Pro y Premium' },
      { label: 'Dispositivo adicional', hint: 'Varias salas, varias entradas' },
    ],
  },
  {
    step: '04',
    title: 'Pantallas',
    tagline: 'Te ayudamos a elegir e instalar las pantallas',
    icon: 'screen',
    services: [
      { label: 'TV gran formato (vestíbulo, club house)', hint: 'Asesoramiento y búsqueda' },
      { label: 'LED borde de campo', hint: 'Máxima visibilidad el día del partido' },
      { label: 'Multipantalla, contenidos independientes', hint: 'Ej: vestíbulo + borde de campo' },
      { label: 'Instalación y puesta en marcha', hint: 'Bajo presupuesto' },
    ],
  },
];

// ── Paquetes de vídeo (legacy) ───────────────────────────────────

export const videoPackages: VideoPackage[] = [
  {
    name: 'Estándar',
    price: null,
    priceExtra: null,
    description: 'Incluido por defecto en todos los planes',
    popular: false,
    features: [
      'Vídeo bucle de patrocinadores',
      'Vídeo mensaje patrocinador premium',
      'Vídeo anuncio del club',
      'Vídeo anuncio de jugada',
    ],
  },
  {
    name: 'Sin sesión de fotos',
    price: null,
    priceExtra: null,
    description: 'Integramos tus fotos en nuestras plantillas de anuncio de jugadores.',
    popular: false,
    features: [
      'Paquete Estándar',
      'Vídeos de anuncio de jugadores (solo con foto)',
    ],
  },
  {
    name: 'Con sesión de fotos',
    price: null,
    priceExtra: null,
    description: 'Fotografiamos a tus jugadores y los integramos en nuestras plantillas.',
    popular: true,
    features: [
      'Paquete Estándar',
      'Vídeos de anuncio de jugadores (con vídeo y foto)',
      '1h de sesión de vídeo y foto por equipo',
      'Todas las fotos y vídeos disponibles en HD',
    ],
  },
];
