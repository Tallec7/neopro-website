import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'homePage',
  title: "Page d'accueil",
  type: 'document',
  fields: [
    defineField({ name: 'seoTitle', title: 'SEO — Titre', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO — Description', type: 'text' }),

    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({ name: 'line1', title: 'Ligne 1 (italique)', type: 'string' }),
        defineField({ name: 'line2', title: 'Ligne 2 (gras)', type: 'string' }),
        defineField({ name: 'line3', title: 'Ligne 3 (italique)', type: 'string' }),
        defineField({ name: 'ctaLabel', title: 'Libellé CTA', type: 'string' }),
        defineField({ name: 'ctaHref', title: 'URL CTA', type: 'string' }),
      ],
    }),

    defineField({
      name: 'welcome',
      title: 'Section Bienvenue',
      type: 'object',
      fields: [
        defineField({ name: 'titleItalic', title: 'Titre partie italique', type: 'string' }),
        defineField({ name: 'titleBold', title: 'Titre partie grasse', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
      ],
    }),

    defineField({
      name: 'regie',
      title: 'Section Régie Digitale',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Titre', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Sous-titre', type: 'string' }),
        defineField({ name: 'ctaLabel', title: 'Libellé CTA', type: 'string' }),
        defineField({ name: 'ctaHref', title: 'URL CTA', type: 'string' }),
      ],
    }),

    defineField({
      name: 'offres',
      title: 'Section Offres',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Titre', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Sous-titre', type: 'string' }),
        defineField({ name: 'ctaLabel', title: 'Libellé CTA', type: 'string' }),
        defineField({ name: 'ctaHref', title: 'URL CTA', type: 'string' }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Page d'accueil" };
    },
  },
});
