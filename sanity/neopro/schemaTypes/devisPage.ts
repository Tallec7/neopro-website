import { defineType } from 'sanity';
import { seoFields } from './helpers/seoFields';

export default defineType({
  name: 'devisPage',
  title: 'Page Devis',
  type: 'document',
  fields: [...seoFields],
  preview: {
    prepare() {
      return { title: 'Page Devis' };
    },
  },
});
