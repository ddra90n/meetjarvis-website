'use client'

import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import Script from 'next/script'

export default function BookPage() {
  return (
    <main className="overflow-hidden">
      {/* Match Blog header treatment */}
      <GradientBackground />
      <Container>
        <Navbar />
        <Subheading className="mt-16">Book a Call</Subheading>
        <Heading as="h1" className="mt-2 max-w-4xl">
          Schedule your demo
        </Heading>
        <p className="mt-6 max-w-2xl text-base/7 text-gray-600">
          Pick a time that works for you. We’ll walk you through rankings and next steps.
        </p>

        {/* Calendly embed */}
        <div className="mt-10">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/nick-meetjarvis/demo"
            style={{ minWidth: '320px', height: '780px' }}
          />
        </div>
      </Container>

      {/* Match Blog footer */}
      <Footer />

      {/* Calendly script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </main>
  )
}
