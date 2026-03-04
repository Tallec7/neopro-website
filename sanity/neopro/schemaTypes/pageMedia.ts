import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'pageMedia',
  title: 'Médias de page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageSlug',
      title: 'Page',
      type: 'string',
      options: {
        list: [
          { title: 'Accueil', value: 'accueil' },
          { title: 'Solution', value: 'solution' },
          { title: 'Qui sommes-nous', value: 'qui-sommes-nous' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroVideo',
      title: 'Vidéo principale',
      type: 'file',
      options: { accept: 'video/*' },
      description: 'Vidéo affichée sur la page (MP4 recommandé)',
    }),
    defineField({
      name: 'heroImage',
      title: 'Image hero',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Texte alternatif', type: 'string' })],
    }),
    defineField({
      name: 'mainImage',
      title: 'Image principale',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Texte alternatif', type: 'string' })],
      description: 'Ex : photo équipe (qui-sommes-nous), aperçu télécommande (accueil)',
    }),
  ],
  preview: {
    select: { title: 'pageSlug' },
    prepare({ title }) {
      const labels: Record<string, string> = {
        accueil: 'Accueil',
        solution: 'Solution',
        'qui-sommes-nous': 'Qui sommes-nous',
      };
      return { title: `Médias — ${labels[title] || title}` };
    },
  },
});
