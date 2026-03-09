import React, { useState } from 'react';
import { FiMail, FiGithub, FiTwitter, FiLinkedin, FiSend } from 'react-icons/fi';


const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribed email:', email);
      setMessage('✅ Thank you for subscribing!');
      setEmail('');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand & Newsletter */}
        <div className="footer-brand">
          <h2 className="footer-logo">FocusAI</h2>
          <p className="footer-description">
            Master your focus with AI – boost productivity and eliminate distractions.
          </p>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <div className="input-group">
              <FiMail className="input-icon" />
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="subscribe-btn">
                <FiSend />
              </button>
            </div>
            {message && <span className="form-feedback">{message}</span>}
          </form>
        </div>

        {/* Menyu kolonkalari */}
        <div className="footer-links">
          <div className="link-column">
            <h3>Products</h3>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#dashboard">Dashboard</a></li>
              <li><a href="#integrations">Integrations</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h3>Resources</h3>
            <ul>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#docs">Documentation</a></li>
              <li><a href="#changelog">Changelog</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Ijtimoiy tarmoqlar va copyright */}
        <div className="footer-bottom">
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FiTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="mailto:hello@focusai.com" aria-label="Email">
              <FiMail />
            </a>
          </div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} FocusAI. All rights reserved.</p>
            <div className="legal">
              <a href="#terms">Terms of Service</a>
              <span className="separator">|</span>
              <a href="#privacy">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;