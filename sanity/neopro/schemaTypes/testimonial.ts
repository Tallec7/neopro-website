import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Témoignage',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Citation',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'clubName',
      title: 'Nom du club',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'division',
      title: 'Division',
      type: 'string',
      description: 'Ex : "Nationale 2", "Régionale 1"',
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
    select: { title: 'clubName', subtitle: 'division' },
  },
});
