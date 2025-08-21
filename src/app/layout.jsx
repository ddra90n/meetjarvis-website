// src/app/layout.jsx

import { SanityLive } from '@/sanity/live'
import { revalidateSyncTags } from '@/sanity/revalidateSyncTags'
import '@/styles/tailwind.css'

export const metadata = {
  metadataBase: new URL('https://www.meetjarvis.co'),
  title: { template: '%s – Jarvis', default: 'Jarvis – Win local search' },
  description:
    'Jarvis Marketing helps local businesses win more customers by ranking higher on Google and boosting reviews.',
  openGraph: {
    type: 'website',
    url: 'https://www.meetjarvis.co',
    siteName: 'Jarvis Marketing',
    title: 'Jarvis – Win local search',
    description:
      'Jarvis Marketing helps local businesses win more customers by ranking higher on Google and boosting reviews.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jarvis – Win local search',
    description:
      'Jarvis Marketing helps local businesses win more customers by ranking higher on Google and boosting reviews.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
};

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
<link rel="icon" href="/logo-square.png" type="image/png" />
<link rel="apple-touch-icon" href="/logo-square.png" />

</head>
      <body className="text-gray-950 antialiased">
        {children}
        <SanityLive revalidateSyncTags={revalidateSyncTags} />
      </body>
    </html>
  )
}
