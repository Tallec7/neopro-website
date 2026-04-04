import type { FaqItem } from '../faq';

export const faqItems: FaqItem[] = [
  {
    question: '¿La pantalla está incluida en la suscripción?',
    answer: 'No, la pantalla no está incluida en la suscripción.',
    answerAfterBullets: 'Sin embargo, trabajamos con proveedores que ofrecen tarifas preferenciales. También podemos ayudarte a obtener financiación de tu ayuntamiento.',
  },
  {
    question: '¿Se puede emitir en dos pantallas simultáneamente?',
    answer: 'Sí, es totalmente posible duplicar el contenido en dos pantallas dentro del gimnasio.',
  },
  {
    question: '¿Pueden conectarse varias personas al mando a la vez?',
    answer: 'Sí. El mando puede usarse simultáneamente desde varios teléfonos, lo que facilita la gestión durante los partidos.',
  },
  {
    question: '¿Es posible mostrar el marcador?',
    answer: 'Sí, el marcador puede mostrarse directamente a través del mando. Funciona de forma independiente y no está conectado a la mesa de anotaciones.',
  },
  {
    question: '¿Se puede programar contenido con antelación?',
    answer: 'Sí, por supuesto. Puedes crear varios bucles de emisión automática y programar diferentes contenidos para distintos momentos del partido:',
    bullets: ['Pre-partido', 'Tiempo muerto', 'Descanso', 'Post-partido'],
    answerAfterBullets: 'Todo es completamente personalizable.',
  },
  {
    question: 'Si ya tenemos fotos del equipo, ¿podemos usarlas?',
    answer: 'Sí, por supuesto. Puedes enviarnos tus fotos y las integraremos en nuestras plantillas de vídeo.',
    answerAfterBullets: 'Esto forma parte de las opciones de paquetes de vídeo ofrecidos (ver sección "Tarifas").',
  },
  {
    question: '¿Es posible usar la solución para un evento puntual (ej: torneo)?',
    answer: 'Sí, en ese caso te proporcionamos un presupuesto personalizado.',
    answerAfterBullets: 'Y al igual que con la suscripción anual, la producción de vídeos es opcional.',
  },
  {
    question: '¿Es posible controlar también los paneles LED perimetrales con vuestra solución?',
    answer: 'Sí, forma parte de las opciones del plan Premium. No dudes en contactarnos para más información.',
  },
];
