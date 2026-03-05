import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'pricingPlan',
  title: 'Offre tarifaire',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nom', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'string' }),
    defineField({
      name: 'taxType',
      title: 'Type de prix affiché',
      type: 'string',
      options: {
        list: [
          { title: 'HT (hors taxes)', value: 'HT' },
          { title: 'TTC (toutes taxes comprises)', value: 'TTC' },
        ],
      },
      initialValue: 'HT',
    }),
    defineField({ name: 'priceAnnual', title: 'Prix annuel (EUR)', type: 'string' }),
    defineField({ name: 'priceMonthly', title: 'Prix mensuel (EUR)', type: 'string' }),
    defineField({ name: 'popular', title: 'Populaire ?', type: 'boolean' }),
    defineField({
      name: 'buttonVariant',
      title: 'Variante bouton',
      type: 'string',
      options: {
        list: [
          { title: 'Vert', value: 'green' },
          { title: 'Jaune', value: 'yellow' },
          { title: 'Rose', value: 'pink' },
          { title: 'Noir', value: 'black' },
        ],
      },
    }),
    defineField({
      name: 'features',
      title: 'Fonctionnalités incluses',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'order', title: 'Ordre d\'affichage', type: 'number' }),
  ],
});
