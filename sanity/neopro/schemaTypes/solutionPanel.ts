import { defineType, defineField } from 'sanity';
import { imageWithAlt } from './helpers/imageWithAlt';

export default defineType({
  name: 'solutionPanel',
  title: 'Panneau Solution (sticky)',
  type: 'document',
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
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'video',
      title: 'Vidéo',
      type: 'file',
      options: { accept: 'video/*' },
      description: 'Vidéo affichée dans le panneau (MP4 recommandé).',
    }),
    imageWithAlt('image', 'Image (fallback)', {
      description: "Utilisée si aucune vidéo n'est uploadée.",
    }),
    defineField({
      name: 'order',
      title: "Ordre d'affichage",
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    { title: 'Ordre', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'title', media: 'image' },
  },
});
