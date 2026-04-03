import { projects } from "../data/projects";

const statusColors = {
  live: '#8BA888',
  active: '#C4872A',
  completed: '#7A7268',
};

const statusLabels = {
  live: '● LIVE',
  active: '● ACTIVE',
  completed: 'COMPLETED',
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-16 lg:px-24"
      style={{ borderTop: '1px solid #1E1E1E' }}
    >
      <div className="max-w-6xl mx-auto">
        <p
          className="font-mono text-xs text-muted mb-2"
          style={{ letterSpacing: '0.15em' }}
        >
          FEATURED WORK
        </p>
        <h2 className="font-grotesk text-3xl font-bold text-cream mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <div
              key={i}
              className="flex flex-col p-6 transition-colors"
              style={{
                background: '#111',
                border: '1px solid #1E1E1E',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#2A2A2A'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#1E1E1E'; }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-grotesk text-base font-semibold text-cream leading-tight">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 flex-shrink-0 ml-3">
                  {project.status && (
                    <span
                      className="font-mono"
                      style={{
                        fontSize: 8,
                        letterSpacing: '0.1em',
                        color: statusColors[project.status],
                      }}
                    >
                      {statusLabels[project.status]}
                    </span>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-amber transition-colors font-mono text-sm"
                    >
                      ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Highlight stat */}
              {project.highlight && (
                <p
                  className="font-mono text-xs mb-3"
                  style={{ color: '#C4872A', letterSpacing: '0.03em', lineHeight: 1.5 }}
                >
                  {project.highlight}
                </p>
              )}

              {/* Description */}
              <p
                className="text-sm text-muted mb-5 flex-1"
                style={{ lineHeight: 1.7 }}
              >
                {project.description}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map(tech => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-1.5 py-0.5"
                    style={{
                      border: '1px solid #2A2A2A',
                      color: '#7A7268',
                      fontSize: 10,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
