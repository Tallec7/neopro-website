import { defineType, defineField } from 'sanity';
import { portableTextBody } from './helpers/portableTextBody';

export default defineType({
  name: 'faqItem',
  title: 'Question FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    // ── Portable Text : remplace answer + bullets + answerAfterBullets ──
    portableTextBody('body', 'Réponse', {
      required: true,
      description:
        'Réponse complète avec mise en forme. Utilisez les listes à puces pour les énumérations.',
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
    select: { title: 'question' },
  },
});
