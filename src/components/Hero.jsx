import { profile } from '../data/content'

export default function Hero() {
  return (
    <header id="top" className="hero wrap">
      <p className="label hero-eyebrow hero-rise" style={{ animationDelay: '0s' }}>
        {profile.eyebrow}
      </p>
      <h1 className="display">
        <span className="hero-rise" style={{ animationDelay: '.05s' }}>Scott</span>
        <span className="hero-rise" style={{ animationDelay: '.16s' }}>Fukuda</span>
      </h1>
      <div className="hero-rule" />
      <p className="hero-lede hero-rise" style={{ animationDelay: '.42s' }}>
        {profile.tagline}
      </p>
      <div className="hero-cta hero-rise" style={{ animationDelay: '.54s' }}>
        <a className="btn btn-solid" href="#experience">See the work ↓</a>
        <a className="btn btn-ghost" href={`mailto:${profile.email}`}>{profile.email}</a>
      </div>
    </header>
  )
}
