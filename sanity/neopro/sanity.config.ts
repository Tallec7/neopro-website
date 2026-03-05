import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {deskStructure} from './deskStructure'

// Types singleton — masqués de la création « New document »
const singletonTypes = new Set([
  'homePage',
  'solutionPage',
  'offresPage',
  'aboutPage',
  'devisPage',
  'siteSettings',
])

export default defineConfig({
  name: 'default',
  title: 'Neopro',

  projectId: '2r4zw7v3',
  dataset: 'production',

  plugins: [
    structureTool({structure: deskStructure}),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    // Empêche la création de doublons pour les singletons
    newDocumentOptions: (prev, {creationContext}) =>
      prev.filter((item) => !singletonTypes.has(item.templateId)),
  },
})
