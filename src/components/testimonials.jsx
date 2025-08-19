'use client'

import * as Headless from '@headlessui/react'
import { ArrowLongRightIcon } from '@heroicons/react/20/solid'
import { clsx } from 'clsx'
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from 'framer-motion'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import useMeasure from 'react-use-measure'
import { Container } from './container'
import { Link } from './link'
import { Heading, Subheading } from './text'

const testimonials = [
  {
    name: 'Dr. Tang',
    title: '59B Dental',
    quote: 'We started using Jarvis a few months ago, and honestly, the difference has been huge.',
  },
  {
    name: 'Dr. Kohan',
    title: 'Glo MedSpa',
    quote: 'Jarvis has helped us attract a steady stream of high quality patients. Investing in their service has been a game changer!',
  },
  {
    name: 'Willy',
    title: 'Jaguar Heating & Air',
    quote: 'These guys have been great with helping us get started and their systems allow for tracking and success to increase our ranking.',
  },
  {
    name: 'Dominic',
    title: 'DeLuca Electric',
    quote: 'From Month One, we have seen significant improvements in our local rankings.',
  },
  {
    name: 'Brian',
    title: 'Bright Home Landscapes',
    quote: 'This rocks. So much better quality that a VA can do at managing my GBP.',
  },
]

function TestimonialCard({ name, title, children, bounds, scrollX, ...props }) {
  const ref = useRef(null)

  const computeOpacity = useCallback(() => {
    const el = ref.current
    if (!el || bounds.width === 0) return 1
    const rect = el.getBoundingClientRect()

    if (rect.left < bounds.left) {
      const diff = bounds.left - rect.left
      const percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else if (rect.right > bounds.right) {
      const diff = rect.right - bounds.right
      const percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else {
      return 1
    }
  }, [bounds.left, bounds.right, bounds.width])

  const opacity = useSpring(computeOpacity(), { stiffness: 154, damping: 23 })

  useLayoutEffect(() => {
    opacity.set(computeOpacity())
  }, [computeOpacity, opacity])

  useMotionValueEvent(scrollX, 'change', () => {
    opacity.set(computeOpacity())
  })

  return (
    <motion.article
      ref={ref}
      style={{ opacity }}
      {...props}
      className={clsx(
        'relative w-72 shrink-0 snap-start scroll-ml-(--scroll-padding)',
        // use min-height instead of fixed height
        'grid grid-rows-[1fr_auto_auto] min-h-72 sm:min-h-80',
        'rounded-3xl bg-black p-8 shadow-lg',
        'sm:w-96'
      )}
    >
      {/* Quote fills top row */}
      <blockquote className="text-lg/7 text-white">
        <span aria-hidden="true">“</span>
        {children}
        <span aria-hidden="true">”</span>
      </blockquote>

      {/* Divider with tight spacing */}
      <div className="mt-3 mb-2 border-t border-white/20" />

      {/* Name + title */}
      <figcaption className="text-sm/6">
        <p className="font-medium text-white">{name}</p>
        <p className="font-medium">
          <span className="bg-gradient-to-r from-[#fff1be] via-[#ee87cb] to-[#b060ff] bg-clip-text text-transparent">
            {title}
          </span>
        </p>
      </figcaption>
    </motion.article>
  )
}


function CallToAction() {
  return (
    <div>
      <p className="max-w-sm text-sm/6 text-gray-600">
        Join local businesses using Jarvis Marketing to show up where customers search.
      </p>
      <div className="mt-2">
        <Link
          href="/book"
          className="inline-flex items-center gap-2 text-sm/6 font-medium text-pink-600"
        >
          Get started
          <ArrowLongRightIcon className="size-5" />
        </Link>
      </div>
    </div>
  )
}

export function Testimonials() {
  const scrollRef = useRef(null)
  const { scrollX } = useScroll({ container: scrollRef })
  const [setReferenceWindowRef, bounds] = useMeasure()
  const [activeIndex, setActiveIndex] = useState(0)

  useMotionValueEvent(scrollX, 'change', (x) => {
    setActiveIndex(Math.floor(x / scrollRef.current.children[0].clientWidth))
  })

  function scrollTo(index) {
    const gap = 32
    const width = scrollRef.current.children[0].offsetWidth
    scrollRef.current.scrollTo({ left: (width + gap) * index })
  }

  return (
    <div className="overflow-hidden py-32 bg-white">
      <Container>
        <div ref={setReferenceWindowRef}>
          <Subheading className="text-gray-800">What everyone is saying</Subheading>
          <Heading as="h3" className="mt-2 text-gray-900">
            Trusted by local business owners.
          </Heading>
        </div>
      </Container>

      <div
        ref={scrollRef}
        className={clsx([
          'mt-16 flex gap-8 px-(--scroll-padding)',
          '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          'snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth',
          '[--scroll-padding:max(--spacing(6),calc((100vw-(var(--container-2xl)))/2))] lg:[--scroll-padding:max(--spacing(8),calc((100vw-(var(--container-7xl)))/2))]',
        ])}
      >
        {testimonials.map(({ name, title, quote }, i) => (
          <TestimonialCard
            key={i}
            name={name}
            title={title}
            bounds={bounds}
            scrollX={scrollX}
            onClick={() => scrollTo(i)}
          >
            {quote}
          </TestimonialCard>
        ))}
        <div className="w-2xl shrink-0 sm:w-216" />
      </div>

      <Container className="mt-16">
        <div className="flex justify-between">
          <CallToAction />
          <div className="hidden sm:flex sm:gap-2">
            {testimonials.map(({ name }, i) => (
              <Headless.Button
                key={i}
                onClick={() => scrollTo(i)}
                data-active={activeIndex === i ? true : undefined}
                aria-label={`Scroll to testimonial from ${name}`}
                className={clsx(
                  'size-2.5 rounded-full border border-transparent bg-gray-300 transition',
                  'data-active:bg-gray-500 data-hover:bg-gray-400',
                  'forced-colors:data-active:bg-[Highlight] forced-colors:data-focus:outline-offset-4',
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
