import type { SolutionPanel, Feature, ColorPanel } from '../solution';

export const solutionPanels: SolutionPanel[] = [
  {
    title: 'Fremhæv jeres sponsorer.',
    description:
      'Hele året igennem nyder jeres sponsorer godt af en kommunikationsplatform under jeres kampe til at dele deres nyheder. De kan opdatere deres indhold ugentligt og modtage udsendelsesrapporter.',
  },
  {
    title: 'Fejr jeres spillere.',
    description:
      'Jeres spillere fortjener også professionel behandling. Vi tilbyder at filme deres indløb ved sæsonstart, sammen med alle typer indhold (video/foto) til jeres media day.',
  },
  {
    title: 'Del jeres nyheder.',
    description:
      'Sørg for, at jeres tilhængere ikke går glip af kommende kampe, klubarrangementer og merchandise i jeres shop.',
  },
];

export const features: Feature[] = [
  {
    title: 'Intet internet nødvendigt',
    description: 'Ingen wifi i hallen påkrævet.',
  },
  {
    title: 'Trådløs',
    description:
      'Fjernstyret fra jeres telefon, som fungerer som fjernbetjening.',
  },
  {
    title: 'Nem at bruge',
    description:
      'Ultra-forenklet brugerflade, som enhver frivillig kan betjene på kampdagen.',
  },
];

export const colorPanels: ColorPanel[] = [
  {
    title: 'Løbende support',
    features: [
      'Komplet introduktionsuddannelse',
      'Hurtig teknisk support',
      'Tips til at optimere jeres indhold',
      'Ugentlig videoassistance & opdateringer',
      'Fuld autonomi-mulighed: admin-adgang med visuel/video-integration',
    ],
    bgColor: 'bg-[#3d3036]',
  },
  {
    title: 'Nøglefærdig løsning',
    features: [
      'Forkonfigureret boks leveret til jer',
      'Opsætning på under 5 minutter',
      'Intuitiv og enkel app',
      'Kompatibel med alle HDMI-skærme',
    ],
    bgColor: 'bg-[#423e33]',
  },
  {
    title: 'Professionel videoproduktion',
    features: [
      'Komplet media day-pakke (foto+video)',
      'Broadcast-kvalitet videoskabeloner, tilpasset jeres klubfarver',
    ],
    bgColor: 'bg-[#2f3935]',
  },
  {
    title: 'Fordele for jeres klub',
    features: [
      'Professionelt og moderne image',
      'Effektiv kommunikationsplatform',
      'Bedre informerede og engagerede tilhængere',
      'Kvantificeret synlighed for jeres sponsorer',
      'Bedre sponsorfastholdelse',
    ],
    bgColor: 'bg-[#334244]',
  },
];

export const steps = [
  { number: '1', title: 'Tilslut boksen til skærmen', description: 'Kompatibel med enhver skærm' },
  { number: '2', title: 'Forbind til skærmen', description: 'Intet internet nødvendigt' },
  { number: '3', title: 'Jeres telefon bliver fjernbetjeningen', description: 'Kan bruges af enhver frivillig' },
];
