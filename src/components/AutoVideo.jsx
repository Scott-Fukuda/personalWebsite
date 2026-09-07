import { useEffect, useRef, useState } from 'react'

const SpeakerOff = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M11 5 6 9H2v6h4l5 4z" />
    <line x1="23" y1="9" x2="17" y2="15" />
    <line x1="17" y1="9" x2="23" y2="15" />
  </svg>
)

const SpeakerOn = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M11 5 6 9H2v6h4l5 4z" />
    <path d="M15.5 8.5a5 5 0 0 1 0 7" />
    <path d="M18.5 5.5a9 9 0 0 1 0 13" />
  </svg>
)

/**
 * Self-hosted clip that starts itself when it scrolls into view and pauses when
 * it leaves, so only what you're looking at ever costs bandwidth. Muted, because
 * that's the only way a browser will let a video start on its own — the speaker
 * button turns sound on, and turning it on for one clip mutes the others.
 */
export default function AutoVideo({ src, poster, label, className = '', ratio = 'ratio-16-9', contain = false }) {
  const ref = useRef(null)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // No IntersectionObserver (or reduced motion): leave the poster up and let
    // the viewer press play themselves.
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !('IntersectionObserver' in window)) {
      el.controls = true
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Only fetch the body once we know it's wanted.
          if (el.preload !== 'auto') el.preload = 'auto'
          el.play().catch(() => {})
        } else {
          el.pause()
        }
      },
      { threshold: 0.35 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const onSolo = (e) => {
      if (e.detail !== ref.current) setMuted(true)
    }
    window.addEventListener('video:solo', onSolo)
    return () => window.removeEventListener('video:solo', onSolo)
  }, [])

  const toggleSound = () => {
    const next = !muted
    setMuted(next)
    if (!next) {
      window.dispatchEvent(new CustomEvent('video:solo', { detail: ref.current }))
      ref.current?.play().catch(() => {})
    }
  }

  return (
    <div className={`frame vid ${ratio} ${contain ? 'contain' : ''} ${className}`}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        aria-label={label}
      />
      <button
        type="button"
        className="vid-sound"
        onClick={toggleSound}
        aria-pressed={!muted}
        title={muted ? 'Turn sound on' : 'Mute'}
      >
        <span className="sr-only">{muted ? 'Turn sound on' : 'Mute'}</span>
        {muted ? <SpeakerOff /> : <SpeakerOn />}
      </button>
      {label && <figcaption>{label}</figcaption>}
    </div>
  )
}
