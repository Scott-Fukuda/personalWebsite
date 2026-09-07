import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-inner">
        <div>
          <h2 className="display">Contact</h2>
          <a className="footer-mail" href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
        <div className="footer-social">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        </div>
      </div>
      <div className="footer-base">SCOTT FUKUDA — 2026</div>
    </footer>
  )
}
