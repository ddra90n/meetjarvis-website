// src/sanity/env.js
// Safe in BOTH places: Next.js app AND managed Studio.
// Uses env vars if present (local/Next), otherwise falls back (managed Studio).

export const apiVersion =
  (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_SANITY_API_VERSION) ||
  '2023-10-01';

export const dataset =
  (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_SANITY_DATASET) ||
  'production';

export const projectId =
  (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) ||
  '0bscsquh';
