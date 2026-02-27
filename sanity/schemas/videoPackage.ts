import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'videoPackage',
  title: 'Package vidéo',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nom', type: 'string' }),
    defineField({ name: 'price', title: 'Prix (EUR TTC/équipe)', type: 'string' }),
    defineField({ name: 'priceExtra', title: 'Prix extra équipe', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'popular', title: 'Populaire ?', type: 'boolean' }),
    defineField({
      name: 'features',
      title: 'Fonctionnalités incluses',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'order', title: 'Ordre d\'affichage', type: 'number' }),
  ],
});
