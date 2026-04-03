export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-6xl mx-auto"
    >
      {/* Profile photo */}
      <div className="mb-10">
        <img
          src="/images/profile.png"
          alt="Scott Fukuda"
          style={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            objectFit: 'cover',
            border: '1px solid #2A2A2A',
            filter: 'brightness(0.9) saturate(0.85)',
          }}
        />
      </div>

      {/* Input signal indicator */}
      <div className="font-mono text-xs text-muted mb-10 flex items-center gap-3">
        <span
          className="inline-block w-2 h-2 rounded-full"
          style={{ background: '#C4872A', boxShadow: '0 0 6px #C4872A88' }}
        />
        <span style={{ letterSpacing: '0.15em' }}>INPUT ─────────────────</span>
      </div>

      {/* Name */}
      <h1
        className="font-grotesk font-bold text-cream leading-none mb-6"
        style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', letterSpacing: '-0.02em' }}
      >
        Scott<br />Fukuda
      </h1>

      {/* Tagline */}
      <p
        className="font-grotesk text-muted mb-10 max-w-lg"
        style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: '1.6' }}
      >
        Real-time systems. Physical integration.<br />
        Software that ships.
      </p>

      {/* Status badges */}
      <div className="flex flex-wrap gap-3 mb-12">
        <span
          className="font-mono text-xs px-3 py-1.5"
          style={{ border: '1px solid #2A2A2A', color: '#7A7268' }}
        >
          Cornell CS '28
        </span>
        <span
          className="font-mono text-xs px-3 py-1.5"
          style={{ border: '1px solid #C4872A44', color: '#C4872A' }}
        >
          ↳ Incoming AV Research @ NC State REU
        </span>
      </div>

      {/* CTA links */}
      <div className="flex flex-wrap items-center gap-6">
        <a
          href="#signal-chain"
          className="font-mono text-sm text-amber hover:text-cream transition-colors"
        >
          View Experience ↓
        </a>
        <a
          href="mailto:sdf72@cornell.edu"
          className="font-mono text-sm text-muted hover:text-cream transition-colors"
        >
          sdf72@cornell.edu
        </a>
      </div>
    </section>
  );
}
