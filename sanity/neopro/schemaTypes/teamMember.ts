import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'teamMember',
  title: "Membre d'équipe",
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nom', type: 'string' }),
    defineField({ name: 'role', title: 'Rôle', type: 'string' }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Texte alternatif', type: 'string' })],
    }),
    defineField({ name: 'bio', title: 'Bio', type: 'text' }),
    defineField({ name: 'order', title: "Ordre d'affichage", type: 'number' }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'role', media: 'photo' },
  },
});
