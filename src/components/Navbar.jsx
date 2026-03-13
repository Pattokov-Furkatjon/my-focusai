// src/components/Navbar.jsx
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import "../styles/main.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#top" className="nav-logo">
          <span className="nav-logo-mark">FA</span>
          <span className="nav-logo-text">FocusAI</span>
        </a>

        <nav className="nav-links-wrapper" aria-label="Main navigation">
          <ul className="nav-links">
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#projects">Screenshots</a>
            </li>
            <li>
              <a href="#dashboard">Dashboard</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
          </ul>

          <div className="nav-cta-group">
            <a href="#contact" className="nav-link-muted">
              Contact
            </a>
            <button className="btn btn-primary nav-cta">Get Started</button>
          </div>
        </nav>

        <button
          className="nav-hamburger"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="nav-mobile" aria-label="Mobile navigation">
          <ul className="nav-mobile-links">
            <li>
              <a href="#features" onClick={closeMenu}>
                Features
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu}>
                Screenshots
              </a>
            </li>
            <li>
              <a href="#dashboard" onClick={closeMenu}>
                Dashboard
              </a>
            </li>
            <li>
              <a href="#pricing" onClick={closeMenu}>
                Pricing
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
          <div className="nav-mobile-cta">
            <button className="btn btn-primary" onClick={closeMenu}>
              Get Started
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;