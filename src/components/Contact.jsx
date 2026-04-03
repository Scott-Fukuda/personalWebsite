const links = [
  {
    label: "sdf72@cornell.edu",
    href: "mailto:sdf72@cornell.edu",
    primary: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/scott-fukuda-3923172ab/",
    primary: false,
  },
  {
    label: "GitHub",
    href: "https://github.com/Scott-Fukuda",
    primary: false,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-16 lg:px-24"
      style={{ borderTop: '1px solid #1E1E1E' }}
    >
      <div className="max-w-6xl mx-auto">
        <p
          className="font-mono text-xs text-muted mb-2"
          style={{ letterSpacing: '0.15em' }}
        >
          OUTPUT
        </p>
        <h2 className="font-grotesk text-3xl font-bold text-cream mb-4">
          Plug In
        </h2>
        <p
          className="text-sm text-muted mb-10 max-w-md"
          style={{ lineHeight: 1.7 }}
        >
          Please feel free to connect with me! I'd love to meet you over one of the platforms below.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
          {links.map(({ label, href, primary }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="font-mono text-sm transition-colors"
              style={{
                padding: '10px 20px',
                border: primary ? '1px solid #C4872A' : '1px solid #2A2A2A',
                color: primary ? '#C4872A' : '#7A7268',
                letterSpacing: '0.04em',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = primary ? '#C4872A' : '#1A1A1A';
                e.currentTarget.style.color = primary ? '#0E0E0E' : '#E8E0D0';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = primary ? '#C4872A' : '#7A7268';
              }}
            >
              {label} ↗
            </a>
          ))}
        </div>

        {/* Footer */}
        <div
          className="mt-20 pt-6 flex items-center justify-between"
          style={{ borderTop: '1px solid #1A1A1A' }}
        >
          <span
            className="font-mono text-xs text-muted"
            style={{ letterSpacing: '0.1em' }}
          >
            SCOTT FUKUDA — {new Date().getFullYear()}
          </span>
          <span
            className="font-mono text-xs text-muted"
            style={{ letterSpacing: '0.1em' }}
          >
            AMP ──────●
          </span>
        </div>
      </div>
    </section>
  );
}
