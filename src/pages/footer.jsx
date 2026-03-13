// src/pages/footer.jsx
import React, { useState } from "react";
import {
  FiMail,
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiSend,
} from "react-icons/fi";
import "../styles/main.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log("Subscribed email:", email);
    setFeedback("Thanks for subscribing. Expect a monthly update at most.");
    setEmail("");
    setTimeout(() => setFeedback(""), 3000);
  };

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#top" className="footer-logo">
            <span className="footer-logo-mark">FA</span>
            <span className="footer-logo-text">FocusAI</span>
          </a>
          <p className="footer-copy">
            Focus analytics for teams that take deep work seriously.
          </p>

          <form className="footer-form" onSubmit={handleSubscribe}>
            <div className="footer-input-wrap">
              <FiMail className="footer-input-icon" />
              <input
                type="email"
                placeholder="Work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="footer-submit">
                <FiSend />
              </button>
            </div>
            {feedback && <p className="footer-feedback">{feedback}</p>}
          </form>
        </div>

        <div className="footer-links-grid">
          <div className="footer-column">
            <h3>Product</h3>
            <ul>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#projects">Screenshots</a>
              </li>
              <li>
                <a href="#dashboard">Analytics</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
              <li>
                <a href="#press">Press kit</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#docs">Documentation</a>
              </li>
              <li>
                <a href="#status">Status</a>
              </li>
              <li>
                <a href="#changelog">Changelog</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-social">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FiTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href="mailto:hello@focusai.app"
              aria-label="Email"
            >
              <FiMail />
            </a>
          </div>
          <div className="footer-meta">
            <p>
              © {new Date().getFullYear()} FocusAI, Inc. All rights reserved.
            </p>
            <div className="footer-meta-links">
              <a href="#privacy">Privacy</a>
              <span>•</span>
              <a href="#terms">Terms</a>
              <span>•</span>
              <a href="#cookies">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;