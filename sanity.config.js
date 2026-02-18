import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure, singletonActions, singletonNewDocument} from './structure'

export default defineConfig({
  name: 'default',
  title: 'quality-of-life-coaching',

  projectId: 'etke93qh',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
  },

  document: {
    actions: singletonActions,
    newDocumentOptions: singletonNewDocument,
  },
})