import { defineType, defineField } from 'sanity';
import { imageWithAlt } from './helpers/imageWithAlt';

export default defineType({
  name: 'teamMember',
  title: "Membre d'équipe",
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Rôle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    imageWithAlt('photo', 'Photo', { required: true }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 4,
      description: 'Courte biographie.',
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
    select: { title: 'name', subtitle: 'role', media: 'photo' },
  },
});
