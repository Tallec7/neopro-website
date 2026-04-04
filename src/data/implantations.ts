export interface City {
  slug: string;
  name: string;
  at: string; // "à Lyon", "au Havre", "à La Rochelle"
  country: 'FR' | 'BE' | 'CH';
  region: string;
  localInfo?: string; // Paragraph unique à la ville pour enrichir le contenu SEO
}

export interface Sport {
  slug: string;
  name: string;
  venue: string;
  description: string;
  useCases: string[];
}

export const cities: City[] = [
  // ── France ──────────────────────────────────────────────────────
  {
    slug: 'paris',
    name: 'Paris',
    at: 'à Paris',
    country: 'FR',
    region: 'Île-de-France',
    localInfo:
      'Paris concentre le réseau de clubs sportifs amateurs le plus dense de France, avec plusieurs centaines de gymnases municipaux répartis dans les 20 arrondissements. L\'Île-de-France représente à elle seule près de 20 % des licenciés sportifs nationaux — une opportunité unique pour valoriser vos partenaires locaux auprès d\'une audience large et régulière.',
  },
  {
    slug: 'marseille',
    name: 'Marseille',
    at: 'à Marseille',
    country: 'FR',
    region: 'Provence-Alpes-Côte d\'Azur',
    localInfo:
      'Marseille est une ville à la culture sportive intense, portée par ses quartiers et ses clubs de proximité. Le sport amateur y est particulièrement vivace, avec un tissu dense de clubs de handball, football et basketball dans les arrondissements nord comme sud. La métropole Aix-Marseille-Provence compte parmi les plus actives de France pour la pratique sportive associative.',
  },
  {
    slug: 'lyon',
    name: 'Lyon',
    at: 'à Lyon',
    country: 'FR',
    region: 'Auvergne-Rhône-Alpes',
    localInfo:
      'Lyon et sa métropole accueillent plus de 600 clubs sportifs amateurs toutes disciplines confondues. L\'Auvergne-Rhône-Alpes est l\'une des régions les plus dynamiques de France pour le handball et le basketball, avec plusieurs clubs évoluant en ligues nationales. Le tissu associatif sportif lyonnais est reconnu pour son professionnalisme et son engagement partenaires.',
  },
  {
    slug: 'toulouse',
    name: 'Toulouse',
    at: 'à Toulouse',
    country: 'FR',
    region: 'Occitanie',
    localInfo:
      'Toulouse est la capitale incontestée du rugby français, mais la ville est aussi un vivier majeur pour le handball — l\'Occitanie héberge plusieurs clubs de haut niveau régional. Le tissu amateur toulousain est dense, engagé, et les matchs à domicile drainent des supporters fidèles et des partenaires locaux impliqués. Un terrain idéal pour la régie digitale.',
  },
  {
    slug: 'nice',
    name: 'Nice',
    at: 'à Nice',
    country: 'FR',
    region: 'Provence-Alpes-Côte d\'Azur',
    localInfo:
      'Nice et la Côte d\'Azur bénéficient d\'une pratique sportive intense grâce à leur climat et à leur densité de population. La métropole niçoise concentre une forte activité amateur dans le football, le volleyball et les sports collectifs en salle. La présence de nombreuses entreprises locales en fait un territoire particulièrement favorable à la valorisation de partenaires sportifs.',
  },
  {
    slug: 'nantes',
    name: 'Nantes',
    at: 'à Nantes',
    country: 'FR',
    region: 'Pays de la Loire',
    localInfo:
      'Nantes est l\'une des capitales du handball français — la Loire-Atlantique figure régulièrement parmi les départements les plus actifs pour ce sport. Plus largement, les Pays de la Loire affichent un taux de licenciés sportifs parmi les plus élevés de France. Les clubs nantais bénéficient d\'un tissu économique local fort, propice à la recherche de partenaires et au développement de la régie digitale.',
  },
  {
    slug: 'montpellier',
    name: 'Montpellier',
    at: 'à Montpellier',
    country: 'FR',
    region: 'Occitanie',
    localInfo:
      'Ville universitaire et sportive, Montpellier affiche une forte densité de clubs amateurs portée par sa population jeune et dynamique. Le handball y est une tradition ancrée depuis des décennies. La présence d\'un écosystème d\'entreprises tech et de PME régionales en fait un terrain fertile pour la valorisation de partenaires via des écrans digitaux en salle.',
  },
  {
    slug: 'strasbourg',
    name: 'Strasbourg',
    at: 'à Strasbourg',
    country: 'FR',
    region: 'Grand Est',
    localInfo:
      'Strasbourg et l\'Alsace ont une forte tradition sportive, notamment en handball et en football. La région Grand Est se distingue par un tissu associatif sportif particulièrement organisé, héritage d\'une culture germanique de l\'engagement associatif. Les clubs strasbourgeois sont reconnus pour leur sérieux dans la gestion partenaires — un atout pour rentabiliser rapidement une solution de régie digitale.',
  },
  {
    slug: 'bordeaux',
    name: 'Bordeaux',
    at: 'à Bordeaux',
    country: 'FR',
    region: 'Nouvelle-Aquitaine',
    localInfo:
      'Bordeaux et la Nouvelle-Aquitaine représentent l\'une des premières régions de France pour le rugby amateur, mais aussi un bassin solide pour le football, le basketball et le handball. Le dynamisme économique bordelais attire des entreprises locales prêtes à s\'engager comme partenaires de clubs sportifs — un contexte idéal pour maximiser la valeur de votre régie digitale.',
  },
  {
    slug: 'lille',
    name: 'Lille',
    at: 'à Lille',
    country: 'FR',
    region: 'Hauts-de-France',
    localInfo:
      'Lille et sa métropole abritent l\'un des bassins les plus denses de clubs amateurs du nord de la France. Les Hauts-de-France ont une culture sportive profondément ancrée dans les territoires, avec une forte pratique du football, du handball et du volleyball. Le tissu industriel et commercial local offre de nombreuses opportunités de partenariats pour les clubs qui se dotent d\'une solution de communication digitale.',
  },
  { slug: 'rennes', name: 'Rennes', at: 'à Rennes', country: 'FR', region: 'Bretagne' },
  { slug: 'reims', name: 'Reims', at: 'à Reims', country: 'FR', region: 'Grand Est' },
  { slug: 'le-havre', name: 'Le Havre', at: 'au Havre', country: 'FR', region: 'Normandie' },
  { slug: 'saint-etienne', name: 'Saint-Étienne', at: 'à Saint-Étienne', country: 'FR', region: 'Auvergne-Rhône-Alpes' },
  { slug: 'toulon', name: 'Toulon', at: 'à Toulon', country: 'FR', region: 'Provence-Alpes-Côte d\'Azur' },
  { slug: 'grenoble', name: 'Grenoble', at: 'à Grenoble', country: 'FR', region: 'Auvergne-Rhône-Alpes' },
  { slug: 'dijon', name: 'Dijon', at: 'à Dijon', country: 'FR', region: 'Bourgogne-Franche-Comté' },
  { slug: 'angers', name: 'Angers', at: 'à Angers', country: 'FR', region: 'Pays de la Loire' },
  { slug: 'nimes', name: 'Nîmes', at: 'à Nîmes', country: 'FR', region: 'Occitanie' },
  { slug: 'villeurbanne', name: 'Villeurbanne', at: 'à Villeurbanne', country: 'FR', region: 'Auvergne-Rhône-Alpes' },
  { slug: 'le-mans', name: 'Le Mans', at: 'au Mans', country: 'FR', region: 'Pays de la Loire' },
  { slug: 'aix-en-provence', name: 'Aix-en-Provence', at: 'à Aix-en-Provence', country: 'FR', region: 'Provence-Alpes-Côte d\'Azur' },
  { slug: 'clermont-ferrand', name: 'Clermont-Ferrand', at: 'à Clermont-Ferrand', country: 'FR', region: 'Auvergne-Rhône-Alpes' },
  { slug: 'brest', name: 'Brest', at: 'à Brest', country: 'FR', region: 'Bretagne' },
  { slug: 'tours', name: 'Tours', at: 'à Tours', country: 'FR', region: 'Centre-Val de Loire' },
  { slug: 'amiens', name: 'Amiens', at: 'à Amiens', country: 'FR', region: 'Hauts-de-France' },
  { slug: 'limoges', name: 'Limoges', at: 'à Limoges', country: 'FR', region: 'Nouvelle-Aquitaine' },
  { slug: 'annecy', name: 'Annecy', at: 'à Annecy', country: 'FR', region: 'Auvergne-Rhône-Alpes' },
  { slug: 'perpignan', name: 'Perpignan', at: 'à Perpignan', country: 'FR', region: 'Occitanie' },
  { slug: 'metz', name: 'Metz', at: 'à Metz', country: 'FR', region: 'Grand Est' },
  { slug: 'besancon', name: 'Besançon', at: 'à Besançon', country: 'FR', region: 'Bourgogne-Franche-Comté' },
  { slug: 'orleans', name: 'Orléans', at: 'à Orléans', country: 'FR', region: 'Centre-Val de Loire' },
  { slug: 'mulhouse', name: 'Mulhouse', at: 'à Mulhouse', country: 'FR', region: 'Grand Est' },
  { slug: 'rouen', name: 'Rouen', at: 'à Rouen', country: 'FR', region: 'Normandie' },
  { slug: 'caen', name: 'Caen', at: 'à Caen', country: 'FR', region: 'Normandie' },
  { slug: 'nancy', name: 'Nancy', at: 'à Nancy', country: 'FR', region: 'Grand Est' },
  { slug: 'avignon', name: 'Avignon', at: 'à Avignon', country: 'FR', region: 'Provence-Alpes-Côte d\'Azur' },
  { slug: 'poitiers', name: 'Poitiers', at: 'à Poitiers', country: 'FR', region: 'Nouvelle-Aquitaine' },
  { slug: 'pau', name: 'Pau', at: 'à Pau', country: 'FR', region: 'Nouvelle-Aquitaine' },
  { slug: 'la-rochelle', name: 'La Rochelle', at: 'à La Rochelle', country: 'FR', region: 'Nouvelle-Aquitaine' },
  { slug: 'colmar', name: 'Colmar', at: 'à Colmar', country: 'FR', region: 'Grand Est' },
  { slug: 'bayonne', name: 'Bayonne', at: 'à Bayonne', country: 'FR', region: 'Nouvelle-Aquitaine' },
  { slug: 'chambery', name: 'Chambéry', at: 'à Chambéry', country: 'FR', region: 'Auvergne-Rhône-Alpes' },
  { slug: 'quimper', name: 'Quimper', at: 'à Quimper', country: 'FR', region: 'Bretagne' },
  { slug: 'vannes', name: 'Vannes', at: 'à Vannes', country: 'FR', region: 'Bretagne' },
  { slug: 'la-roche-sur-yon', name: 'La Roche-sur-Yon', at: 'à La Roche-sur-Yon', country: 'FR', region: 'Pays de la Loire' },
  { slug: 'niort', name: 'Niort', at: 'à Niort', country: 'FR', region: 'Nouvelle-Aquitaine' },
  { slug: 'laval', name: 'Laval', at: 'à Laval', country: 'FR', region: 'Pays de la Loire' },
  { slug: 'lorient', name: 'Lorient', at: 'à Lorient', country: 'FR', region: 'Bretagne' },
  { slug: 'troyes', name: 'Troyes', at: 'à Troyes', country: 'FR', region: 'Grand Est' },
  // ── Belgique (francophone) ───────────────────────────────────────
  { slug: 'bruxelles', name: 'Bruxelles', at: 'à Bruxelles', country: 'BE', region: 'Région de Bruxelles-Capitale' },
  { slug: 'liege', name: 'Liège', at: 'à Liège', country: 'BE', region: 'Wallonie' },
  { slug: 'namur', name: 'Namur', at: 'à Namur', country: 'BE', region: 'Wallonie' },
  { slug: 'charleroi', name: 'Charleroi', at: 'à Charleroi', country: 'BE', region: 'Wallonie' },
  { slug: 'mons', name: 'Mons', at: 'à Mons', country: 'BE', region: 'Wallonie' },
  // ── Suisse romande ───────────────────────────────────────────────
  { slug: 'geneve', name: 'Genève', at: 'à Genève', country: 'CH', region: 'Canton de Genève' },
  { slug: 'lausanne', name: 'Lausanne', at: 'à Lausanne', country: 'CH', region: 'Canton de Vaud' },
  { slug: 'fribourg', name: 'Fribourg', at: 'à Fribourg', country: 'CH', region: 'Canton de Fribourg' },
  { slug: 'neuchatel', name: 'Neuchâtel', at: 'à Neuchâtel', country: 'CH', region: 'Canton de Neuchâtel' },
  { slug: 'sion', name: 'Sion', at: 'à Sion', country: 'CH', region: 'Canton du Valais' },
];

export const sports: Sport[] = [
  {
    slug: 'handball',
    name: 'handball',
    venue: 'gymnase',
    description:
      'Le handball est l\'un des sports collectifs indoor les plus pratiqués en France. Les gymnases accueillent des matchs tout au long de la saison, offrant une audience régulière et engagée à vos partenaires.',
    useCases: [
      'Affichage publicitaire sur écran LED pendant les matchs et les échauffements',
      'Scoring digital en temps réel, visible depuis toutes les tribunes',
      'Diffusion des visuels partenaires entre les deux mi-temps',
      'Animation digitale lors des tournois et compétitions régionales',
    ],
  },
  {
    slug: 'football',
    name: 'football',
    venue: 'stade',
    description:
      'Le football rassemble le plus grand nombre de licenciés en France. Terrains synthétiques ou en gazon naturel, les clubs accueillent des centaines de supporters chaque week-end — une visibilité précieuse pour vos partenaires locaux.',
    useCases: [
      'Panneaux LED en bord de terrain avec rotation automatique des annonceurs',
      'Écran principal pour diffuser les informations club et scores',
      'Animation en temps réel lors des matchs officiels et amicaux',
      'Valorisation des sponsors maillot et partenaires locaux tout au long de la saison',
    ],
  },
  {
    slug: 'basketball',
    name: 'basketball',
    venue: 'salle omnisports',
    description:
      'Le basketball connaît un essor remarquable en France depuis les succès de l\'équipe nationale. Salles omnisports ou gymnases dédiés, l\'ambiance des matchs est idéale pour mettre en valeur vos sponsors sur écran.',
    useCases: [
      'Tableau de score digital avec chronomètre d\'attaque intégré',
      'Écrans LED latéraux pour l\'affichage des partenaires pendant le match',
      'Diffusion de statistiques et informations club en temps réel',
      'Animation digitale lors des tournois et événements club',
    ],
  },
  {
    slug: 'volleyball',
    name: 'volleyball',
    venue: 'gymnase',
    description:
      'Le volleyball attire un public familial et fidèle dans ses gymnases. Les clubs organisent des tournois et compétitions régulières, multipliant les opportunités de visibilité pour vos partenaires tout au long de l\'année.',
    useCases: [
      'Affichage des scores et rotations en temps réel',
      'Écrans LED pour animer les temps morts réglementaires',
      'Valorisation des partenaires lors des journées portes ouvertes et tournois',
      'Diffusion des messages sponsors entre les sets',
    ],
  },
  {
    slug: 'rugby',
    name: 'rugby',
    venue: 'stade',
    description:
      'Le rugby incarne des valeurs fortes de solidarité et d\'engagement. Les clubs amateurs bénéficient d\'une communauté locale très attachée à leurs couleurs — un terrain idéal pour valoriser vos partenaires avant, pendant et après les matchs.',
    useCases: [
      'Grands écrans LED en bord de touche pour l\'affichage des sponsors',
      'Score et chronomètre digitaux visibles depuis toutes les tribunes',
      'Animation des troisièmes mi-temps et événements club',
      'Valorisation des partenaires maillot et fournisseurs officiels',
    ],
  },
  {
    slug: 'badminton',
    name: 'badminton',
    venue: 'gymnase',
    description:
      'Le badminton est le sport de raquette le plus pratiqué en France. Facile d\'accès et pratiqué en salle toute l\'année, les clubs accueillent des joueurs de tous âges — une audience diversifiée pour vos annonceurs locaux.',
    useCases: [
      'Affichage des résultats de tournois interclubs en temps réel',
      'Écrans d\'information pour les adhérents et les visiteurs',
      'Valorisation des partenaires lors des championnats régionaux',
      'Animation digitale lors des journées découverte et initiations',
    ],
  },
];
