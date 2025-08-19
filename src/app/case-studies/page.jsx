// NO "use client" here — this stays a Server Component.
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Container } from '@/components/container'
import { GradientBackground } from '@/components/gradient'
import CaseStudiesClient from './Client'
import { CASE_STUDIES } from './data'

// Page-level SEO now works here
export const metadata = {
  title: 'Local SEO Case Studies – Google Maps before & after | Jarvis Marketing',
  description:
    'Real before-and-after results from our Google Business Profile optimization. See how spas, HVAC contractors, roofers, landscapers, and dentists improved Google Maps rankings.',
  alternates: { canonical: '/case-studies' },
  openGraph: {
    type: 'website',
    url: 'https://www.meetjarvis.co/case-studies',
    siteName: 'Jarvis Marketing',
    title: 'Local SEO Case Studies – Google Maps before & after',
    description:
      'Real results from Google Business Profile optimization across local service businesses.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local SEO Case Studies – Google Maps before & after',
    description:
      'Real results from Google Business Profile optimization across local service businesses.',
    images: ['/og-image.png'],
  },
}

export default function CaseStudiesPage() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>

      {/* Interactive UI lives in the client component */}
      <CaseStudiesClient items={CASE_STUDIES} />

      {/* Optional: simple JSON-LD (can expand later) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Local SEO Case Studies – Google Maps before & after",
            "description": "Before-and-after results from Google Business Profile optimization across local service businesses.",
            "url": "https://www.meetjarvis.co/case-studies"
          })
        }}
      />

      <Footer />
    </main>
  )
}
