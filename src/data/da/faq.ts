import type { FaqItem } from '../faq';

export const faqItems: FaqItem[] = [
  {
    question: 'Er skærmen inkluderet i abonnementet?',
    answer: 'Nej, skærmen er ikke inkluderet i abonnementet.',
    answerAfterBullets: 'Vi samarbejder dog med partnere, der tilbyder fordelagtige priser. Vi kan også hjælpe jer med at ansøge om tilskud.',
  },
  {
    question: 'Kan man vise på to skærme samtidig?',
    answer: 'Ja, det er absolut muligt at duplikere indholdet på to skærme i hallen.',
  },
  {
    question: 'Kan flere personer bruge fjernbetjeningen samtidig?',
    answer: 'Ja. Fjernbetjeningen kan bruges samtidig fra flere telefoner, hvilket gør det nemmere at styre under kampene.',
  },
  {
    question: 'Er det muligt at vise stillingen?',
    answer: 'Ja, stillingen kan vises direkte via fjernbetjeningen. Den fungerer uafhængigt og er ikke forbundet til scoringstavlen.',
  },
  {
    question: 'Kan man planlægge indhold på forhånd?',
    answer: 'Ja, absolut. I kan oprette flere automatiske udsendelsesløkker og planlægge forskelligt indhold til forskellige kampmomenter:',
    bullets: ['Før kampen', 'Timeout', 'Halvleg', 'Efter kampen'],
    answerAfterBullets: 'Alt er fuldt tilpasseligt.',
  },
  {
    question: 'Hvis vi allerede har holdbilleder, kan vi bruge dem?',
    answer: 'Ja, selvfølgelig. I kan sende os jeres fotos, og vi integrerer dem i vores videoskabeloner.',
    answerAfterBullets: 'Dette er en del af de tilbudte videopakke-muligheder (se afsnittet "Priser").',
  },
  {
    question: 'Er det muligt at bruge jeres løsning til et enkelt arrangement (f.eks. turnering)?',
    answer: 'Ja, i det tilfælde udarbejder vi et skræddersyet tilbud.',
    answerAfterBullets: 'Og ligesom ved årsabonnementet er videoproduktion valgfri.',
  },
  {
    question: 'Er det muligt også at styre LED-bandereklamer med jeres løsning?',
    answer: 'Ja, dette er en del af mulighederne i Premium-tilbuddet. Kontakt os gerne for mere information.',
  },
];
