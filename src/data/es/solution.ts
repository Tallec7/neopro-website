import type { SolutionPanel, Feature, ColorPanel } from '../solution';

export const solutionPanels: SolutionPanel[] = [
  {
    title: 'Destaca a tus patrocinadores.',
    description:
      'Durante todo el año, tus patrocinadores se benefician de una plataforma de comunicación durante tus partidos para compartir sus novedades. Pueden actualizar su contenido semanalmente y recibir informes de difusión.',
  },
  {
    title: 'Celebra a tus jugadores.',
    description:
      'Tus jugadores también merecen el trato profesional. Ofrecemos filmar sus celebraciones al inicio de la temporada, así como todo tipo de contenido (vídeo/foto) para tu media day.',
  },
  {
    title: 'Comparte tus noticias.',
    description:
      'Asegúrate de que tus aficionados no se pierdan los próximos partidos, eventos del club y productos de tu tienda.',
  },
];

export const features: Feature[] = [
  {
    title: 'Sin internet',
    description: 'No necesitas wifi en tu instalación.',
  },
  {
    title: 'Inalámbrico',
    description:
      'Controlado a distancia desde tu teléfono, que funciona como mando a distancia.',
  },
  {
    title: 'Fácil de usar',
    description:
      'Interfaz ultra simplificada, utilizable por cualquier voluntario el día del partido.',
  },
];

export const colorPanels: ColorPanel[] = [
  {
    title: 'Acompañamiento continuo',
    features: [
      'Formación inicial completa',
      'Soporte técnico reactivo',
      'Consejos para optimizar tus contenidos',
      'Asistencia y actualización semanal de vídeos',
      'Opción de autonomía total: acceso admin con integración de visuales/vídeos',
    ],
    bgColor: 'bg-[#3d3036]',
  },
  {
    title: 'Solución llave en mano',
    features: [
      'Dispositivo preconfigurado entregado en tu domicilio',
      'Instalación en menos de 5 minutos',
      'Aplicación intuitiva y sencilla',
      'Compatible con todas las pantallas HDMI',
    ],
    bgColor: 'bg-[#423e33]',
  },
  {
    title: 'Producción de vídeo profesional',
    features: [
      'Paquete completo de media day (foto+vídeo)',
      'Plantillas de vídeo de calidad Broadcast, personalizables con los colores de tu club',
    ],
    bgColor: 'bg-[#2f3935]',
  },
  {
    title: 'Beneficios para tu club',
    features: [
      'Imagen profesional y moderna',
      'Plataforma de comunicación eficaz',
      'Aficionados mejor informados y comprometidos',
      'Visibilidad cuantificada para tus patrocinadores',
      'Mejor fidelización de patrocinadores',
    ],
    bgColor: 'bg-[#334244]',
  },
];

export const steps = [
  { number: '1', title: 'Conecta el dispositivo a la pantalla', description: 'Compatible con cualquier pantalla' },
  { number: '2', title: 'Conéctate a la pantalla', description: 'Sin necesidad de internet' },
  { number: '3', title: 'Tu teléfono se convierte en el mando', description: 'Utilizable por cualquier voluntario' },
];
