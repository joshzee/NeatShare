import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'neatshare_jz',

  projectId: 'bm6tx2tb',
  dataset: 'neatshare_ds',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
