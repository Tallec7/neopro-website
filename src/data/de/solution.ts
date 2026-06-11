import type { SolutionPanel, Feature, ColorPanel } from '../solution';

export const solutionPanels: SolutionPanel[] = [
  {
    title: 'Präsentieren Sie Ihre Sponsoren.',
    description:
      'Das ganze Jahr über profitieren Ihre Sponsoren von einer Kommunikationsplattform während Ihrer Spiele, um ihre Neuigkeiten zu teilen. Sie können ihre Inhalte wöchentlich aktualisieren und erhalten Ausstrahlungsberichte.',
  },
  {
    title: 'Feiern Sie Ihre Spieler.',
    description:
      'Auch Ihre Spieler verdienen die Profi-Behandlung. Wir bieten an, ihre Einlaufvideos zu Saisonbeginn zu drehen, zusammen mit allen Arten von Inhalten (Video/Foto) für Ihren Media Day.',
  },
  {
    title: 'Teilen Sie Ihre Neuigkeiten.',
    description:
      'Stellen Sie sicher, dass Ihre Fans keine kommenden Spiele, Vereinsveranstaltungen und Merchandise in Ihrem Shop verpassen.',
  },
];

export const features: Feature[] = [
  {
    title: 'Kein Internet nötig',
    description: 'Kein WLAN in der Halle erforderlich.',
  },
  {
    title: 'Kabellos',
    description:
      'Ferngesteuert von Ihrem Smartphone, das als Fernbedienung dient.',
  },
  {
    title: 'Einfach zu bedienen',
    description:
      'Ultra-vereinfachte Oberfläche, von jedem Ehrenamtlichen am Spieltag nutzbar.',
  },
];

export const colorPanels: ColorPanel[] = [
  {
    title: 'Laufende Betreuung',
    features: [
      'Komplette Erstschulung',
      'Reaktionsschneller technischer Support',
      'Tipps zur Optimierung Ihrer Inhalte',
      'Wöchentliche Videobetreuung & Updates',
      'Volle Autonomie-Option: Admin-Zugang mit visueller/Video-Integration',
    ],
    bgColor: 'bg-[#06263f]',
  },
  {
    title: 'Schlüsselfertige Lösung',
    features: [
      'Vorkonfigurierte Box wird Ihnen geliefert',
      'Einrichtung in unter 5 Minuten',
      'Intuitive und einfache App',
      'Kompatibel mit allen HDMI-Bildschirmen',
    ],
    bgColor: 'bg-[#0a0b0d]',
  },
  {
    title: 'Professionelle Videoproduktion',
    features: [
      'Komplettes Media-Day-Paket (Foto+Video)',
      'Broadcast-Qualität Videovorlagen, anpassbar an Ihre Vereinsfarben',
    ],
    bgColor: 'bg-[#06263f]',
  },
  {
    title: 'Vorteile für Ihren Verein',
    features: [
      'Professionelles und modernes Image',
      'Effektive Kommunikationsplattform',
      'Besser informierte und engagierte Fans',
      'Quantifizierte Sichtbarkeit für Ihre Sponsoren',
      'Bessere Sponsorenbindung',
    ],
    bgColor: 'bg-[#06263f]',
  },
];

export const steps = [
  { number: '1', title: 'Box an den Bildschirm anschließen', description: 'Kompatibel mit jedem Bildschirm' },
  { number: '2', title: 'Mit dem Bildschirm verbinden', description: 'Kein Internet nötig' },
  { number: '3', title: 'Ihr Handy wird zur Fernbedienung', description: 'Von jedem Ehrenamtlichen nutzbar' },
];
