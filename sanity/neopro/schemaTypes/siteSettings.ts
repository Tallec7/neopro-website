import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Paramètres du site',
  type: 'document',
  groups: [
    { name: 'general', title: 'Général', default: true },
    { name: 'navigation', title: 'Navigation' },
    { name: 'footer', title: 'Footer' },
    { name: 'financable', title: 'Finançable' },
  ],
  fields: [
    defineField({
      name: 'siteName',
      title: 'Nom du site',
      type: 'string',
      group: 'general',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email de contact',
      type: 'string',
      group: 'general',
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Téléphone',
      type: 'string',
      group: 'general',
    }),
    defineField({
      name: 'address',
      title: 'Adresse',
      type: 'string',
      group: 'general',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Réseaux sociaux',
      type: 'object',
      group: 'general',
      fields: [
        defineField({ name: 'facebook', title: 'Facebook', type: 'url' }),
        defineField({ name: 'instagram', title: 'Instagram', type: 'url' }),
        defineField({ name: 'linkedin', title: 'LinkedIn', type: 'url' }),
      ],
    }),

    defineField({
      name: 'navLinks',
      title: 'Liens de navigation',
      type: 'array',
      group: 'navigation',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Libellé',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'URL',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'href' },
          },
        },
      ],
    }),
    defineField({
      name: 'ctaPrimary',
      title: 'CTA principal (navbar)',
      type: 'object',
      group: 'navigation',
      fields: [
        defineField({
          name: 'label',
          title: 'Libellé',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'href',
          title: 'URL',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'ctaSecondary',
      title: 'CTA secondaire (navbar)',
      type: 'object',
      group: 'navigation',
      fields: [
        defineField({
          name: 'label',
          title: 'Libellé',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'href',
          title: 'URL',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),

    defineField({
      name: 'footerDescription',
      title: 'Description footer',
      type: 'text',
      rows: 3,
      group: 'footer',
    }),
    defineField({
      name: 'footerLinks',
      title: 'Liens footer',
      type: 'array',
      group: 'footer',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Libellé',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'URL',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'href' },
          },
        },
      ],
    }),

    defineField({
      name: 'financable',
      title: 'Section Finançable (partagée)',
      type: 'object',
      group: 'financable',
      description: 'Bandeau affiché sur les pages Offres et Qui sommes-nous.',
      fields: [
        defineField({
          name: 'title',
          title: 'Titre',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'emailPlaceholder',
          title: 'Placeholder email',
          type: 'string',
        }),
        defineField({
          name: 'buttonLabel',
          title: 'Libellé bouton',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'documentPdf',
          title: 'Document PDF explicatif',
          type: 'file',
          description: 'Le PDF envoyé par mail aux clubs intéressés.',
          options: {
            accept: '.pdf',
          },
        }),
      ],
    }),
  ],
});
