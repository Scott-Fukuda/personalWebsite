import { useState } from "react";

const navLinks = [
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "about", href: "#about" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-14"
      style={{
        background: 'rgba(14,14,14,0.92)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #1E1E1E',
      }}
    >
      <a
        href="#home"
        className="font-grotesk font-bold text-cream text-sm tracking-widest hover:text-amber transition-colors"
      >
        SCOTT FUKUDA
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="font-mono text-xs text-muted hover:text-cream transition-colors"
          >
            {label}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden font-mono text-xs text-muted hover:text-cream transition-colors"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "menu"}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="absolute top-14 left-0 right-0 md:hidden flex flex-col py-4"
          style={{ background: '#0E0E0E', borderBottom: '1px solid #1E1E1E' }}
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="font-mono text-xs text-muted hover:text-cream transition-colors px-6 py-3"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
