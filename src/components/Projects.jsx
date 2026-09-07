import Reveal from './Reveal'
import AutoVideo from './AutoVideo'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="section wrap">
      <Reveal className="section-head">
        <span className="num">02</span>
        <h2 className="display">Projects</h2>
      </Reveal>

      {projects.map((p) => (
        <Reveal as="article" className="project" key={p.id}>
          <AutoVideo {...p.video} ratio="ratio-16-9" />
          <div>
            <h3 className="display">{p.title}</h3>
            <p>{p.body}</p>
            <div className="tags">
              {p.tags.map((t) => <span key={t}>{t}</span>)}
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  )
}
