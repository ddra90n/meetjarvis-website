'use client'

import { useEffect, useRef } from 'react'
import 'beerslider/dist/BeerSlider.css'

export function BeforeAfter({
  beforeSrc,
  afterSrc,
  alt = '',
  className = '',
  start = 50,
}) {
  const sliderRef = useRef(null)

  useEffect(() => {
    let cleanup = () => {}

    const init = async () => {
      const mod = await import('beerslider')
      const BeerSlider = mod?.default ?? mod?.BeerSlider ?? window.BeerSlider
      if (!BeerSlider || !sliderRef.current) return

      const el = sliderRef.current

      // Initialize BeerSlider
      new BeerSlider(el, { start, touch: true, swipe: true })

      // Prevent page scroll from hijacking drag (Safari/iOS)
      const onTouchMove = (e) => {
        if (e.target.closest && e.target.closest('.beer-slider')) {
          e.preventDefault()
        }
      }
      document.addEventListener('touchmove', onTouchMove, { passive: false })

      // Cosmetic handle tag + chevrons (no interaction impact)
      const handle = el.querySelector('.beer-handle')
      if (handle) {
        handle.setAttribute('data-jarvis-handle', 'true')
        if (!handle.querySelector('.chevrons')) {
          const chev = document.createElement('span')
          chev.className = 'chevrons'
          handle.appendChild(chev)
        }
      }

      cleanup = () => {
        document.removeEventListener('touchmove', onTouchMove)
      }
    }

    init()
    return () => cleanup()
  }, [start])

  return (
    <div className={className}>
      <div ref={sliderRef} className="beer-slider select-none" data-beer-label="">
        {/* BeerSlider expects AFTER as base, BEFORE inside .beer-reveal */}
        <img src={afterSrc} alt={alt} draggable="false" />
        <div className="beer-reveal" data-beer-label="">
          <img src={beforeSrc} alt="" draggable="false" />
        </div>
      </div>

      {/* Component-scoped styles */}
      <style jsx>{`
        .beer-slider {
          border: 2px solid #0ea5e9;
          border-radius: 12px;
          position: relative;
          -webkit-tap-highlight-color: transparent;
        }
        .beer-slider img {
          display: block;
          width: 100%;
          height: auto;
          -webkit-user-drag: none;
          -webkit-user-select: none;
          user-select: none;
          pointer-events: none; /* let slider overlay capture drag */
        }

        /* Styled handle (visual only) */
        .beer-handle[data-jarvis-handle="true"] {
          width: 56px;
          height: 56px;
          margin-left: -28px;
          background: #0ea5e9;
          border-radius: 9999px;
          border: 2px solid #fff;
          box-shadow: 0 8px 24px rgba(14,165,233,.35);
          display: grid;
          place-items: center;
          z-index: 2;
          position: relative;
          opacity: 1;
        }
        .beer-handle[data-jarvis-handle="true"]::after {
          display: none; /* hide default vertical bar */
        }
        .beer-handle[data-jarvis-handle="true"] .chevrons::before,
        .beer-handle[data-jarvis-handle="true"] .chevrons::after {
          content: "";
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 0; height: 0;
          border: 8px solid transparent;
        }
        .beer-handle[data-jarvis-handle="true"] .chevrons::before {
          border-right-color: #fff;
          left: 14px;
        }
        .beer-handle[data-jarvis-handle="true"] .chevrons::after {
          border-left-color: #fff;
          right: 14px;
        }

        .beer-slider .beer-range { cursor: ew-resize; }
        .beer-slider .beer-reveal { will-change: clip-path; }
      `}</style>

      {/* Global tweaks needed for Safari (mirrors old code’s intent) */}
      <style jsx global>{`
        /* Critical Safari fix: keep the thumb hit-area reliable so drag doesn't jump */
        .beer-slider .beer-range::-webkit-slider-thumb { -webkit-appearance: auto; }

        /* Normalize the range; make sure it receives touches and doesn't delegate to page scroll */
        .beer-slider .beer-range {
          -webkit-appearance: none;
          appearance: none;
          background: transparent;
          pointer-events: auto;
          touch-action: none;
        }

        /* Reduce gesture conflicts similar to the old page */
        html, body { touch-action: manipulation; }
      `}</style>
    </div>
  )
}
