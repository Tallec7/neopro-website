export interface FaqItem {
  question: string;
  answer: string;
  bullets?: string[];
  answerAfterBullets?: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "L'écran est-il inclus dans l'abonnement ?",
    answer: "Non, l'écran n'est pas inclus dans l'abonnement.",
    answerAfterBullets: "En revanche, nous travaillons avec des partenaires qui proposent des tarifs préférentiels. Nous pouvons également vous accompagner dans les démarches afin d'obtenir un financement auprès de votre mairie.",
  },
  {
    question: "Peut-on diffuser sur deux écrans en simultané ?",
    answer: "Oui, il est tout à fait possible de dupliquer le contenu sur deux écrans au sein du gymnase.",
  },
  {
    question: "Peut-on être plusieurs connectés en même temps à la télécommande ?",
    answer: "Oui. La télécommande peut être utilisée simultanément depuis plusieurs téléphones, ce qui facilite la gestion pendant les matchs.",
  },
  {
    question: "Est-il possible d'afficher le score ?",
    answer: "Oui, le score peut être affiché directement via la télécommande. Il fonctionne de manière indépendante et n'est pas relié à la table de marque.",
  },
  {
    question: "Peut-on programmer du contenu à l'avance ?",
    answer: "Oui, absolument. Il est possible de créer plusieurs boucles de diffusion automatiques et de programmer différents contenus selon les moments du match :",
    bullets: ['Avant-match', 'Temps-mort', 'Mi-temps', 'Après-match'],
    answerAfterBullets: "Tout est entièrement personnalisable.",
  },
  {
    question: "Si nous avons déjà des photos d'équipe, pouvons-nous les utiliser ?",
    answer: "Oui, bien sûr. Vous pouvez nous transmettre vos photos et nous les intégrerons dans nos templates vidéo.",
    answerAfterBullets: "Cela fait partie des options de package vidéos proposées (voir la section « Les offres »).",
  },
  {
    question: "Est-il possible d'utiliser votre solution pour un évènement en particulier (ex : tournoi) ?",
    answer: "Oui, dans ce cas-là, nous vous faisons un devis sur mesure.",
    answerAfterBullets: "Et comme pour l'abonnement annuel, la production de vidéos est en option.",
  },
  {
    question: "Est-il possible de contrôler également les panneaux LEDs bord terrain avec votre solution ?",
    answer: "Oui, cela fait partie des options que l'on propose dans la forme Premium. N'hésitez pas à nous contacter par message pour plus d'informations.",
  },
];
