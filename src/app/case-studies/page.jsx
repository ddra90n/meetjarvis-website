'use client'

import { useMemo, useState } from 'react'
import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'
import { BeforeAfter } from '@/components/before-after'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import clsx from 'clsx'


// Your data (unchanged)
const CASE_STUDIES = [
  {
    id: 'med-spa-dermaplane',
    category: 'Med Spa',
    business: '',
    keyword: 'dermaplane',
    time_label: '4 months later',
    time_months: 4,
    before_url:
      'https://cdn.prod.website-files.com/66339c43cbff20ea82838f5e/670651dff97515d10cc8ae8c_med-spa-marketing2.webp',
    after_url:
      'https://cdn.prod.website-files.com/66339c43cbff20ea82838f5e/670651cd499d353023889b08_med-spa-marketing1.webp',
  },
  {
    id: 'hvac-ac-installation-1',
    category: 'HVAC Contractor',
    business: '',
    keyword: 'ac installation',
    time_label: '2 months later',
    time_months: 2,
    before_url:
      'https://cdn.prod.website-files.com/66339c43cbff20ea82838f5e/6706490a5d259681ac937fc1_hvac-contractor1.webp',
    after_url:
      'https://cdn.prod.website-files.com/66339c43cbff20ea82838f5e/670649113c0f63393c82c8d6_hvac-contractor2.webp',
  },
  {
    id: 'med-spa-microdermabrasion',
    category: 'Med Spa',
    business: '',
    keyword: 'microdermabrasion',
    time_label: '4 months later',
    time_months: 4,
    before_url:
      'https://cdn.prod.website-files.com/66339c43cbff20ea82838f5e/6706521185972614b3f4b574_med1.webp',
    after_url:
      'https://cdn.prod.website-files.com/66339c43cbff20ea82838f5e/670652187e575c739835388a_med2.webp',
  },
  {
    id: 'landscaper-professional-tree-services',
    category: 'Landscaper',
    business: '',
    keyword: 'professional tree services',
    time_label: '2 months later',
    time_months: 2,
    before_url:
      'https://cdn.prod.website-files.com/66339c43cbff20ea82838f5e/670648ca041ea550b7ec5548_landscaper1.webp',
    after_url:
      'https://cdn.prod.website-files.com/66339c43cbff20ea82838f5e/670648d27f0a09ac37364166_landscaper2.webp',
  },
  {
    id: 'med-spa-prp-treatment-near-me',
    category: 'Med Spa',
    business: '',
    keyword: 'PRP Treatment near me',
    time_label: '6 months later',
    time_months: 6,
    before_url:
      'https://cdn.prod.website-files.com/66339c43cbff20ea82838f5e/670678acba25107ee15f4010_med-spa-seo-services-03.webp',
    after_url:
      'https://cdn.prod.website-files.com/66339c43cbff20ea82838f5e/670678b185f16a427e86d887_med-spa-seo-services-003.webp',
  },
  {
    id: 'contractor-water-damage-repair',
    category: 'Contractor',
    business: '',
    keyword: 'water damage repair',
    time_label: '1 month later',
    time_months: 1,
    before_url:
      'https://cdn.prod.website-files.com/66339c43cbff20ea82838f5e/6706407ec26c5aadf9938a07_contractor1.webp',
    after_url:
      'https://cdn.prod.website-files.com/66339c43cbff20ea82838f5e/6706408343c749570370116c_contractor2.webp',
  },
  {
    id: 'med-spa-tattoo-removal',
    category: 'Med Spa',
    business: '',
    keyword: 'tattoo removal',
    time_label: '5 months later',
    time_months: 5,
    before_url:
      'https://cdn.prod.website-files.com/66339c43cbff20ea82838f5e/67255d8742653903ca2020f8_tattoo%20removal%20before.png',
    after_url:
      'https://cdn.prod.website-files.com/66339c43cbff20ea82838f5e/67255d89ec7afb237c6801e4_tattoo%20removal%20after%205.png',
  },
  {
    id: 'denture-company-same-day-denture',
    category: 'Denture company',
    business: '',
    keyword: 'same day denture',
    time_label: '5 months',
    time_months: 5,
    before_url:
      'https://cdn.prod.website-files.com/66339c43cbff20ea82838f5e/6706448a6e0ac34a0176cda0_denture-company1.webp',
    after_url:
      'https://cdn.prod.website-files.com/66339c43cbff20ea82838f5e/6706449380701b33e58e0486_denture-company2.webp',
  },
  {
    id: 'salon-hair-extensions',
    category: 'Salon',
    business: '',
    keyword: 'hair extensions',
    time_label: '1 month later',
    time_months: 1,
    before_url:
      'https://cdn.prod.website-files.com/66339c43cbff20ea82838f5e/67063f41728278b472f2c864_salon1.webp',
    after_url:
      'https://cdn.prod.website-files.com/66339c43cbff20ea82838f5e/67063f4c8e3db05ff9b3e91d_salon2.webp',
  },
  {
    id: 'hvac-ac-installation-2',
    category: 'HVAC Contractor',
    business: '',
    keyword: 'ac installation',
    time_label: '2 months later',
    time_months: 2,
    before_url:
      'https://cdn.prod.website-files.com/66339c43cbff20ea82838f5e/67065124f97515d10cc80fe4_hvac-contractor1.webp',
    after_url:
      'https://cdn.prod.website-files.com/66339c43cbff20ea82838f5e/6706512a0a4a835a982f09fa_hvac-contractor2.webp',
  },
  {
    id: 'hvac-air-conditioner-repair',
    category: 'HVAC Contractor',
    business: '',
    keyword: 'air conditioner repair',
    time_label: '2 months later',
    time_months: 2,
    before_url:
      'https://cdn.prod.website-files.com/66339c43cbff20ea82838f5e/670655d520cd9f77df521442_hvac-contractor-marketing1.webp',
    after_url:
      'https://cdn.prod.website-files.com/66339c43cbff20ea82838f5e/670655dbba25107ee13fa941_hvac-contractor-marketing2.webp',
  },
  {
    id: 'autobody-alternator-repair',
    category: 'Autobody Shop',
    business: '',
    keyword: 'alternator repair',
    time_label: '2 months later',
    time_months: 2,
    before_url:
      'https://cdn.prod.website-files.com/66339c43cbff20ea82838f5e/670647a3a2b0a750317f95d9_autobody-shop1.webp',
    after_url:
      'https://cdn.prod.website-files.com/66339c43cbff20ea82838f5e/670647adde16976fc448ad5a_autobody-shop2.webp',
  },
]

// simple client-side search
function useFiltered(query) {
  const q = (query || '').trim().toLowerCase()
  return useMemo(() => {
    if (!q) return CASE_STUDIES
    return CASE_STUDIES.filter((cs) => {
      const haystack = [
        cs.category,
        cs.business,
        cs.keyword,
        cs.time_label,
        cs.title, // in case we add later
        cs.id,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
      return haystack.includes(q)
    })
  }, [q])
}

export default function CaseStudiesPage() {
  const [query, setQuery] = useState('')
  const filtered = useFiltered(query)

  return (
    <main className="overflow-hidden">
      {/* Match Blog header treatment */}
      <GradientBackground />
      <Container>
        <Navbar />

        <Subheading className="mt-16">Case studies</Subheading>
        <Heading as="h1" className="mt-2 max-w-4xl">
          Real before &amp; after results.
        </Heading>
        <p className="mt-6 max-w-2xl text-base/7 text-gray-600">
          Drag the handle to compare Google Maps visibility before and after our work.
          Use search to quickly find examples by service, category, or keyword.
        </p>

        {/* Search */}
        <div className="mt-8">
          <label htmlFor="cs-search" className="sr-only">
            Search case studies
          </label>
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

      {/* Grid (spacing matches Blog’s content section) */}
      <Container className="mt-16 pb-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {filtered.map((cs) => (
            <article
              key={cs.id}
              className="rounded-3xl border border-black/10 bg-white p-5 shadow-sm"
            >
              <header className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {cs.category}{cs.keyword ? ` — “${cs.keyword}”` : ''}
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
                alt={`${cs.category} — ${cs.keyword}`}
              />

              {/* chips */}
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

      {/* Match Blog footer */}
      <Footer />
    </main>
  )
}
