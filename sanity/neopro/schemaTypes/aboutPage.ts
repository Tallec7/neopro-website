import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'aboutPage',
  title: 'Page Qui sommes-nous',
  type: 'document',
  fields: [
    defineField({ name: 'seoTitle', title: 'SEO — Titre', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO — Description', type: 'text' }),

    defineField({
      name: 'hero',
      title: 'Hero AMBITION',
      type: 'object',
      fields: [
        defineField({ name: 'repeatedWord', title: 'Mot répété (fond)', type: 'string' }),
        defineField({ name: 'overlayLine1', title: 'Overlay ligne 1', type: 'string' }),
        defineField({ name: 'overlayLine2', title: 'Overlay ligne 2', type: 'string' }),
      ],
    }),

    defineField({ name: 'aboutTitle', title: 'Titre section', type: 'string' }),
    defineField({
      name: 'aboutParagraphs',
      title: 'Paragraphes de présentation',
      type: 'array',
      of: [{ type: 'text' }],
      description: 'Chaque item = un paragraphe du texte de présentation.',
    }),

    defineField({ name: 'faqTitle', title: 'Titre FAQ', type: 'string' }),
  ],
  preview: {
    prepare() {
      return { title: 'Page Qui sommes-nous' };
    },
  },
});
