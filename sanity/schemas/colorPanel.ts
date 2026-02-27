import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'colorPanel',
  title: 'Panneau coloré',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titre', type: 'string' }),
    defineField({
      name: 'features',
      title: 'Points forts',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'bgColor',
      title: 'Couleur de fond (classe Tailwind)',
      type: 'string',
      description: 'Ex: bg-[#3d3036], bg-[#423e33], bg-[#2f3935], bg-[#334244]',
    }),
    defineField({ name: 'order', title: 'Ordre d\'affichage', type: 'number' }),
  ],
});
