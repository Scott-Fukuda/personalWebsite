import Reveal from './Reveal'
import { aboutPhotos, aboutText } from '../data/content'

export default function About() {
  return (
    <section id="about" className="section wrap">
      <Reveal className="section-head">
        <span className="num">03</span>
        <h2 className="display">About</h2>
      </Reveal>

      <Reveal className="cloud">
        {aboutPhotos.map((p, i) => (
          <img
            key={p.src}
            src={p.src}
            alt={p.alt}
            loading="lazy"
            decoding="async"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.w}%`,
              '--r': `${p.r}deg`,
              '--dur': `${p.d}s`,
              '--delay': `${(i * 0.27).toFixed(2)}s`,
            }}
          />
        ))}
        <div className="cloud-text">
          {aboutText.map((para, i) => (
            <p key={i}>
              {/* A paragraph may be a plain string or a list of parts. */}
              {(Array.isArray(para) ? para : [para]).map((part, j) =>
                typeof part === 'string' ? (
                  part
                ) : (
                  <a key={j} href={part.href} target="_blank" rel="noopener noreferrer">
                    {part.text}
                  </a>
                ),
              )}
            </p>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
