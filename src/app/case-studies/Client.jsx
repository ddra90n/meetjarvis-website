'use client'

import { useMemo, useState } from 'react'
import clsx from 'clsx'
import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'
import { BeforeAfter } from '@/components/before-after'
import { CASE_STUDIES as DEFAULT_ITEMS } from './data'

function useFiltered(items, query) {
  const q = (query || '').trim().toLowerCase()
  return useMemo(() => {
    if (!q) return items
    return items.filter((cs) => {
      const haystack = [
        cs.category,
        cs.business,
        cs.keyword,
        cs.time_label,
        cs.title,
        cs.id,
      ].filter(Boolean).join(' ').toLowerCase()
      return haystack.includes(q)
    })
  }, [items, q])
}

export default function CaseStudiesClient({ items = DEFAULT_ITEMS }) {
  const [query, setQuery] = useState('')
  const filtered = useFiltered(items, query)

  return (
    <>
      <Container>
        <Subheading className="mt-16">Case studies</Subheading>
        <Heading as="h1" className="mt-2 max-w-4xl">
          Local SEO case studies: real Google Maps before &amp; after results
        </Heading>
        <p className="mt-6 max-w-2xl text-base/7 text-gray-600">
          Drag the slider to see before/after results.
        </p>
        <p className="mt-3 max-w-2xl text-sm text-gray-700">
          Prefer a walkthrough? Read our <a href="/blog" className="underline">local SEO guides</a> or <a href="/book" className="underline">book a call</a>.
        </p>

        {/* Search */}
        <div className="mt-8">
          <label htmlFor="cs-search" className="sr-only">Search case studies</label>
          <input
            id="cs-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Try: "spa", "dermaplane", "HVAC"'
            className={clsx(
              'w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm',
              'placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10'
            )}
          />
          <p className="mt-2 text-xs text-gray-500">
            {filtered.length} result{filtered.length === 1 ? '' : 's'}
          </p>
        </div>
      </Container>

      {/* Grid */}
      <Container className="mt-16 pb-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {filtered.map((cs) => (
            <article key={cs.id} className="rounded-3xl border border-black/10 bg-white p-5 shadow-sm">
              <header className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                  {cs.category}{cs.keyword ? ` — “${cs.keyword}”` : ''}
                  <span className="sr-only"> — Google Maps results</span>
                  </h3>
                  <p className="mt-1 text-xs text-gray-600">
                    {cs.business ? <><span className="font-medium">{cs.business}</span> · </> : null}
                    {cs.time_label}
                  </p>
                </div>
              </header>

              <BeforeAfter
                className="mt-4"
                beforeSrc={cs.before_url}
                afterSrc={cs.after_url}
                alt={`${cs.category} – “${cs.keyword}” Google Business Profile optimization results (before and after)`}
              />

              <div className="mt-4 flex flex-wrap gap-2">
                {cs.keyword && (
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-700">
                    {cs.keyword}
                  </span>
                )}
                <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-700">
                  {cs.category}
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </>
  )
}
