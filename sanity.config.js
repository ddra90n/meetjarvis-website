import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schema as existingSchema} from './src/sanity/schema' // <- if your aggregator is here

export default defineConfig({
  name: 'default',
  title: 'Jarvis Marketing Blog',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [deskTool(), visionTool()],
  schema: existingSchema,
})

