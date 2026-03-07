import { defineType, defineField } from 'sanity';
import { seoFields } from './helpers/seoFields';
import { imageWithAlt } from './helpers/imageWithAlt';

export default defineType({
  name: 'solutionPage',
  title: 'Page Solution',
  type: 'document',
  groups: [
    { name: 'contenu', title: 'Contenu', default: true },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    ...seoFields.map((f) => ({ ...f, group: 'seo' as const })),

    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      group: 'contenu',
      fields: [
        defineField({
          name: 'label',
          title: 'Étiquette (uppercase)',
          type: 'string',
          description: 'Ex : "LA SOLUTION"',
        }),
        defineField({
          name: 'titleItalic',
          title: 'Titre partie italique',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'titleBold',
          title: 'Titre partie grasse',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'ctaLabel',
          title: 'Libellé CTA',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'ctaHref',
          title: 'URL CTA',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        imageWithAlt('image', 'Image hero (fond)', { required: true }),
      ],
    }),

    defineField({
      name: 'panelsLabel',
      title: 'Étiquette section panneaux',
      type: 'string',
      group: 'contenu',
      description: 'Ex : "COMMENT ÇA MARCHE"',
    }),

    defineField({
      name: 'howItWorks',
      title: 'Comment ça marche',
      type: 'object',
      group: 'contenu',
      fields: [
        defineField({ name: 'label', title: 'Étiquette section', type: 'string' }),
        defineField({
          name: 'steps',
          title: 'Étapes',
          type: 'array',
          validation: (rule) => rule.min(1),
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'number',
                  title: 'Numéro',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'title',
                  title: 'Titre',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  rows: 3,
                }),
              ],
              preview: {
                select: { title: 'title', subtitle: 'number' },
              },
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'colorPanelsTitle',
      title: 'Titre section panneaux colorés',
      type: 'string',
      group: 'contenu',
    }),

    defineField({
      name: 'ctaOffres',
      title: 'CTA vers Offres (bas de page)',
      type: 'object',
      group: 'contenu',
      fields: [
        defineField({
          name: 'title',
          title: 'Titre',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({ name: 'subtitle', title: 'Sous-titre', type: 'string' }),
        defineField({
          name: 'ctaLabel',
          title: 'Libellé CTA',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'ctaHref',
          title: 'URL CTA',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        imageWithAlt('image', 'Image section CTA offres'),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Page Solution' };
    },
  },
});
