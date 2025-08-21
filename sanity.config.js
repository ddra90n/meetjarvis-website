import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schema as existingSchema} from './src/sanity/schema'

export default defineConfig({
  name: 'default',
  title: 'Jarvis Marketing Blog',
  projectId: '0bscsquh',          // ← hardcode
  dataset: 'production',          // ← hardcode
  plugins: [deskTool(), visionTool()],
  schema: existingSchema,
})
