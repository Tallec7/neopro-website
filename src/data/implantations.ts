export interface City {
  slug: string;
  name: string;
  at: string; // "à Lyon", "au Havre", "à La Rochelle"
  country: 'FR' | 'BE' | 'CH' | 'DE' | 'AT' | 'DK' | 'GB' | 'US' | 'CA' | 'ES';
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
  {
    slug: 'rennes',
    name: 'Rennes',
    at: 'à Rennes',
    country: 'FR',
    region: 'Bretagne',
    localInfo:
      'Rennes est une ville jeune et dynamique, capitale de la Bretagne, avec une scène sportive amateur particulièrement active. Le basketball et le handball y sont très populaires, avec plusieurs clubs évoluant en ligues régionales. La présence de grandes entreprises tech et de startups rennaises, ainsi qu\'un tissu dense de PME bretonnes, offre un potentiel réel pour la valorisation de partenaires via des solutions digitales.',
  },
  {
    slug: 'reims',
    name: 'Reims',
    at: 'à Reims',
    country: 'FR',
    region: 'Grand Est',
    localInfo:
      'Reims est une ville à l\'identité sportive marquée, portée par un tissu associatif solide dans le Grand Est. La présence d\'entreprises du secteur agroalimentaire et de la filière champagne en fait un territoire propice au parrainage sportif. Les clubs rémois bénéficient d\'un bassin économique actif et d\'un public local engagé, idéal pour rentabiliser rapidement une solution de régie digitale.',
  },
  {
    slug: 'le-havre',
    name: 'Le Havre',
    at: 'au Havre',
    country: 'FR',
    region: 'Normandie',
    localInfo:
      'Le Havre est un port industriel majeur avec une longue tradition ouvrière du sport collectif. La ville compte de nombreux clubs amateurs de football, handball et basketball. Son tissu économique lié au port, à la logistique et aux industries normandes offre des opportunités réelles de partenariats pour les clubs sportifs qui se modernisent avec des solutions de communication digitale.',
  },
  {
    slug: 'saint-etienne',
    name: 'Saint-Étienne',
    at: 'à Saint-Étienne',
    country: 'FR',
    region: 'Auvergne-Rhône-Alpes',
    localInfo:
      'Saint-Étienne est l\'une des villes les plus sportives de France. La passion du football y est légendaire, mais elle s\'étend à tous les sports collectifs amateurs. Ce terreau culturel sport est un atout pour les clubs qui cherchent partenaires et audience. Le tissu industriel local — acier, mécanique, PME de la Loire — constitue un réservoir de sponsors naturels prêts à valoriser leur image via des écrans digitaux.',
  },
  {
    slug: 'toulon',
    name: 'Toulon',
    at: 'à Toulon',
    country: 'FR',
    region: 'Provence-Alpes-Côte d\'Azur',
    localInfo:
      'Toulon et sa métropole concentrent un réseau dense de clubs de handball, basketball et volleyball, portés par une culture sportive très forte. La présence de la Marine nationale et d\'entreprises locales dynamiques offre un beau potentiel de partenariats pour les clubs sportifs. La Métropole TPM est un territoire favorable au développement de la régie digitale pour les clubs amateurs.',
  },
  {
    slug: 'grenoble',
    name: 'Grenoble',
    at: 'à Grenoble',
    country: 'FR',
    region: 'Auvergne-Rhône-Alpes',
    localInfo:
      'Grenoble est une ville à forte identité sportive et technologique. Le sport amateur indoor y est très développé grâce au tissu universitaire et aux salariés des grandes entreprises tech de la région (ST Microelectronics, Schneider Electric, Soitec). Les clubs grenoblois bénéficient d\'un bassin de partenaires potentiels parmi les plus importants de France, prêts à s\'engager dans des projets de communication innovants.',
  },
  {
    slug: 'dijon',
    name: 'Dijon',
    at: 'à Dijon',
    country: 'FR',
    region: 'Bourgogne-Franche-Comté',
    localInfo:
      'Dijon est une ville à la vie sportive associative très active, reconnue notamment pour son basketball. La Côte-d\'Or accueille des clubs de handball et de basketball bien structurés qui évoluent en ligues régionales et nationales. Le tissu économique bourguignon — agroalimentaire, industries diverses, commerces — offre des opportunités concrètes de partenariats pour les clubs qui modernisent leur communication.',
  },
  {
    slug: 'angers',
    name: 'Angers',
    at: 'à Angers',
    country: 'FR',
    region: 'Pays de la Loire',
    localInfo:
      'Angers est une ville universitaire dynamique avec une forte tradition sportive dans le handball et le football. La Maine-et-Loire compte parmi les départements les plus actifs pour la pratique sportive associative en France. Le dynamisme économique angevin — agriculture, high-tech, santé — offre un vivier de partenaires locaux pour les clubs souhaitant valoriser leurs espaces digitaux.',
  },
  {
    slug: 'nimes',
    name: 'Nîmes',
    at: 'à Nîmes',
    country: 'FR',
    region: 'Occitanie',
    localInfo:
      'Nîmes est une ville du Gard avec un tissu sportif collectif très actif, notamment dans le handball et le football. Le tissu économique gardois — PME locales, grandes enseignes de distribution, tourisme — constitue un réservoir de partenaires potentiels pour les clubs qui se dotent de solutions de communication modernes. Les clubs nîmois bénéficient d\'un public local fidèle et d\'une culture sportive ancrée.',
  },
  {
    slug: 'villeurbanne',
    name: 'Villeurbanne',
    at: 'à Villeurbanne',
    country: 'FR',
    region: 'Auvergne-Rhône-Alpes',
    localInfo:
      'Villeurbanne, deuxième ville de la métropole lyonnaise, est reconnue pour son excellence sportive — l\'ASVEL en est l\'ambassadeur mondial. Cette culture du sport professionnel rejaillit sur le tissu amateur : les clubs villeurbannais sont très organisés et leurs dirigeants comprennent la valeur de la communication digitale. La densité d\'entreprises dans la métropole lyonnaise offre un potentiel exceptionnel de partenariats.',
  },
  {
    slug: 'le-mans',
    name: 'Le Mans',
    at: 'au Mans',
    country: 'FR',
    region: 'Pays de la Loire',
    localInfo:
      'Le Mans est célèbre pour ses 24 Heures automobile, mais c\'est aussi une ville où le sport collectif amateur est très dynamique. La Sarthe compte de nombreux clubs de handball, basketball et football bien structurés. L\'économie locale — industrie automobile (Renault, Faurecia) et PME sarthoises — offre des opportunités concrètes pour les clubs sportifs qui cherchent à valoriser leurs partenaires avec des solutions digitales.',
  },
  {
    slug: 'aix-en-provence',
    name: 'Aix-en-Provence',
    at: 'à Aix-en-Provence',
    country: 'FR',
    region: 'Provence-Alpes-Côte d\'Azur',
    localInfo:
      'Aix-en-Provence est une ville universitaire et économique dynamique de la métropole Aix-Marseille, avec un tissu sportif amateur particulièrement développé. La présence de grandes entreprises et d\'un écosystème de startups en fait un territoire propice à la valorisation de partenaires via des solutions digitales. Les clubs aixois bénéficient d\'une audience éduquée et d\'un réseau économique local très actif.',
  },
  {
    slug: 'clermont-ferrand',
    name: 'Clermont-Ferrand',
    at: 'à Clermont-Ferrand',
    country: 'FR',
    region: 'Auvergne-Rhône-Alpes',
    localInfo:
      'Clermont-Ferrand est l\'une des villes les plus sportives de France. Le sport amateur y est très structuré, avec des clubs de handball et de basketball bien installés en ligues régionales. Michelin et les entreprises de la filière industrielle auvergnate sont des partenaires naturels pour les clubs qui souhaitent moderniser leur communication — une ville idéale pour lancer une solution de régie digitale.',
  },
  {
    slug: 'brest',
    name: 'Brest',
    at: 'à Brest',
    country: 'FR',
    region: 'Bretagne',
    localInfo:
      'Brest est une ville maritime et militaire de l\'extrême ouest breton, avec une culture sportive portée par ses clubs de football, handball et volleyball. La présence de la Marine nationale, de Naval Group et des entreprises du tissu breton en fait un territoire favorable au parrainage sportif. Les clubs brestois bénéficient d\'une communauté locale très fidèle et d\'une économie locale dynamique.',
  },
  {
    slug: 'tours',
    name: 'Tours',
    at: 'à Tours',
    country: 'FR',
    region: 'Centre-Val de Loire',
    localInfo:
      'Tours est une ville universitaire du Centre-Val de Loire, avec un tissu associatif sportif actif porté par une importante population étudiante. Le handball et le basketball y sont bien représentés. Le tissu économique tourangeau — pharmaceutique, agroalimentaire, tourisme — offre de belles perspectives de partenariats pour les clubs qui se modernisent avec des solutions de régie digitale.',
  },
  {
    slug: 'amiens',
    name: 'Amiens',
    at: 'à Amiens',
    country: 'FR',
    region: 'Hauts-de-France',
    localInfo:
      'Amiens est la capitale de la Somme, une ville où le sport collectif amateur est très ancré dans la vie sociale et associative. Les clubs amiénois bénéficient d\'un tissu économique local actif — industrie, logistique, services — avec des entreprises prêtes à s\'engager comme partenaires sportifs. Football, handball et volleyball y sont particulièrement populaires auprès des licenciés des Hauts-de-France.',
  },
  {
    slug: 'limoges',
    name: 'Limoges',
    at: 'à Limoges',
    country: 'FR',
    region: 'Nouvelle-Aquitaine',
    localInfo:
      'Limoges est connue pour son basketball de très haut niveau (Limoges CSP), ce qui a créé une culture du sport collectif très forte dans toute la Haute-Vienne. Les clubs amateurs locaux bénéficient de cet héritage, d\'un public averti et de dirigeants habitués aux exigences du haut niveau. Le tissu économique limousin — porcelaine, industrie, services — offre des opportunités de partenariats pour les clubs modernes.',
  },
  {
    slug: 'annecy',
    name: 'Annecy',
    at: 'à Annecy',
    country: 'FR',
    region: 'Auvergne-Rhône-Alpes',
    localInfo:
      'Annecy est une ville alpine à fort pouvoir d\'achat, où la pratique sportive est très développée et valorisée. La Haute-Savoie accueille de nombreux clubs de sports collectifs indoor bien organisés. Le tissu économique savoyard — industrie de précision, tourisme haut de gamme, PME innovantes — offre un beau potentiel de partenariats de qualité pour les clubs sportifs qui se modernisent.',
  },
  {
    slug: 'perpignan',
    name: 'Perpignan',
    at: 'à Perpignan',
    country: 'FR',
    region: 'Occitanie',
    localInfo:
      'Perpignan est la capitale du rugby catalan, mais aussi une ville où le handball et le football amateur sont très actifs. Les Pyrénées-Orientales ont une culture du sport collectif portée par une communauté locale très engagée. Le tissu économique local — agriculture, commerce, tourisme — et la fierté identitaire catalane en font un territoire propice au partenariat sportif via des solutions de communication modernes.',
  },
  {
    slug: 'metz',
    name: 'Metz',
    at: 'à Metz',
    country: 'FR',
    region: 'Grand Est',
    localInfo:
      'Metz est une ville du Grand Est à forte tradition sportive, portée par un tissu associatif actif et structuré. La Moselle, avec son tissu industriel diversifié et ses entreprises de services, constitue un bon réservoir de partenaires pour les clubs qui adoptent des solutions de régie digitale. Les clubs messins bénéficient d\'une audience locale engagée et d\'une ville qui soutient activement le sport amateur.',
  },
  {
    slug: 'besancon',
    name: 'Besançon',
    at: 'à Besançon',
    country: 'FR',
    region: 'Bourgogne-Franche-Comté',
    localInfo:
      'Besançon est la capitale de la Franche-Comté, une région où le sport collectif amateur est très structuré et bien encadré. Microtechnique, horlogerie, industrie de précision — le tissu économique bisontin est composé d\'entreprises de qualité, soucieuses de leur image et prêtes à valoriser leur marque via le sponsoring sportif local. Les clubs de handball et de basketball y bénéficient d\'un ancrage local fort.',
  },
  {
    slug: 'orleans',
    name: 'Orléans',
    at: 'à Orléans',
    country: 'FR',
    region: 'Centre-Val de Loire',
    localInfo:
      'Orléans est une ville en pleine croissance à une heure de Paris, avec un tissu sportif amateur dynamique. Le Loiret concentre de nombreux clubs de basketball, handball et volleyball. La présence d\'entreprises logistiques, pharmaceutiques et de services liées à la proximité parisienne offre un potentiel réel de partenariats pour les clubs qui modernisent leur communication avec des outils digitaux.',
  },
  {
    slug: 'mulhouse',
    name: 'Mulhouse',
    at: 'à Mulhouse',
    country: 'FR',
    region: 'Grand Est',
    localInfo:
      'Mulhouse est une ville industrielle du Haut-Rhin, avec une forte culture sportive héritée de son histoire ouvrière. Le handball et le football y sont très populaires. Le tissu économique alsacien — chimie, textile, PME dynamiques — offre des opportunités de partenariats pour les clubs sportifs qui se dotent d\'outils de communication modernes. Les clubs mulhousiens bénéficient d\'un public local fidèle et engagé.',
  },
  {
    slug: 'rouen',
    name: 'Rouen',
    at: 'à Rouen',
    country: 'FR',
    region: 'Normandie',
    localInfo:
      'Rouen est la capitale normande, une métropole en développement rapide où le sport collectif amateur est particulièrement actif. Les clubs rouennais bénéficient d\'un tissu économique dynamique — logistique, industrie chimique, services — et d\'une audience régulière lors des matchs à domicile. La Seine-Maritime offre un bon potentiel de partenariats pour les clubs qui adoptent la régie digitale.',
  },
  {
    slug: 'caen',
    name: 'Caen',
    at: 'à Caen',
    country: 'FR',
    region: 'Normandie',
    localInfo:
      'Caen est une ville universitaire normande avec un tissu sportif amateur très actif, notamment en football, handball et basketball. Le Calvados offre un tissu économique varié — agroalimentaire, industrie, commerce — propice au partenariat sportif local. Les clubs caennais bénéficient d\'une communauté locale engagée et du soutien institutionnel de la ville pour le développement du sport amateur.',
  },
  {
    slug: 'nancy',
    name: 'Nancy',
    at: 'à Nancy',
    country: 'FR',
    region: 'Grand Est',
    localInfo:
      'Nancy est une ville du Grand Est à l\'identité culturelle et sportive forte. La Meurthe-et-Moselle compte de nombreux clubs amateurs bien structurés, évoluant dans un environnement associatif exigeant. Le tissu économique nancéien — industrie, services, commerces — offre des opportunités de partenariats pour les clubs qui modernisent leur communication avec des solutions digitales adaptées.',
  },
  {
    slug: 'avignon',
    name: 'Avignon',
    at: 'à Avignon',
    country: 'FR',
    region: 'Provence-Alpes-Côte d\'Azur',
    localInfo:
      'Avignon est une ville du Vaucluse connue pour son festival culturel mondial, mais aussi un bassin de vie avec une pratique sportive amateur très active. Les clubs avignonnais bénéficient d\'un tissu économique local diversifié — tourisme, agriculture, logistique — et d\'un public fidèle. PACA est l\'une des régions les plus dynamiques pour le sport collectif amateur en France.',
  },
  {
    slug: 'poitiers',
    name: 'Poitiers',
    at: 'à Poitiers',
    country: 'FR',
    region: 'Nouvelle-Aquitaine',
    localInfo:
      'Poitiers est une ville universitaire de la Vienne avec un tissu sportif amateur actif et bien organisé. Les clubs poitevins bénéficient d\'un bassin de vie en croissance, d\'entreprises locales engagées et d\'une culture associative forte héritée de la région. La Nouvelle-Aquitaine offre un cadre favorable au développement de la régie digitale pour les clubs de handball, football et basketball.',
  },
  {
    slug: 'pau',
    name: 'Pau',
    at: 'à Pau',
    country: 'FR',
    region: 'Nouvelle-Aquitaine',
    localInfo:
      'Pau est une ville des Pyrénées-Atlantiques à fort rayonnement régional, avec une tradition sportive importante dans le rugby, le football et le basketball. Le Béarn compte de nombreux clubs amateurs de sports collectifs, soutenus par un tissu économique local actif. La présence d\'entreprises pétrolières et industrielles (TotalEnergies, Safran) en fait un territoire favorable au parrainage sportif local.',
  },
  {
    slug: 'la-rochelle',
    name: 'La Rochelle',
    at: 'à La Rochelle',
    country: 'FR',
    region: 'Nouvelle-Aquitaine',
    localInfo:
      'La Rochelle est une ville maritime dynamique de Nouvelle-Aquitaine, connue pour son rugby de très haut niveau. Cette culture sportive d\'excellence rejaillit sur l\'ensemble du tissu amateur local, avec des clubs de handball, football et basketball très bien structurés. L\'économie rochelaise — tourisme, nautisme, industrie — offre un beau potentiel de partenariats pour les clubs sportifs modernes.',
  },
  {
    slug: 'colmar',
    name: 'Colmar',
    at: 'à Colmar',
    country: 'FR',
    region: 'Grand Est',
    localInfo:
      'Colmar est une ville touristique alsacienne avec un tissu sportif amateur actif et bien ancré dans la vie locale. Le Haut-Rhin concentre de nombreux clubs de handball, football et sports collectifs indoor. Le tissu économique colmarien — viticulture, tourisme, PME alsaciennes — offre des opportunités de partenariats pour les clubs sportifs qui adoptent des solutions de communication modernes.',
  },
  {
    slug: 'bayonne',
    name: 'Bayonne',
    at: 'à Bayonne',
    country: 'FR',
    region: 'Nouvelle-Aquitaine',
    localInfo:
      'Bayonne est une ville basque emblématique, terre de rugby par excellence, mais où le handball et le football amateur sont également très pratiqués. Les clubs basco-béarnais bénéficient d\'une communauté locale très passionnée et engagée. Le tissu économique du Pays Basque — tourisme, agroalimentaire, entreprises innovantes — offre un potentiel de partenariats très attractif pour les clubs sportifs.',
  },
  {
    slug: 'chambery',
    name: 'Chambéry',
    at: 'à Chambéry',
    country: 'FR',
    region: 'Auvergne-Rhône-Alpes',
    localInfo:
      'Chambéry est la préfecture de la Savoie, une ville alpine avec une forte tradition sportive indoor. La Savoie concentre de nombreux clubs de handball, basketball et volleyball bien structurés et ambitieux. Le tissu économique savoyard — industrie, tourisme, PME — offre de belles perspectives de partenariats pour les clubs sportifs qui cherchent à moderniser leur communication et valoriser leurs espaces digitaux.',
  },
  {
    slug: 'quimper',
    name: 'Quimper',
    at: 'à Quimper',
    country: 'FR',
    region: 'Bretagne',
    localInfo:
      'Quimper est la capitale de la Cornouaille, une ville bretonne avec un tissu associatif sportif très actif. Le Finistère est l\'un des départements où la pratique sportive amateur est la plus élevée de France. L\'agroalimentaire breton et les PME locales sont des partenaires naturels pour les clubs qui modernisent leur communication. Le handball y est particulièrement bien développé.',
  },
  {
    slug: 'vannes',
    name: 'Vannes',
    at: 'à Vannes',
    country: 'FR',
    region: 'Bretagne',
    localInfo:
      'Vannes est une ville dynamique du Morbihan, reconnue pour sa qualité de vie et son tissu sportif amateur dense. Le handball et le football y sont particulièrement développés, avec plusieurs clubs évoluant en ligues régionales. L\'économie vannetaise — tourisme, services, PME bretonnes — offre un bon potentiel de partenariats pour les clubs sportifs qui cherchent à valoriser leurs espaces digitaux.',
  },
  {
    slug: 'la-roche-sur-yon',
    name: 'La Roche-sur-Yon',
    at: 'à La Roche-sur-Yon',
    country: 'FR',
    region: 'Pays de la Loire',
    localInfo:
      'La Roche-sur-Yon est la préfecture de la Vendée, département champion de France du sport collectif amateur. Le handball vendéen est particulièrement réputé, avec plusieurs clubs évoluant en divisions nationales. Le tissu économique vendéen — agroalimentaire, industrie — offre un réservoir exceptionnel de partenaires locaux pour les clubs qui adoptent des solutions de régie digitale professionnelles.',
  },
  {
    slug: 'niort',
    name: 'Niort',
    at: 'à Niort',
    country: 'FR',
    region: 'Nouvelle-Aquitaine',
    localInfo:
      'Niort est la capitale française de la mutualité — siège de MAIF, MACIF et Groupama. Ce tissu économique unique en fait un terrain particulièrement propice au partenariat sportif local : des entreprises sensibles aux valeurs du sport collectif, prêtes à s\'engager durablement. Les clubs de handball et de football niortais bénéficient d\'un environnement de partenaires idéal pour rentabiliser la régie digitale.',
  },
  {
    slug: 'laval',
    name: 'Laval',
    at: 'à Laval',
    country: 'FR',
    region: 'Pays de la Loire',
    localInfo:
      'Laval est une ville de la Mayenne avec un tissu sportif amateur actif, notamment dans le football et le handball. La ville entretient une passion historique pour le sport, héritée du Stade Lavallois. Le tissu économique mayennais — agroalimentaire, industrie — et la culture associative forte des Pays de la Loire offrent des opportunités concrètes de partenariats pour les clubs modernes.',
  },
  {
    slug: 'lorient',
    name: 'Lorient',
    at: 'à Lorient',
    country: 'FR',
    region: 'Bretagne',
    localInfo:
      'Lorient est un port breton avec une forte culture sportive maritime et collective. Les clubs lorientais de handball, football et basketball bénéficient d\'une communauté locale engagée et d\'un tissu économique actif — pêche, agroalimentaire, défense (DCNS). La Bretagne est l\'une des régions où le taux de licenciés sportifs est le plus élevé de France, un atout majeur pour les clubs modernes.',
  },
  {
    slug: 'troyes',
    name: 'Troyes',
    at: 'à Troyes',
    country: 'FR',
    region: 'Grand Est',
    localInfo:
      'Troyes est une ville champenoise reconnue pour son dynamisme commercial — capitale du déstockage et du shopping. Les clubs troyens de sports collectifs bénéficient d\'un tissu économique diversifié et d\'une ville en plein développement. L\'Aube, entre textile, logistique et commerces, offre de belles perspectives de partenariats pour les clubs sportifs qui modernisent leur communication.',
  },
  // ── Belgique (francophone) ───────────────────────────────────────
  {
    slug: 'bruxelles',
    name: 'Bruxelles',
    at: 'à Bruxelles',
    country: 'BE',
    region: 'Région de Bruxelles-Capitale',
    localInfo:
      'Bruxelles est la capitale belge et européenne, un carrefour cosmopolite où le sport collectif amateur est très actif. La Région de Bruxelles-Capitale concentre de nombreux clubs de handball, football et basketball portés par une communauté diverse et engagée. La présence d\'institutions européennes, de multinationales et de PME locales fait de Bruxelles un territoire exceptionnel pour valoriser des partenaires via des solutions de régie digitale.',
  },
  {
    slug: 'liege',
    name: 'Liège',
    at: 'à Liège',
    country: 'BE',
    region: 'Wallonie',
    localInfo:
      'Liège est la capitale industrielle et culturelle de Wallonie, avec une identité sportive forte et un tissu associatif très structuré. Les clubs liégeois bénéficient d\'un public passionné et d\'un tissu économique wallon actif — métallurgie, services, PME — avec des entreprises prêtes à s\'engager comme partenaires sportifs via des solutions modernes de communication digitale.',
  },
  {
    slug: 'namur',
    name: 'Namur',
    at: 'à Namur',
    country: 'BE',
    region: 'Wallonie',
    localInfo:
      'Namur est la capitale administrative de la Wallonie, une ville à taille humaine avec un tissu sportif amateur bien structuré et encadré. Les clubs namurois bénéficient d\'un cadre institutionnel favorable et d\'un bassin économique actif. Le handball et le football y sont particulièrement représentés, avec des dirigeants de clubs en recherche de solutions modernes pour valoriser leurs partenaires.',
  },
  {
    slug: 'charleroi',
    name: 'Charleroi',
    at: 'à Charleroi',
    country: 'BE',
    region: 'Wallonie',
    localInfo:
      'Charleroi est une ville industrielle wallonne avec une culture sportive ouvrière très ancrée. Football et handball y sont très populaires, portés par une communauté locale engagée. Le tissu économique carolorégien — industrie, services, PME — offre des opportunités de partenariats pour les clubs qui adoptent des solutions de régie digitale. Les matchs à domicile drainent des audiences fidèles et régulières.',
  },
  {
    slug: 'mons',
    name: 'Mons',
    at: 'à Mons',
    country: 'BE',
    region: 'Wallonie',
    localInfo:
      'Mons est une ville wallonne à l\'identité culturelle et sportive forte, portée par une communauté locale très engagée. Les clubs montois bénéficient d\'entreprises régionales sensibles à l\'image du sport local et prêtes à s\'investir comme partenaires. Le handball et le basketball y sont bien représentés, avec des clubs cherchant à moderniser leur communication pour valoriser davantage leurs espaces digitaux.',
  },
  // ── Suisse romande ───────────────────────────────────────────────
  {
    slug: 'geneve',
    name: 'Genève',
    at: 'à Genève',
    country: 'CH',
    region: 'Canton de Genève',
    localInfo:
      'Genève est une ville cosmopolite et prospère où le sport collectif amateur bénéficie d\'un tissu économique exceptionnel. La présence d\'organisations internationales et de multinationales en fait un territoire où les partenariats sportifs peuvent atteindre un niveau très élevé. Les clubs genevois de handball, basketball et volleyball cherchent à se démarquer avec des solutions de communication modernes et professionnelles.',
  },
  {
    slug: 'lausanne',
    name: 'Lausanne',
    at: 'à Lausanne',
    country: 'CH',
    region: 'Canton de Vaud',
    localInfo:
      'Lausanne est la capitale olympique mondiale, siège du Comité International Olympique. Cette ville sportive par excellence accueille des clubs amateurs de haut niveau relatif, portés par une culture du sport profond. Le Canton de Vaud — horlogerie, finance, tech, universités — offre des opportunités de partenariats exceptionnelles pour les clubs qui adoptent des solutions de régie digitale de qualité.',
  },
  {
    slug: 'fribourg',
    name: 'Fribourg',
    at: 'à Fribourg',
    country: 'CH',
    region: 'Canton de Fribourg',
    localInfo:
      'Fribourg est une ville bilingue suisse avec une forte tradition sportive et une communauté locale très engagée. Les clubs fribourgeois bénéficient d\'un environnement économique de qualité — industrie alimentaire, agroalimentaire, PME locales. La Suisse romande offre un terrain particulièrement favorable à la valorisation de partenaires via des solutions digitales professionnelles dans les clubs sportifs.',
  },
  {
    slug: 'neuchatel',
    name: 'Neuchâtel',
    at: 'à Neuchâtel',
    country: 'CH',
    region: 'Canton de Neuchâtel',
    localInfo:
      'Neuchâtel est une ville horlogère suisse avec un tissu sportif amateur actif et exigeant. Les clubs neuchâtelois bénéficient d\'un environnement économique de qualité, porté par des entreprises horlogères et technologiques réputées. La communauté sportive locale recherche des solutions modernes et professionnelles pour valoriser leurs partenaires lors des matchs et événements.',
  },
  {
    slug: 'sion',
    name: 'Sion',
    at: 'à Sion',
    country: 'CH',
    region: 'Canton du Valais',
    localInfo:
      'Sion est la capitale du Valais, une région alpine suisse où le sport est omniprésent et profondément ancré dans la culture locale. Les clubs sédunois de handball et de volleyball bénéficient d\'une communauté très fidèle. Le tissu économique valaisan — viticulture réputée, tourisme alpin, énergie hydraulique — offre des opportunités de partenariats pour les clubs sportifs qui modernisent leur communication.',
  },
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
