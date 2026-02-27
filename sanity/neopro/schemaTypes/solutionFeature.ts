import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'solutionFeature',
  title: 'Feature Solution',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titre', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'order', title: 'Ordre d\'affichage', type: 'number' }),
  ],
});
