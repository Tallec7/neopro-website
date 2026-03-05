import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'faqItem',
  title: 'Question FAQ',
  type: 'document',
  fields: [
    defineField({ name: 'question', title: 'Question', type: 'string' }),
    defineField({
      name: 'answer',
      title: 'Réponse',
      type: 'text',
      description: 'Texte principal de la réponse.',
    }),
    defineField({
      name: 'bullets',
      title: 'Liste à puces (optionnel)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Si la réponse contient une liste, saisir les items ici.',
    }),
    defineField({
      name: 'answerAfterBullets',
      title: 'Texte après la liste (optionnel)',
      type: 'text',
    }),
    defineField({ name: 'order', title: "Ordre d'affichage", type: 'number' }),
  ],
  preview: {
    select: { title: 'question' },
  },
});
