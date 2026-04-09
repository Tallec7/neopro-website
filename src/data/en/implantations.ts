import type { City, Sport } from '../implantations';

// ── English-speaking markets ──────────────────────────────────
export const cities: City[] = [
  // ── United Kingdom ────────────────────────────────────────────
  {
    slug: 'london',
    name: 'London',
    at: 'in London',
    country: 'GB',
    region: 'Greater London',
    localInfo:
      'London is home to one of the most diverse sports scenes in the world. With thousands of community sports clubs across 32 boroughs, indoor sports thrive in venues from the Copper Box Arena to local leisure centres. The capital hosts clubs competing in the British Basketball League, National Handball League, and Super League Volleyball.',
  },
  {
    slug: 'manchester',
    name: 'Manchester',
    at: 'in Manchester',
    country: 'GB',
    region: 'Greater Manchester',
    localInfo:
      'Manchester has a deeply rooted sporting culture that extends well beyond football. The Manchester Giants compete in the BBL, and the city boasts a thriving grassroots indoor sports scene. Community halls and leisure centres across Greater Manchester host hundreds of handball, basketball, and volleyball sessions each week.',
  },
  {
    slug: 'birmingham',
    name: 'Birmingham',
    at: 'in Birmingham',
    country: 'GB',
    region: 'West Midlands',
    localInfo:
      'Birmingham, host of the 2022 Commonwealth Games, has seen a surge in grassroots sports participation. The city\'s National Indoor Arena and numerous community venues support a vibrant indoor sports culture. Basketball, badminton, and table tennis are particularly popular across the West Midlands.',
  },
  {
    slug: 'leeds',
    name: 'Leeds',
    at: 'in Leeds',
    country: 'GB',
    region: 'West Yorkshire',
    localInfo:
      'Leeds and West Yorkshire are home to a strong community sports network. The city has invested heavily in sports facilities, and indoor sports such as basketball, volleyball, and badminton are growing rapidly. Leeds Beckett University is a major hub for developing sporting talent in the region.',
  },
  {
    slug: 'glasgow',
    name: 'Glasgow',
    at: 'in Glasgow',
    country: 'GB',
    region: 'Scotland',
    localInfo:
      'Glasgow\'s legacy from the 2014 Commonwealth Games continues to fuel indoor sports growth. The Emirates Arena and dozens of community centres support basketball, volleyball, and badminton. The Glasgow Rocks (BBL) and Scottish Handball Association drive competitive indoor sport across central Scotland.',
  },
  {
    slug: 'edinburgh',
    name: 'Edinburgh',
    at: 'in Edinburgh',
    country: 'GB',
    region: 'Scotland',
    localInfo:
      'Edinburgh combines a historic sporting tradition with modern facilities. The city supports a growing indoor sports community, with basketball, volleyball, and badminton clubs competing at regional and national levels. Edinburgh\'s universities also contribute significantly to the grassroots indoor sports ecosystem.',
  },
  {
    slug: 'liverpool',
    name: 'Liverpool',
    at: 'in Liverpool',
    country: 'GB',
    region: 'Merseyside',
    localInfo:
      'Liverpool\'s passionate sports culture extends to indoor disciplines. The city\'s community sports clubs serve thousands of participants across basketball, handball, and volleyball. Merseyside\'s leisure centres and school gyms provide essential venues for grassroots competition and training throughout the year.',
  },
  {
    slug: 'bristol',
    name: 'Bristol',
    at: 'in Bristol',
    country: 'GB',
    region: 'South West England',
    localInfo:
      'Bristol is one of the fastest-growing sports cities in the South West. The Bristol Flyers (BBL) have raised the profile of indoor sport in the region. Community volleyball, badminton, and basketball leagues are thriving, supported by the city\'s investment in modern sports facilities.',
  },
  // ── United States ─────────────────────────────────────────────
  {
    slug: 'new-york',
    name: 'New York',
    at: 'in New York',
    country: 'US',
    region: 'New York State',
    localInfo:
      'New York City has an unrivalled community sports infrastructure with thousands of gyms and recreation centres across five boroughs. Basketball is king in the city\'s parks and indoor courts, while volleyball, futsal, and handball leagues flourish in community centres. The NYC Parks Department alone operates over 1,700 sports facilities.',
  },
  {
    slug: 'los-angeles',
    name: 'Los Angeles',
    at: 'in Los Angeles',
    country: 'US',
    region: 'California',
    localInfo:
      'Los Angeles is a powerhouse for indoor sports, from youth basketball leagues to professional volleyball. The city\'s year-round sports culture, major university programmes, and diverse population drive participation in basketball, volleyball, futsal, and badminton across hundreds of community gyms and recreation centres.',
  },
  {
    slug: 'chicago',
    name: 'Chicago',
    at: 'in Chicago',
    country: 'US',
    region: 'Illinois',
    localInfo:
      'Chicago has a storied basketball tradition and a growing indoor sports community. The Chicago Park District manages over 600 parks with sports facilities. Volleyball, basketball, and futsal leagues operate throughout the year, making Chicago a prime market for digital sports signage in community venues.',
  },
  {
    slug: 'houston',
    name: 'Houston',
    at: 'in Houston',
    country: 'US',
    region: 'Texas',
    localInfo:
      'Houston is one of America\'s most diverse cities, with a thriving community sports scene. Basketball, volleyball, and futsal are hugely popular in the Greater Houston area. The city\'s extensive network of recreation centres and sports complexes serves millions of participants each year.',
  },
  {
    slug: 'phoenix',
    name: 'Phoenix',
    at: 'in Phoenix',
    country: 'US',
    region: 'Arizona',
    localInfo:
      'Phoenix and the greater Valley area are experiencing rapid growth in community sports participation. Indoor sports are particularly popular due to the desert climate, with basketball, volleyball, and badminton thriving in air-conditioned gyms and recreation centres across Maricopa County.',
  },
  {
    slug: 'philadelphia',
    name: 'Philadelphia',
    at: 'in Philadelphia',
    country: 'US',
    region: 'Pennsylvania',
    localInfo:
      'Philadelphia has a rich sporting heritage and a passionate community sports scene. The city\'s recreation centres host competitive basketball, volleyball, and futsal leagues year-round. Philly\'s neighbourhood-based sports culture makes it an ideal market for digital signage solutions that connect clubs with local sponsors.',
  },
  {
    slug: 'san-antonio',
    name: 'San Antonio',
    at: 'in San Antonio',
    country: 'US',
    region: 'Texas',
    localInfo:
      'San Antonio\'s sports culture is deeply embedded in the community, fuelled by the Spurs\' legacy. Youth and adult basketball leagues are extremely popular, alongside growing volleyball and futsal scenes. The city\'s Parks and Recreation department operates dozens of indoor sports facilities serving the local community.',
  },
  // ── Canada ────────────────────────────────────────────────────
  {
    slug: 'toronto',
    name: 'Toronto',
    at: 'in Toronto',
    country: 'CA',
    region: 'Ontario',
    localInfo:
      'Toronto is Canada\'s largest city and a major hub for indoor sports. Basketball has exploded in popularity since the Raptors\' 2019 championship. The Greater Toronto Area supports thousands of community sports clubs across basketball, volleyball, ice hockey, and badminton, with world-class facilities from community centres to the Mattamy Athletic Centre.',
  },
  {
    slug: 'montreal',
    name: 'Montreal',
    at: 'in Montreal',
    country: 'CA',
    region: 'Quebec',
    localInfo:
      'Montreal combines European and North American sports culture, creating a unique indoor sports landscape. Handball has a particularly strong presence thanks to the city\'s French-speaking community. Basketball, volleyball, and ice hockey leagues thrive in community centres and arenas across the Greater Montreal area.',
  },
  {
    slug: 'vancouver',
    name: 'Vancouver',
    at: 'in Vancouver',
    country: 'CA',
    region: 'British Columbia',
    localInfo:
      'Vancouver\'s active lifestyle and diverse population drive a vibrant indoor sports scene. Basketball, volleyball, and badminton are particularly popular, with strong community leagues across Metro Vancouver. The city\'s community centres and recreation facilities host year-round competitions at all levels.',
  },
  {
    slug: 'calgary',
    name: 'Calgary',
    at: 'in Calgary',
    country: 'CA',
    region: 'Alberta',
    localInfo:
      'Calgary\'s long winters make indoor sports essential to the community. Ice hockey, basketball, and volleyball leagues are hugely popular. The city\'s network of recreation centres and community arenas provides excellent venues for digital signage, connecting local sponsors with engaged sports audiences throughout the year.',
  },
  {
    slug: 'ottawa',
    name: 'Ottawa',
    at: 'in Ottawa',
    country: 'CA',
    region: 'Ontario',
    localInfo:
      'Ottawa\'s bilingual community supports a diverse indoor sports scene. Basketball, volleyball, and ice hockey are the most popular indoor disciplines. The National Capital Region\'s recreation facilities and community arenas serve hundreds of clubs, from youth development programmes to competitive adult leagues.',
  },
];

// ── Sports for English-speaking markets ───────────────────────
export const sports: Sport[] = [
  {
    slug: 'handball',
    name: 'Handball',
    venue: 'sports hall',
    description:
      'Handball is growing rapidly in English-speaking countries. From the England Handball Association to USA Team Handball, community clubs are driving participation. Digital signage in sports halls helps clubs engage sponsors and create a professional match-day atmosphere.',
    useCases: [
      'Sponsor logos and videos on the hall screen during matches',
      'Player introductions and team line-up displays before tip-off',
      'Live score updates and timeout animations on screen',
      'Club announcements: upcoming fixtures, events, and merchandise',
    ],
  },
  {
    slug: 'basketball',
    name: 'Basketball',
    venue: 'sports hall',
    description:
      'Basketball is one of the most popular indoor sports in the English-speaking world. From the BBL in the UK to community leagues across the US and Canada, thousands of clubs create exciting match-day experiences — an ideal setting for digital signage to boost sponsor visibility.',
    useCases: [
      'Sponsor loop videos during timeouts and quarter breaks',
      'Player introductions with individual highlight videos',
      'Live score and stats displays throughout the game',
      'Event announcements and merchandise promotions',
    ],
  },
  {
    slug: 'volleyball',
    name: 'Volleyball',
    venue: 'sports hall',
    description:
      'Volleyball is enjoyed by millions across the UK, US, and Canada. Community leagues and school programmes drive strong participation. Digital screens in sports halls enhance the spectator experience and give sponsors maximum visibility between sets.',
    useCases: [
      'Sponsor presentations between sets',
      'Player announcements and team introductions',
      'Live score and set statistics on screen',
      'Club events and youth recruitment promotions',
    ],
  },
  {
    slug: 'futsal',
    name: 'Futsal',
    venue: 'sports hall',
    description:
      'Futsal is the fastest-growing indoor sport in many English-speaking countries. Played in sports halls year-round, it attracts passionate local communities. Digital signage brings a professional edge to futsal events and maximises sponsor exposure.',
    useCases: [
      'Sponsor displays during half-time and breaks',
      'Player and team introductions before kick-off',
      'Live score updates and match statistics',
      'League fixtures and tournament announcements',
    ],
  },
  {
    slug: 'ice-hockey',
    name: 'Ice Hockey',
    venue: 'ice rink',
    description:
      'Ice hockey has a passionate following in the UK, US, and Canada. From the EIHL in Britain to community rinks across North America, clubs at every level benefit from digital signage that enhances the fan experience and delivers sponsor visibility during intense match-day action.',
    useCases: [
      'Sponsor videos during period breaks',
      'Player introductions on the rink-side screen',
      'Live score and penalty displays',
      'Fan engagement: competitions and match-day promotions',
    ],
  },
  {
    slug: 'badminton',
    name: 'Badminton',
    venue: 'sports hall',
    description:
      'Badminton is one of the most widely played indoor sports in the UK and growing across North America. Community clubs and tournament venues benefit from digital signage that showcases sponsors and creates a more engaging atmosphere for players and spectators.',
    useCases: [
      'Sponsor logos displayed between games and during tournaments',
      'Player rankings and draw displays',
      'Live scoring and match progress updates',
      'Club news, coaching sessions, and event promotions',
    ],
  },
  {
    slug: 'table-tennis',
    name: 'Table Tennis',
    venue: 'sports hall',
    description:
      'Table tennis is played in clubs, community centres, and schools across the English-speaking world. Tournaments and league nights draw regular audiences. Digital screens add professionalism and sponsor visibility to venues hosting competitive table tennis.',
    useCases: [
      'Sponsor branding on venue screens during tournaments',
      'Player seedings and bracket displays',
      'Live match scores and round updates',
      'Club membership drives and upcoming event promotions',
    ],
  },
];
