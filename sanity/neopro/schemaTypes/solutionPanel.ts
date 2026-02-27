import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'solutionPanel',
  title: 'Panneau Solution (sticky)',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titre', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Texte alternatif', type: 'string' })],
    }),
    defineField({ name: 'order', title: 'Ordre d\'affichage', type: 'number' }),
  ],
});
