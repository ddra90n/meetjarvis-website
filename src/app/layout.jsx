// src/app/layout.jsx

import { SanityLive } from '@/sanity/live'
import { revalidateSyncTags } from '@/sanity/revalidateSyncTags'
import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Jarvis',                 // ← was Radiant
    default: 'Jarvis – Win local search',    // your default tab title
  },
  // (optional) also set a default description:
  description:
    'Get more customers by showing up first on Google with Jarvis Marketing.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
  <link
    rel="stylesheet"
    href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&display=swap"
  />
  <link
    rel="alternate"
    type="application/rss+xml"
    title="Jarvis Blog"
    href="/blog/feed.xml"
  />
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
</head>
      <body className="text-gray-950 antialiased">
        {children}
        <SanityLive revalidateSyncTags={revalidateSyncTags} />
      </body>
    </html>
  )
}
