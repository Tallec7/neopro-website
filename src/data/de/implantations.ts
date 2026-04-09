import type { City, Sport } from '../implantations';

// ── Deutsche Handball-Städte ────────────────────────────────────
// Fokus: Bundesliga, 2. Bundesliga, starke Amateurszene
export const cities: City[] = [
  // ── Deutschland ───────────────────────────────────────────────
  {
    slug: 'hamburg',
    name: 'Hamburg',
    at: 'in Hamburg',
    country: 'DE',
    region: 'Hamburg',
    localInfo:
      'Hamburg ist eine der führenden Handballstädte Deutschlands. Der HSV Hamburg und die SG Hamburg-Nord stehen für Spitzenhandball, während über 60 Amateurvereine die Breite der Sportkultur zeigen. Die Hamburger Sponsorenlandschaft bietet ideale Voraussetzungen für digitale Vereinskommunikation.',
  },
  {
    slug: 'berlin',
    name: 'Berlin',
    at: 'in Berlin',
    country: 'DE',
    region: 'Berlin',
    localInfo:
      'Berlin vereint die größte Dichte an Sportvereinen in Deutschland — über 2.400 Clubs mit mehr als 700.000 Mitgliedern. Handball hat mit den Füchsen Berlin einen Bundesliga-Leuchtturm, doch der wahre Reichtum liegt in den Bezirksligen: hunderte Amateurmannschaften suchen nach modernen Lösungen zur Sponsoren-Sichtbarkeit.',
  },
  {
    slug: 'kiel',
    name: 'Kiel',
    at: 'in Kiel',
    country: 'DE',
    region: 'Schleswig-Holstein',
    localInfo:
      'Kiel ist die Hauptstadt des deutschen Handballs. Der THW Kiel, mit über 20 Meistertiteln, prägt die gesamte Region. Schleswig-Holstein hat eine der höchsten Handballdichten Deutschlands — von der Kreisliga bis zur Bundesliga. Die Amateurvereine profitieren von einer handballbegeisterten Sponsorenkultur.',
  },
  {
    slug: 'flensburg',
    name: 'Flensburg',
    at: 'in Flensburg',
    country: 'DE',
    region: 'Schleswig-Holstein',
    localInfo:
      'Flensburg lebt und atmet Handball. Die SG Flensburg-Handewitt gehört seit Jahrzehnten zur absoluten Spitze der Bundesliga. Die Region an der dänischen Grenze vereint deutsche Handballtradition mit skandinavischem Einfluss — eine einzigartige Kombination für Vereinsdigitalisierung.',
  },
  {
    slug: 'magdeburg',
    name: 'Magdeburg',
    at: 'in Magdeburg',
    country: 'DE',
    region: 'Sachsen-Anhalt',
    localInfo:
      'Der SC Magdeburg ist Champions-League-Sieger und Aushängeschild des ostdeutschen Handballs. Die Stadt hat eine stolze Handballtradition, die weit über den Profisport hinausgeht. Die Amateurvereine in Sachsen-Anhalt suchen aktiv nach digitalen Lösungen, um ihre Spieltagserlebnisse zu professionalisieren.',
  },
  {
    slug: 'leipzig',
    name: 'Leipzig',
    at: 'in Leipzig',
    country: 'DE',
    region: 'Sachsen',
    localInfo:
      'Leipzig ist eine der am schnellsten wachsenden Sportstädte Deutschlands. Der SC DHfK Leipzig trägt Handball in der Bundesliga, und die Breite des Vereinssports in Sachsen ist bemerkenswert. Die junge, dynamische Sponsorenszene sucht nach innovativen Wegen, lokale Vereine sichtbar zu unterstützen.',
  },
  {
    slug: 'hannover',
    name: 'Hannover',
    at: 'in Hannover',
    country: 'DE',
    region: 'Niedersachsen',
    localInfo:
      'Niedersachsen gehört zu den stärksten Handballregionen Deutschlands. Die TSV Hannover-Burgdorf spielt in der Bundesliga, und die Region um Hannover beherbergt dutzende Amateurvereine mit aktivem Spielbetrieb. Das lokale Sponsoring-Potenzial ist hoch, die Digitalisierung der Vereine steht noch am Anfang.',
  },
  {
    slug: 'goeppingen',
    name: 'Göppingen',
    at: 'in Göppingen',
    country: 'DE',
    region: 'Baden-Württemberg',
    localInfo:
      'Göppingen ist Handball-Hochburg in Baden-Württemberg. Frisch Auf! Göppingen prägt seit Generationen die Handballkultur der Region. Der Landkreis hat eine beeindruckende Dichte an Amateurvereinen, die von der starken lokalen Wirtschaft profitieren — ein ideales Umfeld für digitale Vereinslösungen.',
  },
  {
    slug: 'stuttgart',
    name: 'Stuttgart',
    at: 'in Stuttgart',
    country: 'DE',
    region: 'Baden-Württemberg',
    localInfo:
      'Die Wirtschaftsmetropole Stuttgart und ihr Umland sind eines der wirtschaftsstärksten Gebiete Europas. Baden-Württemberg ist mit Göppingen, Balingen und dem TVB Stuttgart eine der Top-Handballregionen. Die starke Unternehmenslandschaft bietet enorme Sponsoring-Möglichkeiten für Amateurvereine.',
  },
  {
    slug: 'muenchen',
    name: 'München',
    at: 'in München',
    country: 'DE',
    region: 'Bayern',
    localInfo:
      'München mag Fußball-Metropole sein, doch Handball gewinnt an Bedeutung. Über 100 Handballvereine sind in Bayern aktiv, und die hohe Kaufkraft der Region macht sie zum attraktivsten Sponsoring-Markt für Amateursport. Die Digitalisierung der Vereinskommunikation ist ein wachsender Trend.',
  },
  {
    slug: 'duesseldorf',
    name: 'Düsseldorf',
    at: 'in Düsseldorf',
    country: 'DE',
    region: 'Nordrhein-Westfalen',
    localInfo:
      'Nordrhein-Westfalen ist das bevölkerungsreichste Bundesland — und entsprechend groß ist die Vereinslandschaft. Düsseldorf, Köln und das Ruhrgebiet bieten zusammen die größte Konzentration an Sportvereinen Deutschlands. Die Handballszene in NRW reicht von der Bundesliga bis in die tiefsten Kreisligen.',
  },
  {
    slug: 'koeln',
    name: 'Köln',
    at: 'in Köln',
    country: 'DE',
    region: 'Nordrhein-Westfalen',
    localInfo:
      'Köln ist Medien- und Sportstadt zugleich. Die VfL Gummersbach aus dem nahen Oberbergischen Kreis ist eine Handball-Legende, und die Kölner Amateurszene ist vielfältig und engagiert. Die Dichte an potenziellen Sponsoren aus Medien, Wirtschaft und Dienstleistung ist in der Rhein-Metropole außergewöhnlich hoch.',
  },
  {
    slug: 'dortmund',
    name: 'Dortmund',
    at: 'in Dortmund',
    country: 'DE',
    region: 'Nordrhein-Westfalen',
    localInfo:
      'Das Ruhrgebiet ist mit über 5 Millionen Einwohnern eines der größten Ballungsgebiete Europas. Die Sportkultur ist tief verwurzelt, und Handball hat eine starke Tradition — vom ASV Hamm-Westfalen über den VfL Eintracht Hagen bis zu dutzenden Amateurvereinen. Sponsoren aus der Region unterstützen aktiv den lokalen Sport.',
  },
  {
    slug: 'frankfurt',
    name: 'Frankfurt',
    at: 'in Frankfurt',
    country: 'DE',
    region: 'Hessen',
    localInfo:
      'Frankfurt am Main ist Finanzmetropole und das wirtschaftliche Zentrum Deutschlands. Die Rhein-Main-Region hat mit Wetzlar, dem MT Melsungen und dem HSG Wetzlar gleich mehrere Bundesliga-Clubs in der Nähe. Das Sponsoring-Potenzial für Amateurvereine ist durch die Dichte an Unternehmen besonders hoch.',
  },
  {
    slug: 'wetzlar',
    name: 'Wetzlar',
    at: 'in Wetzlar',
    country: 'DE',
    region: 'Hessen',
    localInfo:
      'Wetzlar ist trotz seiner überschaubaren Größe ein Handball-Leuchtturm. Die HSG Wetzlar spielt seit Jahren in der Bundesliga und prägt die Handballkultur der gesamten Region Mittelhessen. Die Amateurvereine profitieren von der Begeisterung und dem Engagement lokaler Sponsoren, die den Sport aktiv unterstützen.',
  },
  {
    slug: 'lemgo',
    name: 'Lemgo',
    at: 'in Lemgo',
    country: 'DE',
    region: 'Nordrhein-Westfalen',
    localInfo:
      'Der TBV Lemgo Lippe ist eines der traditionsreichsten Handball-Unternehmen Deutschlands. Die Region Ostwestfalen-Lippe lebt Handball in allen Ligen. Die Verbindung von starker lokaler Wirtschaft und leidenschaftlicher Handballkultur macht Lemgo zu einem Paradebeispiel für erfolgreiches Vereinssponsoring.',
  },
  {
    slug: 'melsungen',
    name: 'Melsungen',
    at: 'in Melsungen',
    country: 'DE',
    region: 'Hessen',
    localInfo:
      'Die MT Melsungen ist das Paradebeispiel für Handball in der Region. Trotz der Kleinstadt-Größe gehört der Club zur Bundesliga-Spitze. Die Handballbegeisterung strahlt auf die gesamte nordhessische Amateurszene aus — ein perfektes Umfeld für digitale Vereinslösungen.',
  },
  {
    slug: 'erlangen',
    name: 'Erlangen',
    at: 'in Erlangen',
    country: 'DE',
    region: 'Bayern',
    localInfo:
      'Der HC Erlangen steht für den Aufstieg des fränkischen Handballs in die Bundesliga. Die Universitätsstadt verbindet Innovation mit Sporttradition. Die fränkische Amateurszene ist aktiv, und Sponsoren aus der Technologie-Region Nürnberg-Erlangen suchen moderne Wege der Sichtbarkeit.',
  },
  {
    slug: 'balingen',
    name: 'Balingen',
    at: 'in Balingen',
    country: 'DE',
    region: 'Baden-Württemberg',
    localInfo:
      'Balingen und die Schwäbische Alb sind Handball-Kernland. Die HBW Balingen-Weilstetten pendelt zwischen erster und zweiter Bundesliga, und die Amateurbasis ist tief verwurzelt. Der schwäbische Mittelstand bildet eine ideale Sponsorenstruktur für Vereinsdigitalisierung.',
  },
  // ── Österreich ────────────────────────────────────────────────
  {
    slug: 'wien',
    name: 'Wien',
    at: 'in Wien',
    country: 'AT',
    region: 'Wien',
    localInfo:
      'Wien ist das Zentrum des österreichischen Handballs. Die Handball Liga Austria hat ihren Schwerpunkt in der Hauptstadt, und zahlreiche Amateurvereine prägen die Wiener Sportlandschaft. Die Digitalisierung im österreichischen Vereinssport steckt noch in den Kinderschuhen — eine enorme Chance.',
  },
  {
    slug: 'graz',
    name: 'Graz',
    at: 'in Graz',
    country: 'AT',
    region: 'Steiermark',
    localInfo:
      'Graz ist die zweitgrößte Stadt Österreichs und ein wichtiger Handballstandort. Die steirische Handballszene ist aktiv, und die Universitätsstadt bringt Innovation und Sporttradition zusammen. Lokale Unternehmen suchen nach modernen Wegen, den Vereinssport sichtbar zu unterstützen.',
  },
];

// ── Handball-spezifische Daten ─────────────────────────────────
export const sports: Sport[] = [
  {
    slug: 'handball',
    name: 'Handball',
    venue: 'Sporthalle',
    description:
      'Deutschland ist die stärkste Handballnation der Welt. Mit der Bundesliga als reichster Liga und über 4.500 Vereinen bietet der deutsche Handball eine einzigartige Kombination aus Professionalität und Breitensport — perfekt für digitale Vereinslösungen.',
    useCases: [
      'Sponsor-Logos und -Videos auf dem Hallenbildschirm während der Spiele',
      'Spielerankündigungen und Einlaufvideos vor dem Anpfiff',
      'Live-Spielstand und Timeout-Animationen auf dem Bildschirm',
      'Vereinsankündigungen: nächste Spiele, Events und Merchandise',
    ],
  },
  {
    slug: 'basketball',
    name: 'Basketball',
    venue: 'Sporthalle',
    description:
      'Basketball wächst in Deutschland stetig. Von der BBL bis zu den Regionalligen bieten hunderte Vereine ihren Fans spannende Spieltage — ein ideales Umfeld für digitale Bildschirmlösungen zur Sponsoren-Sichtbarkeit.',
    useCases: [
      'Sponsor-Schleifenvideos während Timeouts und Viertelpausen',
      'Spielervorstellung mit individuellen Videos',
      'Live-Spielstand und Statistik-Einblendungen',
      'Event-Ankündigungen und Merchandise-Promotion',
    ],
  },
  {
    slug: 'volleyball',
    name: 'Volleyball',
    venue: 'Sporthalle',
    description:
      'Volleyball begeistert in Deutschland Spieler und Zuschauer gleichermaßen. Die Bundesliga und die starke Amateurszene bieten ein engagiertes Publikum — ideal für digitale Sponsoren-Kommunikation in der Halle.',
    useCases: [
      'Sponsor-Präsentation zwischen den Sätzen',
      'Spielerankündigungen und Teamvorstellung',
      'Live-Spielstand und Satzstatistiken',
      'Vereinsevents und Nachwuchswerbung',
    ],
  },
  {
    slug: 'eishockey',
    name: 'Eishockey',
    venue: 'Eishalle',
    description:
      'Eishockey hat in Deutschland eine leidenschaftliche Fanbasis. Von der DEL bis zu den Oberligen bieten die Vereine ein einzigartiges Stadionerlebnis — und digitale Bildschirme verstärken die Atmosphäre und die Sponsoren-Sichtbarkeit.',
    useCases: [
      'Sponsor-Videos während der Drittelpausen',
      'Spielervorstellungen auf dem Hallenbildschirm',
      'Live-Spielstand und Strafzeiten-Anzeige',
      'Fan-Engagement: Gewinnspiele und Aktionen am Spieltag',
    ],
  },
];
