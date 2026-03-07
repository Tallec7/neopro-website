import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'pricingPlan',
  title: 'Offre tarifaire',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 60 },
      description: 'Identifiant unique (généré automatiquement depuis le nom).',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'taxType',
      title: 'Type de prix affiché',
      type: 'string',
      options: {
        list: [
          { title: 'HT (hors taxes)', value: 'HT' },
          { title: 'TTC (toutes taxes comprises)', value: 'TTC' },
        ],
        layout: 'radio',
      },
      initialValue: 'HT',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'priceAnnual',
      title: 'Prix annuel (EUR)',
      type: 'number',
      description: 'Prix en euros (ex : 250). Le symbole € est ajouté automatiquement.',
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: 'priceMonthly',
      title: 'Prix mensuel (EUR)',
      type: 'number',
      description: 'Prix en euros par mois.',
      validation: (rule) => rule.positive(),
    }),
    defineField({
      name: 'popular',
      title: 'Populaire ?',
      type: 'boolean',
      description: 'Met en avant cette offre avec un badge.',
      initialValue: false,
    }),
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
        layout: 'radio',
      },
      initialValue: 'green',
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
      description: 'Les offres sont triées par ordre croissant.',
      initialValue: 0,
    }),
  ],
  orderings: [
    { title: 'Ordre', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'name', subtitle: 'priceAnnual' },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Sans nom',
        subtitle: subtitle ? `${subtitle} €/an` : '',
      };
    },
  },
});
