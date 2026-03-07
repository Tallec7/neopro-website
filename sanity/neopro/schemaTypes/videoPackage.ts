import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'videoPackage',
  title: 'Package vidéo',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Prix (EUR TTC/équipe)',
      type: 'string',
      description: 'Ex : "150€ TTC" — format libre car variable.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'priceExtra',
      title: 'Prix extra équipe',
      type: 'string',
      description: 'Ex : "+50€ TTC/équipe supp."',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'popular',
      title: 'Populaire ?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'features',
      title: 'Fonctionnalités incluses',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (rule) => rule.min(1),
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
    select: { title: 'name', subtitle: 'price' },
  },
});
