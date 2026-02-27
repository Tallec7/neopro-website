import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'neopro',
  title: 'Neopro CMS',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
