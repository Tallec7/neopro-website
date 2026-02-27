import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Paramètres du site',
  type: 'document',
  fields: [
    defineField({ name: 'siteName', title: 'Nom du site', type: 'string' }),
    defineField({ name: 'email', title: 'Email de contact', type: 'string' }),
    defineField({ name: 'phone', title: 'Téléphone', type: 'string' }),
    defineField({ name: 'address', title: 'Adresse', type: 'string' }),
    defineField({
      name: 'socialLinks',
      title: 'Réseaux sociaux',
      type: 'object',
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
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Libellé', type: 'string' }),
            defineField({ name: 'href', title: 'URL', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'ctaPrimary',
      title: 'CTA principal (navbar)',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Libellé', type: 'string' }),
        defineField({ name: 'href', title: 'URL', type: 'string' }),
      ],
    }),
    defineField({
      name: 'ctaSecondary',
      title: 'CTA secondaire (navbar)',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Libellé', type: 'string' }),
        defineField({ name: 'href', title: 'URL', type: 'string' }),
      ],
    }),
    defineField({ name: 'footerDescription', title: 'Description footer', type: 'text' }),
    defineField({
      name: 'footerLinks',
      title: 'Liens footer',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Libellé', type: 'string' }),
            defineField({ name: 'href', title: 'URL', type: 'string' }),
          ],
        },
      ],
    }),
  ],
});
