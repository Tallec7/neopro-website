import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Témoignage',
  type: 'document',
  fields: [
    defineField({ name: 'quote', title: 'Citation', type: 'text' }),
    defineField({ name: 'clubName', title: 'Nom du club', type: 'string' }),
    defineField({ name: 'division', title: 'Division', type: 'string' }),
    defineField({ name: 'order', title: 'Ordre d\'affichage', type: 'number' }),
  ],
});
