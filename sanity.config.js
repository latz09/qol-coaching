/* eslint-disable no-undef */

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

import {schemaTypes} from './schemaTypes'
import {structure, singletonActions, singletonNewDocument} from './structure'
import {presentationTool} from 'sanity/presentation'

import CustomLayout from './components/CustomLayout.jsx'
import clientLogo from './components/clientLogo'
import {theme} from 'https://themer.sanity.build/api/hues?default=6b7280;lightest:f9fafb;darkest:111827&primary=18a1ad;lightest:f0feff;darkest:0d4f56&transparent=f2fcfe;100;darkest:e6f7fb&positive=779e43;lightest:f7f9f2;darkest:3d4f22&caution=f59e0b;lightest:fef3c7;darkest:92400e&critical=ef4444;lightest:fef2f2;darkest:991b1b'

export default defineConfig({
  name: 'default',
  title: 'Q.O.L.C. CMS',
  subtitle: 'Powered by Latz Web Design',
  icon: clientLogo,
  projectId: 'etke93qh',
  dataset: 'production',
  theme: theme,
   releases: {
    enabled: false,
  },
  plugins: [
    structureTool({
      title: 'Edit Content',
      structure,
    }),
    presentationTool({
      title: 'Live Preview',
      previewUrl: {
        initial: process.env.SANITY_STUDIO_PREVIEW_ORIGIN || 'http://localhost:3000',
        preview: '/',
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    actions: singletonActions,
    newDocumentOptions: singletonNewDocument,
  },
  studio: {
    components: {
      layout: CustomLayout,
    },
  },
})
