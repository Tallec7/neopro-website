import type { City, Sport } from '../implantations';

// ── Ciudades deportivas de Espa\u00f1a ─────────────────────────────
export const cities: City[] = [
  {
    slug: 'madrid',
    name: 'Madrid',
    at: 'en Madrid',
    country: 'ES',
    region: 'Comunidad de Madrid',
    localInfo:
      'Madrid es el epicentro del deporte espa\u00f1ol, con una densidad excepcional de clubes y pabellones deportivos. El balonmano madrile\u00f1o cuenta con referentes como el Atl\u00e9tico de Madrid BM, y la ciudad alberga cientos de clubes amateur de baloncesto, voleibol y f\u00fatbol sala que compiten en ligas regionales y nacionales.',
  },
  {
    slug: 'barcelona',
    name: 'Barcelona',
    at: 'en Barcelona',
    country: 'ES',
    region: 'Catalu\u00f1a',
    localInfo:
      'Barcelona es una ciudad con una cultura deportiva extraordinaria. El FC Barcelona tiene secciones de balonmano, baloncesto y f\u00fatbol sala de primer nivel mundial. La base amateur catalana es inmensa, con miles de equipos compitiendo en ligas federadas cada fin de semana en pabellones repartidos por toda la ciudad y su \u00e1rea metropolitana.',
  },
  {
    slug: 'valencia',
    name: 'Valencia',
    at: 'en Valencia',
    country: 'ES',
    region: 'Comunidad Valenciana',
    localInfo:
      'Valencia es una de las ciudades m\u00e1s deportivas de Espa\u00f1a. La Comunidad Valenciana destaca especialmente en balonmano, con clubes hist\u00f3ricos, y en baloncesto con el Valencia Basket como referente. El tejido asociativo deportivo valenciano es muy activo, con numerosos clubes amateur que buscan soluciones modernas para sus patrocinadores.',
  },
  {
    slug: 'sevilla',
    name: 'Sevilla',
    at: 'en Sevilla',
    country: 'ES',
    region: 'Andaluc\u00eda',
    localInfo:
      'Sevilla y Andaluc\u00eda cuentan con una tradici\u00f3n deportiva profundamente arraigada. El balonmano andaluz tiene gran peso a nivel nacional, y el deporte de pabell\u00f3n —baloncesto, voleibol, f\u00fatbol sala— goza de gran popularidad en la regi\u00f3n. La red de clubes amateur sevillanos es amplia y din\u00e1mica.',
  },
  {
    slug: 'bilbao',
    name: 'Bilbao',
    at: 'en Bilbao',
    country: 'ES',
    region: 'Pa\u00eds Vasco',
    localInfo:
      'El Pa\u00eds Vasco es una de las regiones con mayor densidad de pr\u00e1ctica deportiva de Espa\u00f1a. Bilbao destaca en baloncesto con el Bilbao Basket y tiene una s\u00f3lida tradici\u00f3n en balonmano y pelota vasca. Los clubes amateur vascos cuentan con un tejido de patrocinadores locales muy comprometido.',
  },
  {
    slug: 'zaragoza',
    name: 'Zaragoza',
    at: 'en Zaragoza',
    country: 'ES',
    region: 'Arag\u00f3n',
    localInfo:
      'Zaragoza es un referente del deporte de pabell\u00f3n en Espa\u00f1a. El Tecnyconta Zaragoza (Casademont) en baloncesto y el BM Arag\u00f3n en balonmano representan la punta de lanza de una comunidad deportiva activa. Arag\u00f3n cuenta con una base amateur s\u00f3lida que busca profesionalizar la experiencia del d\u00eda de partido.',
  },
  {
    slug: 'malaga',
    name: 'M\u00e1laga',
    at: 'en M\u00e1laga',
    country: 'ES',
    region: 'Andaluc\u00eda',
    localInfo:
      'M\u00e1laga es una ciudad con gran dinamismo deportivo. El Unicaja de baloncesto es un club de referencia europea, y el balonmano y el voleibol cuentan con una base de clubes amateur muy activa en la Costa del Sol. El potencial de patrocinio local es elevado gracias al tejido empresarial tur\u00edstico y comercial.',
  },
  {
    slug: 'palma-de-mallorca',
    name: 'Palma de Mallorca',
    at: 'en Palma de Mallorca',
    country: 'ES',
    region: 'Islas Baleares',
    localInfo:
      'Palma de Mallorca combina turismo y deporte de forma \u00fanica. Las Islas Baleares tienen una tradici\u00f3n deportiva notable, con clubes de baloncesto, voleibol y balonmano que compiten a nivel nacional. El entorno empresarial balear, vinculado al turismo y la hosteler\u00eda, ofrece grandes oportunidades de patrocinio deportivo.',
  },
  {
    slug: 'las-palmas',
    name: 'Las Palmas',
    at: 'en Las Palmas',
    country: 'ES',
    region: 'Canarias',
    localInfo:
      'Las Palmas de Gran Canaria es el coraz\u00f3n deportivo de Canarias. El CB Gran Canaria en baloncesto es un referente ACB, y el deporte de pabell\u00f3n tiene una gran aceptaci\u00f3n en las islas. Los clubes amateur canarios buscan activamente soluciones digitales para conectar con sus patrocinadores y mejorar la experiencia en el pabell\u00f3n.',
  },
  {
    slug: 'murcia',
    name: 'Murcia',
    at: 'en Murcia',
    country: 'ES',
    region: 'Regi\u00f3n de Murcia',
    localInfo:
      'Murcia cuenta con una escena deportiva de pabell\u00f3n muy competitiva. El UCAM Murcia en baloncesto y el Jimbee Cartagena en f\u00fatbol sala son referentes nacionales. La base amateur murciana es amplia, y las empresas locales del sector agroalimentario y de servicios buscan visibilidad a trav\u00e9s del patrocinio deportivo.',
  },
  {
    slug: 'valladolid',
    name: 'Valladolid',
    at: 'en Valladolid',
    country: 'ES',
    region: 'Castilla y Le\u00f3n',
    localInfo:
      'Valladolid es un referente del balonmano espa\u00f1ol, con el BM Atl\u00e9tico Valladolid compitiendo en la Liga Asobal. Castilla y Le\u00f3n tiene una tradici\u00f3n deportiva s\u00f3lida en deportes de pabell\u00f3n, y los clubes amateur de la regi\u00f3n buscan herramientas modernas para rentabilizar el patrocinio y mejorar el d\u00eda de partido.',
  },
  {
    slug: 'vigo',
    name: 'Vigo',
    at: 'en Vigo',
    country: 'ES',
    region: 'Galicia',
    localInfo:
      'Vigo y Galicia tienen una cultura deportiva intensa. El balonmano gallego est\u00e1 entre los m\u00e1s fuertes de Espa\u00f1a, y el baloncesto y el voleibol cuentan con numerosos clubes amateur en la regi\u00f3n. El tejido industrial y pesquero gallego ofrece un entorno de patrocinio comprometido con el deporte local.',
  },
  {
    slug: 'gijon',
    name: 'Gij\u00f3n',
    at: 'en Gij\u00f3n',
    country: 'ES',
    region: 'Asturias',
    localInfo:
      'Gij\u00f3n es el motor deportivo de Asturias. La regi\u00f3n cuenta con una tradici\u00f3n importante en deportes de pabell\u00f3n, especialmente balonmano y baloncesto. Los clubes amateur asturianos, apoyados por un tejido industrial comprometido, buscan digitalizar su comunicaci\u00f3n y profesionalizar la experiencia del espectador.',
  },
  {
    slug: 'santander',
    name: 'Santander',
    at: 'en Santander',
    country: 'ES',
    region: 'Cantabria',
    localInfo:
      'Santander y Cantabria viven el deporte con pasi\u00f3n. La regi\u00f3n tiene una presencia destacada en balonmano y baloncesto a nivel nacional, y los clubes amateur c\u00e1ntabros gozan de un p\u00fablico fiel. El entorno empresarial local busca formas innovadoras de apoyar y dar visibilidad al deporte de base.',
  },
  {
    slug: 'san-sebastian',
    name: 'San Sebasti\u00e1n',
    at: 'en San Sebasti\u00e1n',
    country: 'ES',
    region: 'Pa\u00eds Vasco',
    localInfo:
      'San Sebasti\u00e1n combina cultura, gastronom\u00eda y deporte como pocas ciudades en Espa\u00f1a. El deporte de pabell\u00f3n goza de gran popularidad en Gipuzkoa, con clubes de balonmano, baloncesto y voleibol muy activos. El tejido empresarial donostiarra, vinculado a la tecnolog\u00eda y los servicios, busca visibilidad en el \u00e1mbito deportivo local.',
  },
];

// ── Deportes de pabell\u00f3n ───────────────────────────────────────
export const sports: Sport[] = [
  {
    slug: 'balonmano',
    name: 'Balonmano',
    venue: 'pabell\u00f3n deportivo',
    description:
      'Espa\u00f1a es una potencia mundial del balonmano, con la Liga Asobal como una de las mejores ligas del mundo y m\u00e1s de 1.500 clubes federados. El balonmano espa\u00f1ol combina excelencia profesional con una base amateur muy amplia, ideal para soluciones digitales de comunicaci\u00f3n deportiva.',
    useCases: [
      'Logos y v\u00eddeos de patrocinadores en la pantalla del pabell\u00f3n durante los partidos',
      'Presentaciones de jugadores y v\u00eddeos de entrada antes del partido',
      'Marcador en directo y animaciones durante los tiempos muertos',
      'Comunicaciones del club: pr\u00f3ximos partidos, eventos y merchandising',
    ],
  },
  {
    slug: 'baloncesto',
    name: 'Baloncesto',
    venue: 'pabell\u00f3n deportivo',
    description:
      'El baloncesto es uno de los deportes m\u00e1s populares de Espa\u00f1a. Desde la Liga ACB hasta las ligas regionales, miles de clubes ofrecen a sus aficionados jornadas apasionantes, creando el entorno perfecto para pantallas digitales y visibilidad de patrocinadores.',
    useCases: [
      'V\u00eddeos de patrocinadores en bucle durante tiempos muertos y descansos',
      'Presentaci\u00f3n de jugadores con v\u00eddeos individuales',
      'Marcador en directo y estad\u00edsticas en pantalla',
      'Anuncios de eventos y promoci\u00f3n de merchandising',
    ],
  },
  {
    slug: 'voleibol',
    name: 'Voleibol',
    venue: 'pabell\u00f3n deportivo',
    description:
      'El voleibol cuenta con una comunidad apasionada en Espa\u00f1a. La Superliga y las ligas regionales re\u00fanen a un p\u00fablico fiel y entusiasta, ideal para la comunicaci\u00f3n digital de patrocinadores en el pabell\u00f3n.',
    useCases: [
      'Presentaci\u00f3n de patrocinadores entre sets',
      'Anuncios de jugadores y presentaci\u00f3n de equipos',
      'Marcador en directo y estad\u00edsticas por set',
      'Eventos del club y promoci\u00f3n de cantera',
    ],
  },
  {
    slug: 'futbol-sala',
    name: 'F\u00fatbol sala',
    venue: 'pabell\u00f3n deportivo',
    description:
      'Espa\u00f1a es la referencia mundial del f\u00fatbol sala. La Liga Nacional de F\u00fatbol Sala (LNFS) es la mejor liga del planeta, y la base amateur es enorme con miles de equipos en todo el pa\u00eds. Un deporte id\u00f3neo para soluciones de se\u00f1alizaci\u00f3n digital en pabell\u00f3n.',
    useCases: [
      'V\u00eddeos de patrocinadores durante los descansos',
      'Presentaci\u00f3n de jugadores en la pantalla del pabell\u00f3n',
      'Marcador en directo y estad\u00edsticas del partido',
      'Promoci\u00f3n de eventos y campa\u00f1as de socios',
    ],
  },
  {
    slug: 'hockey',
    name: 'Hockey',
    venue: 'pabell\u00f3n deportivo',
    description:
      'El hockey sobre patines tiene profundas ra\u00edces en Espa\u00f1a, especialmente en Catalu\u00f1a y Galicia. La OK Liga es una de las competiciones m\u00e1s prestigiosas del mundo en este deporte. Los clubes de hockey buscan modernizar sus instalaciones con soluciones digitales.',
    useCases: [
      'V\u00eddeos de patrocinadores durante las pausas entre periodos',
      'Presentaci\u00f3n de jugadores en pantalla',
      'Marcador en directo y tiempos de penalizaci\u00f3n',
      'Interacci\u00f3n con los aficionados: sorteos y actividades el d\u00eda del partido',
    ],
  },
  {
    slug: 'badminton',
    name: 'B\u00e1dminton',
    venue: 'pabell\u00f3n deportivo',
    description:
      'El b\u00e1dminton est\u00e1 en pleno crecimiento en Espa\u00f1a, con una federaci\u00f3n activa y torneos cada vez m\u00e1s populares. Los clubes de b\u00e1dminton buscan herramientas modernas para atraer patrocinadores y mejorar la experiencia de los espectadores.',
    useCases: [
      'Pantallas de patrocinadores durante los cambios de pista',
      'Presentaci\u00f3n de jugadores y clasificaciones en directo',
      'Resultados en tiempo real y estad\u00edsticas del torneo',
      'Promoci\u00f3n de eventos y captaci\u00f3n de nuevos socios',
    ],
  },
  {
    slug: 'tenis-de-mesa',
    name: 'Tenis de mesa',
    venue: 'pabell\u00f3n deportivo',
    description:
      'El tenis de mesa cuenta con una comunidad fiel en Espa\u00f1a y una liga nacional competitiva. Los clubes buscan profesionalizar sus eventos y ofrecer mayor visibilidad a sus patrocinadores mediante soluciones digitales innovadoras.',
    useCases: [
      'Pantallas con logos de patrocinadores durante los partidos',
      'Presentaci\u00f3n de jugadores y rankings actualizados',
      'Marcador en directo y estad\u00edsticas por set',
      'Comunicaci\u00f3n de eventos, torneos y jornadas de puertas abiertas',
    ],
  },
];
