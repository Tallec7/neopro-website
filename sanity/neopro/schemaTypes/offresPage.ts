import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'offresPage',
  title: 'Page Offres',
  type: 'document',
  fields: [
    defineField({ name: 'seoTitle', title: 'SEO — Titre', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO — Description', type: 'text' }),

    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Étiquette (uppercase)', type: 'string' }),
        defineField({ name: 'titleItalic', title: 'Titre partie italique', type: 'string' }),
        defineField({ name: 'titleBold', title: 'Titre partie grasse', type: 'string' }),
        defineField({ name: 'ctaLabel', title: 'Libellé CTA', type: 'string' }),
        defineField({ name: 'ctaHref', title: 'URL CTA', type: 'string' }),
        defineField({
          name: 'image',
          title: 'Image hero (fond)',
          type: 'image',
          options: { hotspot: true },
          fields: [defineField({ name: 'alt', title: 'Texte alternatif', type: 'string' })],
        }),
      ],
    }),

    defineField({ name: 'plansTitle', title: 'Titre section offres', type: 'string' }),
    defineField({ name: 'popularBadge', title: 'Badge populaire', type: 'string' }),
    defineField({ name: 'chooseCta', title: 'Libellé bouton choisir', type: 'string' }),
    defineField({ name: 'engagementNote', title: 'Note engagement', type: 'string' }),

    defineField({
      name: 'videoSection',
      title: 'Section Packages Vidéos',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Titre', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({ name: 'popularBadge', title: 'Badge populaire vidéo', type: 'string' }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Page Offres' };
    },
  },
});
