import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'solutionPanel',
  title: 'Panneau Solution (sticky)',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titre', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({
      name: 'video',
      title: 'Vidéo',
      type: 'file',
      options: { accept: 'video/*' },
      description: 'Vidéo affichée dans le panneau (MP4 recommandé)',
    }),
    defineField({
      name: 'image',
      title: 'Image (fallback)',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Texte alternatif', type: 'string' })],
      description: 'Utilisée si aucune vidéo n\'est uploadée',
    }),
    defineField({ name: 'order', title: 'Ordre d\'affichage', type: 'number' }),
  ],
});
