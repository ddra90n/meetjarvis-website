// src/app/studio/[[...index]]/page.jsx
'use client'
export const dynamic = 'force-dynamic'

import { NextStudio } from 'next-sanity/studio'
// From this path, 4x .. goes to project root where sanity.config.js lives
import config from '../../../../sanity.config'

export default function StudioPage() {
  if (!config?.projectId) {
    throw new Error('Sanity config not loaded (check envs or import path)');
  }
  return <NextStudio config={config} />
}
