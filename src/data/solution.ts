// ── Panneaux sticky ───────────────────────────────────────────────

export interface SolutionPanel {
  title: string;
  description: string;
  videoUrl?: string;
}

export const solutionPanels: SolutionPanel[] = [
  {
    title: 'Valorisez vos partenaires.',
    description:
      "Toute l'année, vos partenaires bénéficieront d'un support de communication pendant vos matchs pour partager leurs actualités. Ils peuvent mettre à jour leurs actualités d'une semaine à l'autre et obtenir des rapports de diffusion.",
  },
  {
    title: 'Célébrez vos joueurs.',
    description:
      "Vos joueurs aussi ont le droit de faire comme les pros. Nous proposons de venir filmer leurs célébrations en début d'année, ainsi que tout type de contenu (vidéo/photo) relatif à votre média day.",
  },
  {
    title: 'Partagez vos actualités.',
    description:
      "Assurez-vous que vos supporters ne passent pas à côté de vos prochains matchs, les soirées du club et vos produits à vendre sur votre boutique.",
  },
];

// ── Features ──────────────────────────────────────────────────────

export interface Feature {
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    title: 'Sans connexion internet',
    description: 'Pas besoin de wifi dans votre salle.',
  },
  {
    title: 'Sans fil',
    description:
      'Commandable à distance grâce à votre téléphone qui sert de télécommande.',
  },
  {
    title: "Simple d'utilisation",
    description:
      "Interface ultra simplifiée, utilisable par n'importe quel bénévole les jours de match.",
  },
];

// ── Panneaux colorés ──────────────────────────────────────────────

export interface ColorPanel {
  title: string;
  features: string[];
  bgColor: string;
}

export const colorPanels: ColorPanel[] = [
  {
    title: 'Accompagnement continu',
    features: [
      'Formation initiale complète',
      'Support technique réactif',
      'Conseils pour optimiser vos contenus',
      "Assistance & mise à jour de vidéos d'une semaine à l'autre",
      "Possibilité d'autonomie complète : accès admin avec intégration visuels/vidéos",
    ],
    bgColor: 'bg-[#3d3036]',
  },
  {
    title: 'Solution clé en main',
    features: [
      'Boîtier pré-configuré livré chez vous',
      'Installation en moins de 5 minutes',
      'Application intuitive et simple',
      'Compatible avec tous les écrans HDMI',
    ],
    bgColor: 'bg-[#423e33]',
  },
  {
    title: 'Production vidéo professionnelle',
    features: [
      'Offre de média day complète (photo+vidéo)',
      'Des templates vidéo de qualité Broadcast, personnalisable aux couleurs de votre club',
    ],
    bgColor: 'bg-[#2f3935]',
  },
  {
    title: 'Les retombées pour votre club',
    features: [
      'Image professionnelle et moderne',
      'Support de communication efficace',
      'Supporters mieux informés et engagés',
      'Visibilité quantifiée pour vos partenaires',
      'Meilleure fidélisation des partenaires',
    ],
    bgColor: 'bg-[#334244]',
  },
];

// ── Étapes "Comment ça marche" ────────────────────────────────────

export const steps = [
  { number: '1', title: "On branche le boîtier à l'écran", description: "Compatible avec n'importe quel écran" },
  { number: '2', title: "On se connecte à l'écran", description: 'Sans connexion internet' },
  { number: '3', title: 'Notre téléphone devient la télécommande', description: "Utilisable par n'importe quel bénévole" },
];
