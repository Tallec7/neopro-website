import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'clubLogo',
  title: 'Logo club partenaire',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nom du club', type: 'string' }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      fields: [defineField({ name: 'alt', title: 'Texte alternatif', type: 'string' })],
    }),
    defineField({ name: 'order', title: 'Ordre d\'affichage', type: 'number' }),
  ],
});
