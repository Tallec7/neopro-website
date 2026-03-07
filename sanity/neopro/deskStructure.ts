import type { StructureBuilder } from 'sanity/structure';

// Helper : affiche un singleton en ouvrant directement le 1er document du type
const singletonItem = (S: StructureBuilder, typeName: string, title: string) =>
  S.listItem()
    .title(title)
    .id(typeName)
    .child(
      S.documentTypeList(typeName)
        .title(title)
        .menuItems([])
    );

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Contenu')
    .items([
      // ── Pages ────────────────────────────────────────
      S.listItem()
        .title('📝 Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              singletonItem(S, 'homePage', 'Accueil'),
              singletonItem(S, 'solutionPage', 'Solution'),
              singletonItem(S, 'offresPage', 'Offres'),
              singletonItem(S, 'aboutPage', 'Qui sommes-nous'),
              singletonItem(S, 'devisPage', 'Devis'),
            ]),
        ),

      S.divider(),

      // ── Contenus ─────────────────────────────────────
      S.listItem()
        .title('📦 Contenus')
        .child(
          S.list()
            .title('Contenus')
            .items([
              S.documentTypeListItem('pricingPlan').title('Offres tarifaires'),
              S.documentTypeListItem('videoPackage').title('Packages vidéo'),
              S.documentTypeListItem('faqItem').title('FAQ'),
              S.documentTypeListItem('testimonial').title('Témoignages'),
              S.documentTypeListItem('teamMember').title("Membres d'équipe"),
            ]),
        ),

      S.divider(),

      // ── Éléments visuels ─────────────────────────────
      S.listItem()
        .title('🎨 Éléments visuels')
        .child(
          S.list()
            .title('Éléments visuels')
            .items([
              S.documentTypeListItem('solutionPanel').title('Panneaux solution'),
              S.documentTypeListItem('solutionFeature').title('Features'),
              S.documentTypeListItem('colorPanel').title('Panneaux colorés'),
              S.documentTypeListItem('clubLogo').title('Logos clubs'),
            ]),
        ),

      S.divider(),

      // ── Paramètres ───────────────────────────────────
      singletonItem(S, 'siteSettings', '⚙️ Paramètres du site'),
    ]);
