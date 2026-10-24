import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Our impact", href: "#impact" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="topbar">
      <a
        className="brand"
        href="#home"
        aria-label="ITZFIZZ home"
        onClick={closeMenu}
      >
        <span className="brand-mark">i</span>
        <span>
          ITZFIZZ<span className="brand-dot">.</span>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="#experience">
        Explore the ride <ArrowUpRight size={16} />
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav
        className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <span className="mobile-nav-label">EXPLORE ITZFIZZ</span>

        {links.map((link, index) => (
          <a
            href={link.href}
            key={link.href}
            tabIndex={menuOpen ? 0 : -1}
            onClick={closeMenu}
          >
            <span className="mobile-nav-number">0{index + 1}</span>
            {link.label}
            <ArrowDownRight size={20} />
          </a>
        ))}

        <span className="mobile-nav-note">DESIGN THAT MOVES YOU.</span>
      </nav>
    </header>
  );
}
