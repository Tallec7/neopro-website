import { defineType, defineField } from 'sanity';
import { seoFields } from './helpers/seoFields';
import { imageWithAlt } from './helpers/imageWithAlt';
import { portableTextBody } from './helpers/portableTextBody';

export default defineType({
  name: 'aboutPage',
  title: 'Page Qui sommes-nous',
  type: 'document',
  groups: [
    { name: 'contenu', title: 'Contenu', default: true },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    ...seoFields.map((f) => ({ ...f, group: 'seo' as const })),

    defineField({
      name: 'hero',
      title: 'Hero AMBITION',
      type: 'object',
      group: 'contenu',
      fields: [
        defineField({
          name: 'repeatedWord',
          title: 'Mot répété (fond)',
          type: 'string',
          description: 'Mot affiché en grand en arrière-plan (ex : "AMBITION").',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'overlayLine1',
          title: 'Overlay ligne 1',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'overlayLine2',
          title: 'Overlay ligne 2',
          type: 'string',
        }),
      ],
    }),

    defineField({
      name: 'aboutTitle',
      title: 'Titre section',
      type: 'string',
      group: 'contenu',
      validation: (rule) => rule.required(),
    }),

    {
      ...portableTextBody('aboutBody', 'Présentation', {
        required: true,
        description: 'Texte de présentation avec mise en forme (gras, italique, liens, listes).',
      }),
      group: 'contenu' as const,
    },

    defineField({
      name: 'faqTitle',
      title: 'Titre FAQ',
      type: 'string',
      group: 'contenu',
      validation: (rule) => rule.required(),
    }),

    {
      ...imageWithAlt('mainImage', 'Photo principale (équipe)', {
        description: "Photo d'équipe ou image principale de la page.",
      }),
      group: 'contenu' as const,
    },
  ],
  preview: {
    prepare() {
      return { title: 'Page Qui sommes-nous' };
    },
  },
});
