import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Enactus-IGDTUW',

  projectId: '9sjbst1y',
  dataset: 'team',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
