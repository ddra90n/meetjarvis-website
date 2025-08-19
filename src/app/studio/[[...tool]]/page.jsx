'use client'
import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config' // path from src/app/studio/[[...index]]/ to project root

export default function StudioPage() {
  return <NextStudio config={config} />
}