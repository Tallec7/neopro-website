import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'colorPanel',
  title: 'Panneau coloré',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Points forts',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: 'bgColor',
      title: 'Couleur de fond',
      type: 'string',
      description: 'Choisissez une couleur parmi les options du design.',
      options: {
        list: [
          { title: 'Brun rosé', value: 'bg-[#3d3036]' },
          { title: 'Olive chaud', value: 'bg-[#423e33]' },
          { title: 'Vert sombre', value: 'bg-[#06263f]' },
          { title: 'Bleu-gris', value: 'bg-[#334244]' },
          { title: 'Noir (madxp-ink)', value: 'bg-madxp-ink' },
          { title: 'Vert foncé (madxp-night)', value: 'bg-madxp-night' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
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
    select: { title: 'title' },
  },
});
