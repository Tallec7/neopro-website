import { defineField } from 'sanity';

/** Champs SEO reutilisables pour toutes les pages */
export const seoFields = [
  defineField({
    name: 'seoTitle',
    title: 'SEO — Titre',
    type: 'string',
    description: 'Titre affiché dans les résultats Google (max 60 caractères).',
    validation: (rule) => rule.required().max(60),
  }),
  defineField({
    name: 'seoDescription',
    title: 'SEO — Description',
    type: 'text',
    rows: 3,
    description: 'Description affichée sous le titre Google (max 160 caractères).',
    validation: (rule) => rule.required().max(160),
  }),
];
