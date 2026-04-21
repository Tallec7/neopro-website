import type { City, Sport } from '../implantations';

// ── Danske håndbold-byer ────────────────────────────────────────
// Fokus: Håndboldligaen, 1. division, stærk amatørscene
export const cities: City[] = [
  {
    slug: 'koebenhavn',
    name: 'København',
    at: 'i København',
    country: 'DK',
    region: 'Region Hovedstaden',
    localInfo:
      'København er Danmarks hovedstad og et voksende centrum for håndbold. Ajax København og KIF Kolding København har skabt en stærk håndbolddtradition i hovedstadsområdet. Med over 600.000 indbyggere og et dynamisk erhvervsliv er sponsormulighederne for lokale klubber enorme.',
    sportHighlights: {
      haandbold:
        'Håndbold i København vokser hurtigt med Ajax København i toppen og en bred amatørscene i hele hovedstadsområdet. Byens mange virksomheder, fra fintech til detailhandel, gør København til et ideelt marked for partnerskaber mellem klubber og lokale sponsorer.',
      fodbold:
        'Fodbold er Københavns mest populære sport med FC København og Brøndby IF som flagskibe samt hundredvis af amatørklubber i de forskellige bydele. Stadionerne og klubhusene i hovedstaden tilbyder et enestående sponsorpotentiale.',
      ishockey:
        'Ishockey i København bæres af Rungsted Seier Capital og flere amatørklubber i regionen. Den danske ishockeyligakultur samler et trofast publikum i arenaerne — et stærkt udgangspunkt for digital sponsorsynlighed.',
    },
  },
  {
    slug: 'aarhus',
    name: 'Aarhus',
    at: 'i Aarhus',
    country: 'DK',
    region: 'Region Midtjylland',
    localInfo:
      'Aarhus er Danmarks næststørste by og en vigtig håndboldhøjborg. Aarhus Håndbold kæmper i toppen af ligaen, og byen har en bred amatørscene med desens af klubber i alle rækker. Det østjyske erhvervsliv bakker aktivt op om lokale sportsklubber.',
    sportHighlights: {
      haandbold:
        'Håndbold er en central del af sportskulturen i Aarhus, med Aarhus Håndbold i toppen af ligaen og et væld af aktive amatørklubber i kommunen. Den østjyske erhvervssektor investerer historisk stærkt i klublivet, hvilket gør sponsorsamarbejder særligt holdbare.',
      fodbold:
        'Fodbold i Aarhus har dybe rødder med AGF som byens flagskib og en tæt amatørscene i hele Midtjylland. De lokale stadioner og klubhuse tilbyder konstant synlighed til sponsorer takket være et engageret publikum.',
      ishockey:
        'Ishockey er vokset støt i Aarhus med klubber som Aarhus Bulldogs og amatørmiljøer i regionen. Byens dynamiske unge publikum gør ishockey-arenaerne til et ideelt rum for digitale sponsorkampagner.',
    },
  },
  {
    slug: 'odense',
    name: 'Odense',
    at: 'i Odense',
    country: 'DK',
    region: 'Region Syddanmark',
    localInfo:
      'Odense er et naturligt centrum for fynsk håndbold. GOG Håndbold er en af ligaens mest traditionsrige klubber, og byen fostrer et rigt amatørmiljø. Fyn har en tæt koncentration af klubber, der alle søger moderne løsninger til sponsorsynlighed.',
    sportHighlights: {
      haandbold:
        'Håndbold er dybt rodfæstet på Fyn, og Odense er øens sportslige epicenter med GOG Håndbold som nationalt traditionshold. Fynske virksomheder — især inden for fødevarer, industri og service — støtter aktivt de mange amatørklubber i området.',
      fodbold:
        'Fodbold i Odense bæres af OB og en meget tæt amatørstruktur spredt ud over hele Fyn. De lokale stadioner tiltrækker trofaste publikummer, hvilket gør skærmløsninger attraktive for fynske sponsorer.',
      ishockey:
        'Ishockey i Odense har en stabil base med Odense Bulldogs, og byens arenaer byder på stemningsfyldte kampdage. Det fynske publikum er loyalt, hvilket gør det til et solidt udgangspunkt for tilbagevendende sponsorsynlighed.',
    },
  },
  {
    slug: 'aalborg',
    name: 'Aalborg',
    at: 'i Aalborg',
    country: 'DK',
    region: 'Region Nordjylland',
    localInfo:
      'Aalborg Håndbold er et af de mest succesrige hold i dansk håndbold og har spillet Champions League-finaler. Den nordjyske håndbolddkultur er dybt forankret, og amatørklubberne nyder godt af en engageret sponsorbase, der værdsætter lokal sport.',
  },
  {
    slug: 'herning',
    name: 'Herning',
    at: 'i Herning',
    country: 'DK',
    region: 'Region Midtjylland',
    localInfo:
      'Herning er håndboldhovedstaden i Danmark. Jysk Arena er hjemmebane for landsholdet, og BSV (nu Bjerringbro-Silkeborg) har sin base i nærområdet. Midt- og Vestjylland har den højeste håndboldtæthed i verden — en unik mulighed for digital klubkommunikation.',
  },
  {
    slug: 'holstebro',
    name: 'Holstebro',
    at: 'i Holstebro',
    country: 'DK',
    region: 'Region Midtjylland',
    localInfo:
      'TTH Holstebro er en institution i dansk håndbold. Vestjylland er kernen i dansk håndboldkultur, og Holstebro er et perfekt eksempel på, hvordan en mellemstor by kan opretholde håndbold på højeste niveau. Amatørklubberne i området er aktive og søger digitale løsninger.',
  },
  {
    slug: 'kolding',
    name: 'Kolding',
    at: 'i Kolding',
    country: 'DK',
    region: 'Region Syddanmark',
    localInfo:
      'KIF Kolding er en af de mest kendte håndboldbklubber i Danmark. Trekantsområdet (Kolding-Vejle-Fredericia) har en stærk erhvervsbase og en levende håndboldscene fra elite til bredde. Sponsorer i regionen er vant til at støtte lokale sportsklubber.',
  },
  {
    slug: 'silkeborg',
    name: 'Silkeborg',
    at: 'i Silkeborg',
    country: 'DK',
    region: 'Region Midtjylland',
    localInfo:
      'Bjerringbro-Silkeborg (BSV) repræsenterer det bedste af midtjysk håndbold. Området er hjertet af dansk håndbold med en uovertruffen tæthed af klubber og spillere. Den lokale erhvervsstruktur med mange SMV\'er giver et stærkt fundament for klubsponsoring.',
  },
  {
    slug: 'esbjerg',
    name: 'Esbjerg',
    at: 'i Esbjerg',
    country: 'DK',
    region: 'Region Syddanmark',
    localInfo:
      'Team Esbjerg er en dominerende kraft i dansk kvindehåndbold og har markeret sig internationalt. Esbjerg-området har en stærk sportskultur, og energisektoren giver et solidt sponsorgrundlag. Digitale løsninger til haller er et naturligt næste skridt for regionens klubber.',
  },
  {
    slug: 'fredericia',
    name: 'Fredericia',
    at: 'i Fredericia',
    country: 'DK',
    region: 'Region Syddanmark',
    localInfo:
      'Fredericia ligger centralt i Trekantsområdet og har en aktiv håndboldscene. Byen er logistisk knudepunkt for hele Danmark, og det lokale erhvervsliv er engageret i at støtte sportsklubber. Amatørhåndbold blomstrer i alle aldersgrupper.',
  },
  {
    slug: 'viborg',
    name: 'Viborg',
    at: 'i Viborg',
    country: 'DK',
    region: 'Region Midtjylland',
    localInfo:
      'Viborg HK er en legende i dansk kvindehåndbold med adskillige Champions League-titler. Selvom holdet har gennemgået forandringer, lever håndbolddkulturen stærkt videre i byen og hele Viborg-området. Amatørklubberne nyder godt af den dybe håndbolddtradition.',
  },
  {
    slug: 'horsens',
    name: 'Horsens',
    at: 'i Horsens',
    country: 'DK',
    region: 'Region Midtjylland',
    localInfo:
      'Horsens er en dynamisk by med en aktiv håndboldscene. Beliggende i det østjyske bybånd drager byen fordel af et stærkt erhvervsliv og en sportskultur, der favner alt fra elite til bredde. Digitale skærmløsninger er et naturligt skridt for hallerne i området.',
  },
  {
    slug: 'soenderborg',
    name: 'Sønderborg',
    at: 'i Sønderborg',
    country: 'DK',
    region: 'Region Syddanmark',
    localInfo:
      'SønderjyskE Håndbold repræsenterer den sønderjyske håndboldtradition, der er stærkt påvirket af nærheden til den tyske grænse og den nordtyske håndbolddkultur. Området har en unik tværnational sportskultur, og klubberne søger moderne løsninger til at professionalisere deres kampdage.',
  },
  {
    slug: 'randers',
    name: 'Randers',
    at: 'i Randers',
    country: 'DK',
    region: 'Region Midtjylland',
    localInfo:
      'Randers HK har en lang tradition i dansk håndbold. Byen er en del af det stærke midtjyske håndboldmiljø og har en engageret fanbase. Det lokale erhvervsliv ser positivt på at investere i sportsklubbers synlighed og professionalisering.',
  },
  {
    slug: 'skanderborg',
    name: 'Skanderborg',
    at: 'i Skanderborg',
    country: 'DK',
    region: 'Region Midtjylland',
    localInfo:
      'Skanderborg Håndbold (nu Skanderborg-Aarhus) er et eksempel på, hvordan samarbejde mellem mindre og større byer kan løfte håndbold. Området har en stærk foreningskultur, og digitale løsninger til sportshaller er efterspurgte blandt de mange lokale klubber.',
  },
];

// ── Håndbold-specifikke data ───────────────────────────────────
export const sports: Sport[] = [
  {
    slug: 'haandbold',
    name: 'håndbold',
    venue: 'idrætshal',
    description:
      'Danmark er verdens mest håndbolddgale nation. Med Håndboldligaen som en af Europas stærkeste ligaer og over 800 klubber tilbyder dansk håndbold en unik kombination af elitesport og breddeidræt — ideelt for digitale klubløsninger.',
    useCases: [
      'Sponsorlogoer og -videoer på hallens skærm under kampene',
      'Spillerpræsentationer og indløbsvideoer før kampstart',
      'Live-stilling og timeout-animationer på skærmen',
      'Klubannonceringer: næste kampe, events og merchandise',
    ],
  },
  {
    slug: 'fodbold',
    name: 'fodbold',
    venue: 'stadion',
    description:
      'Fodbold er Danmarks mest populære sport med tusindvis af klubber. Fra Superligaen til serie 6 tilbyder dansk fodbold et engageret publikum — og digitale skærmløsninger styrker sponsorernes synlighed.',
    useCases: [
      'Sponsorvideoer på LED-skærme under halvlegen',
      'Holdpræsentationer før kampstart',
      'Live-stilling og kampstatistikker',
      'Event-annonceringer og billetsalg',
    ],
  },
  {
    slug: 'ishockey',
    name: 'ishockey',
    venue: 'ishockey-arena',
    description:
      'Ishockey har en passioneret fanbase i Danmark. Metal Ligaen og divisionsklubberne tilbyder intense kampdage, hvor digitale skærmløsninger forstærker atmosfæren og sponsorernes synlighed.',
    useCases: [
      'Sponsorvideoer under periodepauserne',
      'Spillerpræsentationer på hallens skærm',
      'Live-stilling og straftidsvisning',
      'Fan-engagement: konkurrencer og kampaktiviteter',
    ],
  },
];
