import { defineType, defineField } from 'sanity';
import { seoFields } from './helpers/seoFields';
import { imageWithAlt } from './helpers/imageWithAlt';

export default defineType({
  name: 'homePage',
  title: "Page d'accueil",
  type: 'document',
  groups: [
    { name: 'contenu', title: 'Contenu', default: true },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    // ── SEO ──
    ...seoFields.map((f) => ({ ...f, group: 'seo' as const })),

    // ── Hero ──
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      group: 'contenu',
      fields: [
        defineField({
          name: 'line1',
          title: 'Ligne 1 (italique)',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'line2',
          title: 'Ligne 2 (gras)',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'line3',
          title: 'Ligne 3 (italique)',
          type: 'string',
        }),
        defineField({
          name: 'ctaLabel',
          title: 'Libellé CTA',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'ctaHref',
          title: 'URL CTA',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        imageWithAlt('image', 'Image hero (fond)', { required: true }),
      ],
    }),

    // ── Section Bienvenue ──
    defineField({
      name: 'welcome',
      title: 'Section Bienvenue',
      type: 'object',
      group: 'contenu',
      fields: [
        defineField({
          name: 'titleItalic',
          title: 'Titre partie italique',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'titleBold',
          title: 'Titre partie grasse',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 4,
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'video',
          title: 'Vidéo de démonstration',
          type: 'file',
          options: { accept: 'video/*' },
          description: 'Vidéo MP4 affichée dans la section bienvenue.',
        }),
      ],
    }),

    // ── Section Régie Digitale ──
    defineField({
      name: 'regie',
      title: 'Section Régie Digitale',
      type: 'object',
      group: 'contenu',
      fields: [
        defineField({
          name: 'title',
          title: 'Titre',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Sous-titre',
          type: 'string',
        }),
        defineField({
          name: 'ctaLabel',
          title: 'Libellé CTA',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'ctaHref',
          title: 'URL CTA',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        imageWithAlt('image', 'Image (visuel téléphone)'),
      ],
    }),

    // ── Section Offres ──
    defineField({
      name: 'offres',
      title: 'Section Offres',
      type: 'object',
      group: 'contenu',
      fields: [
        defineField({
          name: 'title',
          title: 'Titre',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Sous-titre',
          type: 'string',
        }),
        defineField({
          name: 'ctaLabel',
          title: 'Libellé CTA',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'ctaHref',
          title: 'URL CTA',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        imageWithAlt('image', 'Image section offres'),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Page d'accueil" };
    },
  },
});
