import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'solutionPage',
  title: 'Page Solution',
  type: 'document',
  fields: [
    defineField({ name: 'seoTitle', title: 'SEO — Titre', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO — Description', type: 'text' }),

    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Étiquette (uppercase)', type: 'string' }),
        defineField({ name: 'titleItalic', title: 'Titre partie italique', type: 'string' }),
        defineField({ name: 'titleBold', title: 'Titre partie grasse', type: 'string' }),
        defineField({ name: 'ctaLabel', title: 'Libellé CTA', type: 'string' }),
        defineField({ name: 'ctaHref', title: 'URL CTA', type: 'string' }),
      ],
    }),

    defineField({ name: 'panelsLabel', title: 'Étiquette section panneaux', type: 'string' }),

    defineField({
      name: 'howItWorks',
      title: 'Comment ça marche',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Étiquette section', type: 'string' }),
        defineField({
          name: 'steps',
          title: 'Étapes',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'number', title: 'Numéro', type: 'string' }),
                defineField({ name: 'title', title: 'Titre', type: 'string' }),
                defineField({ name: 'description', title: 'Description', type: 'string' }),
              ],
            },
          ],
        }),
      ],
    }),

    defineField({ name: 'colorPanelsTitle', title: 'Titre section panneaux colorés', type: 'string' }),

    defineField({
      name: 'ctaOffres',
      title: 'CTA vers Offres (bas de page)',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Titre', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Sous-titre', type: 'string' }),
        defineField({ name: 'ctaLabel', title: 'Libellé CTA', type: 'string' }),
        defineField({ name: 'ctaHref', title: 'URL CTA', type: 'string' }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Page Solution' };
    },
  },
});
