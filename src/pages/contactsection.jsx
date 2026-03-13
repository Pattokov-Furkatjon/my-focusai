// src/pages/contactsection.jsx
import React, { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import "../styles/main.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false });

    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        console.log("Message sent:", formData);
        setStatus({ submitting: false, success: true, error: false });
        setFormData({ name: "", email: "", message: "" });
        setTimeout(
          () => setStatus((s) => ({ ...s, success: false })),
          2500
        );
      } else {
        setStatus({ submitting: false, success: false, error: true });
        setTimeout(
          () => setStatus((s) => ({ ...s, error: false })),
          2500
        );
      }
    }, 1200);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <header className="section-header">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">
            Let&apos;s protect your team&apos;s focus.
          </h2>
          <p className="section-subtitle">
            Share a bit about your workflow and we&apos;ll help you design a
            focus stack that works for your team.
          </p>
        </header>

        <div className="contact-columns">
          <aside className="contact-card contact-info-card">
            <h3>Talk to a human</h3>
            <p>
              We usually respond within one business day. No bots, no scripts—
              just a product team that cares about deep work.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-row">
                <FiMail className="contact-info-icon" />
                <div>
                  <span className="contact-info-label">Email</span>
                  <a href="mailto:hello@focusai.app">hello@focusai.app</a>
                </div>
              </div>
              <div className="contact-info-row">
                <FiPhone className="contact-info-icon" />
                <div>
                  <span className="contact-info-label">Phone</span>
                  <a href="tel:+998901234567">+998 90 123 45 67</a>
                </div>
              </div>
              <div className="contact-info-row">
                <FiMapPin className="contact-info-icon" />
                <div>
                  <span className="contact-info-label">Location</span>
                  <p>Andijon, Uzbekistan</p>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FiGithub />
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
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FiTwitter />
              </a>
            </div>
          </aside>

          <div className="contact-card contact-form-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="email">Work email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="message">How can we help?</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your team, workflows, and tools…"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary contact-submit"
                disabled={status.submitting}
              >
                {status.submitting ? "Sending…" : "Send message"}
              </button>

              {status.success && (
                <div className="form-banner form-banner-success">
                  Message sent. We&apos;ll be in touch soon.
                </div>
              )}
              {status.error && (
                <div className="form-banner form-banner-error">
                  Please fill in all fields and try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;