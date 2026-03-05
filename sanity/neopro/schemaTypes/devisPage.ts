import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'devisPage',
  title: 'Page Devis',
  type: 'document',
  fields: [
    defineField({ name: 'seoTitle', title: 'SEO — Titre', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO — Description', type: 'text' }),
  ],
  preview: {
    prepare() {
      return { title: 'Page Devis' };
    },
  },
});
