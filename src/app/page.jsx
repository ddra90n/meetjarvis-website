import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'

export const metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Win local search.
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Get more customers by showing up first on Google.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="#expertise">How it works</Button>
            <Button variant="secondary" href="/case-studies">
  Proof it works
</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          Watch your rankings climb every month.
        </Heading>
        <Screenshot
          width={1216}
          height={688}
          src="/screenshots/app.png"
          className="mt-16 h-144 sm:h-auto sm:w-304"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Benefits</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        It pays to be at the top.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
           <BentoCard
  eyebrow="Customers"
  title="Win the best customers"
  description="People searching on Google or Google Maps aren’t just browsing—they’re nearby, actively looking for your service, and ready to buy."
  graphic={
    <div className="relative h-80 w-full">
      <LogoCluster />
    </div>
  }
  // if the fade still eats the background, temporarily remove it
  fade={['bottom']}
  className="z-10 overflow-visible! max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
/>

        <BentoCard
  eyebrow="Leads"
  title="Own the largest pool of local leads"
  description="97% of customers search for local businesses online—and the ones at the top get nearly all the clicks."
  graphic={<Map />}
  fade={['bottom']}
  className="lg:col-span-3 lg:rounded-tr-4xl"
/>
        <BentoCard
  eyebrow="Results"
  title="See quick wins"
  description="On average, our clients see 150% more clicks to their Google profile in just 3 months."
  graphic={
    <div className="absolute inset-0 bg-[url(/screenshots/quick-wins.png)] bg-top bg-contain bg-no-repeat" />
  }
  className="lg:col-span-2 lg:rounded-bl-4xl"
/>
       <BentoCard
  eyebrow="Brand"
  title="Build a trusted brand"
  description="Ranking at the top makes your brand the go-to choice in your local area."
  graphic={
    <div className="absolute inset-0 bg-[url(/screenshots/reputation.png)] bg-center bg-contain bg-no-repeat" />
  }
  className="lg:col-span-2"
/>
        <BentoCard
  eyebrow="Consistency"
  title="Steady flow of customers"
  description="Ads stop when you stop paying. High Google rankings keep the leads coming — and your calendar full."
  graphic={
    <div className="absolute inset-0 bg-[url(/screenshots/consistency.png)] bg-center bg-contain bg-no-repeat" />
  }
  className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
/>

      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div id="expertise" className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Expertise</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Experts your business deserves.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Intel"
            title="Our experts research your competitors"
            description="We uncover what your local competitors rank for—the services, categories, and keywords driving their traffic—and find the best 10 keywords for your business to rank for."
            graphic={
              <div className="h-80 bg-[url(/screenshots/networking.png)] bg-size-[851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Boost"
            title="12-Point profile optimization"
            description="We fully optimize your Google Business Profile across all 12 essentials—from categories and descriptions to services and replies—to give you a ranking boost."
            graphic={<LogoTimeline />}
            // `overflow-visible!` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
  dark
  eyebrow="Reviews"
  title="Get more 5-star reviews"
  description="We give you a smart QR code and link so customers can leave 5-star reviews in seconds. Scan it and try for yourself."
  graphic={
    <img
      src="/screenshots/reviews.png"
      alt="5-star reviews QR demo"
      className="w-full h-auto rounded-xl"
    />
  }
  className="lg:col-span-2 lg:rounded-bl-4xl"
/>

          <BentoCard
            dark
            eyebrow="Growth"
            title="Work we do every week"
            description="Every week, we create fresh Google posts, videos, Q&As, and review replies—then push that content (and images) to directories like Yelp and Yellow Pages, so you rank higher not just on Google, but everywhere customers are searching."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-size-[851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection />
          <BentoSection />
        </div>
        <DarkBentoSection />
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
