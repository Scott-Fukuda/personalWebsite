const links = ['experience', 'projects', 'about', 'contact']

export default function Nav() {
  return (
    <nav className="nav">
      <a className="nav-brand" href="#top">SCOTT&nbsp;FUKUDA</a>
      <div className="nav-links">
        {links.map((l) => (
          <a key={l} href={`#${l}`}>{l}</a>
        ))}
      </div>
    </nav>
  )
}
