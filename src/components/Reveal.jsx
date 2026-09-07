import { createElement, useEffect, useRef } from 'react'

/** Fades its children up the first time they scroll into view. */
export default function Reveal({ as = 'div', className = '', children, ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-in')
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-in')
          io.unobserve(el)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    io.observe(el)

    // Safety net: anything already on screen must never stay hidden.
    const t = setTimeout(() => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('is-in')
    }, 1600)

    return () => {
      io.disconnect()
      clearTimeout(t)
    }
  }, [])

  return createElement(as, { ref, className: `reveal ${className}`, ...rest }, children)
}
