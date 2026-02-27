import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titre', type: 'string' }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Titre Hero', type: 'text' }),
        defineField({ name: 'subtitle', title: 'Sous-titre', type: 'string' }),
        defineField({
          name: 'image',
          title: 'Image Hero',
          type: 'image',
          options: { hotspot: true },
          fields: [defineField({ name: 'alt', title: 'Texte alternatif', type: 'string' })],
        }),
        defineField({ name: 'ctaLabel', title: 'Libellé CTA', type: 'string' }),
        defineField({ name: 'ctaHref', title: 'URL CTA', type: 'string' }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({ name: 'metaTitle', title: 'Meta title', type: 'string' }),
        defineField({ name: 'metaDescription', title: 'Meta description', type: 'text' }),
        defineField({
          name: 'ogImage',
          title: 'Image Open Graph',
          type: 'image',
        }),
      ],
    }),
  ],
});
