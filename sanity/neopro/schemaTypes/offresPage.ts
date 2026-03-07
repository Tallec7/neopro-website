import { defineType, defineField } from 'sanity';
import { seoFields } from './helpers/seoFields';
import { imageWithAlt } from './helpers/imageWithAlt';

export default defineType({
  name: 'offresPage',
  title: 'Page Offres',
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
          description: 'Ex : "LES OFFRES"',
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
      name: 'plansTitle',
      title: 'Titre section offres',
      type: 'string',
      group: 'contenu',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'popularBadge',
      title: 'Badge populaire',
      type: 'string',
      group: 'contenu',
      description: 'Texte du badge "Populaire" sur la carte mise en avant.',
    }),
    defineField({
      name: 'chooseCta',
      title: 'Libellé bouton choisir',
      type: 'string',
      group: 'contenu',
      description: 'Ex : "Choisir cette offre"',
    }),
    defineField({
      name: 'engagementNote',
      title: 'Note engagement',
      type: 'string',
      group: 'contenu',
      description: 'Ex : "Sans engagement"',
    }),

    defineField({
      name: 'videoSection',
      title: 'Section Packages Vidéos',
      type: 'object',
      group: 'contenu',
      fields: [
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
        defineField({
          name: 'popularBadge',
          title: 'Badge populaire vidéo',
          type: 'string',
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Page Offres' };
    },
  },
});
