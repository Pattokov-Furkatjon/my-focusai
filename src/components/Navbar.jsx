import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import "../styles/main.css";

const NAV_LINKS = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className="navbar elevation-lg"
      style={{
        background: "var(--main-bg)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        position: "sticky",
        top: 0,
        zIndex: 40,
        width: "100vw",
      }}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="container navbar-container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 74,
        paddingTop: 0,
        paddingBottom: 0,
        marginInline: "auto",
        maxWidth: 1200
      }}>
        {/* Logo Section */}
        <a
          href="/"
          className="logo"
          style={{
            fontWeight: 700,
            fontSize: "1.375rem",
            color: "var(--heading-dark)",
            letterSpacing: "-0.03em",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              display: "inline-block",
              background: "linear-gradient(90deg,#3b82f6,#8b5cf6 90%)",
              color: "#fff",
              borderRadius: 6,
              padding: "2px 10px",
              fontSize: "1.05rem",
              marginRight: 6,
              fontWeight: 900,
              letterSpacing: "-0.04em"
            }}
          >
            FA
          </span>
          <span style={{ color: "var(--heading-dark)" }}>FocusAI</span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="nav-wrapper"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <ul className="nav-links"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2.5rem",
              listStyle: "none",
            }}
          >
            {NAV_LINKS.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  className="nav-link"
                  style={{
                    color: "var(--secondary-text)",
                    fontWeight: 500,
                    fontSize: "1rem",
                    position: "relative",
                    padding: "8px 0",
                    letterSpacing: "-0.01em",
                    transition: "color .15s"
                  }}
                  tabIndex={0}
                  onFocus={(e) => (e.target.style.color = "var(--primary-btn)")}
                  onBlur={(e) => (e.target.style.color = "var(--secondary-text)")}
                  onMouseEnter={e => (e.target.style.color = "var(--primary-btn)")}
                  onMouseLeave={e => (e.target.style.color = "var(--secondary-text)")}
                >
                  {name}
                  {/* Subtle hover underline */}
                  <span
                    style={{
                      display: "block",
                      height: 2,
                      borderRadius: 1,
                      background: "var(--primary-btn)",
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: 0,
                      width: "0%",
                      transition: "width .2s cubic-bezier(.4,0,.2,1)",
                    }}
                    className="nav-underline"
                  />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#get-started"
            className="btn-primary nav-btn"
            style={{
              padding: "0.65em 2em",
              fontWeight: 600,
              fontSize: "1.04rem",
              background: "linear-gradient(90deg, var(--primary-btn), #8b5cf6)",
              color: "#fff",
              borderRadius: "var(--radius-md)",
              border: "none",
              boxShadow: "0 1.5px 6px 0 rgba(59,130,246,0.08)",
              transition: "background .17s",
              letterSpacing: "-0.01em",
              cursor: "pointer",
              outline: "none",
            }}
            tabIndex={0}
          >
            Get Started
          </a>
        </nav>

        {/* Hamburger (Mobile) */}
        <button
          className="hamburger-btn"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-nav-menu"
          aria-expanded={isMenuOpen}
          style={{
            display: "none",
            background: "none",
            border: "none",
            padding: 0,
            marginLeft: 8,
            cursor: "pointer",
            color: "var(--heading-dark)",
          }}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>
      {/* Mobile Drawer Navigation */}
      {isMenuOpen && (
        <div
          className="mobile-menu"
          id="mobile-nav-menu"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: "100vh",
            width: "100vw",
            background: "rgba(10,15,28,0.92)",
            zIndex: 90,
            backdropFilter: "blur(2px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transition: "opacity .2s",
            paddingTop: 84,
          }}
        >
          <button
            className="hamburger-btn"
            aria-label="Close menu"
            onClick={closeMenu}
            style={{
              position: "absolute",
              top: 28,
              right: 32,
              background: "none",
              border: "none",
              color: "var(--heading-dark)",
              fontSize: 32,
              cursor: "pointer"
            }}
          >
            <HiX size={36} />
          </button>
          <ul
            className="mobile-nav-links"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2.5rem",
              alignItems: "center",
              marginBottom: "3rem",
              listStyle: "none",
              padding: 0
            }}
          >
            {NAV_LINKS.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  onClick={closeMenu}
                  style={{
                    color: "#fff",
                    fontSize: "1.35rem",
                    fontWeight: 600,
                    letterSpacing: "-0.015em",
                    textDecoration: "none",
                    transition: "color .13s"
                  }}
                  tabIndex={0}
                >
                  {name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#get-started"
                onClick={closeMenu}
                className="btn-primary"
                style={{
                  padding: "0.7em 2.7em",
                  fontWeight: 600,
                  fontSize: "1.096rem",
                  background: "linear-gradient(90deg, var(--primary-btn), #8b5cf6)",
                  color: "#fff",
                  borderRadius: "var(--radius-md)",
                  border: "none",
                  boxShadow: "0 2px 10px 0 rgba(59,130,246,0.12)",
                  letterSpacing: "-0.01em",
                  outline: "none",
                  marginTop: "0.5em"
                }}
                tabIndex={0}
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      )}
      <style>{`
        /* Responsive Nav Hide/Show */
        @media (max-width: 940px) {
          .nav-links, .nav-btn {
            display: none !important;
          }
          .hamburger-btn {
            display: block !important;
          }
        }

        @media (min-width: 941px) {
          .mobile-menu {
            display: none !important;
          }
          .hamburger-btn {
            display: none !important;
          }
        }
        @media (max-width: 550px) {
          .navbar-container {
            padding-left: 4vw !important;
            padding-right: 4vw !important;
          }
        }
        .nav-link:focus .nav-underline,
        .nav-link:hover .nav-underline {
          width: 100% !important;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
