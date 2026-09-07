import Reveal from './Reveal'
import AutoVideo from './AutoVideo'
import Still from './Still'
import { experience } from '../data/content'

function Header({ entry }) {
  return (
    <>
      <div className="entry-top">
        <h3 className="display">{entry.title}</h3>
        <span className="entry-dates">{entry.dates}</span>
      </div>
      <p className="label entry-role">
        {entry.role}
        {entry.link && (
          <>
            {' · '}
            <a href={entry.link.href} target="_blank" rel="noopener noreferrer">
              {entry.link.label} ↗
            </a>
          </>
        )}
      </p>
      {entry.body.map((para) => (
        <p className="prose" key={para.slice(0, 24)}>
          {para}
        </p>
      ))}
    </>
  )
}

export default function Experience() {
  const [reu, cuair, cc] = experience

  return (
    <section id="experience" className="section wrap">
      <Reveal className="section-head">
        <span className="num">01</span>
        <h2 className="display">Experience</h2>
      </Reveal>

      <Reveal as="article" className="entry">
        <Header entry={reu} />
        <div className="entry-media">
          <AutoVideo {...reu.video} ratio="ratio-16-9" />
          <div className="side stack">
            <Still {...reu.stills[0]} ratio="ratio-4-3" contain />
            <Still {...reu.stills[1]} ratio="ratio-4-3" />
          </div>
        </div>
      </Reveal>

      <Reveal as="article" className="entry">
        <Header entry={cuair} />
        <div className="entry-media portrait">
          <AutoVideo {...cuair.video} ratio="ratio-9-16" />
          <div className="side">
            {cuair.stills.map((s) => (
              <Still key={s.src} {...s} ratio="ratio-4-3" />
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="article" className="entry">
        <Header entry={cc} />
        <div className="cc-hero">
          <Still {...cc.hero} ratio="ratio-16-9" contain />
        </div>
        <div className="cc-pair">
          {cc.stills.map((s) => (
            <Still key={s.src} {...s} ratio="ratio-4-3" />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
