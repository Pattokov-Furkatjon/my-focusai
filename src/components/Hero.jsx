// src/components/Hero.jsx
import React from "react";
import "../styles/main.css";

const Hero = () => {
  return (
    <section className="section hero" id="top" aria-labelledby="hero-heading">
      <div className="container hero-grid">
        <div className="hero-left">
          <p className="hero-kicker">AI-powered focus analytics</p>

          <h1 id="hero-heading" className="hero-title">
            Master your deep work with intelligent focus tracking
          </h1>

          <p className="hero-lead">
            FocusAI brings clarity to your calendar and attention. Protect deep
            work, reduce distractions, and ship more of what matters.
          </p>

          <p className="hero-body">
            Start in minutes—no complex setup. A clean, live dashboard shows
            where your time goes and how your focus is improving over time.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary hero-cta">
              Start free trial
            </button>
            <button className="btn btn-secondary hero-ghost">
              Watch product demo
            </button>
          </div>

          <div className="hero-meta-row">
            <div className="hero-footnote">
              <span className="hero-highlight">No credit card required</span>
              <span className="hero-divider">•</span>
              <span>Cancel anytime</span>
            </div>
            <div className="hero-meta-pill">
              <span className="hero-meta-dot" />
              <span className="hero-meta-text">
                Teams in 40+ countries track focus with FocusAI
              </span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-mockup-shell">
            <div className="hero-mockup-header">
              <span className="mockup-pill mockup-pill-active">Today</span>
              <span className="mockup-pill">Week</span>
              <span className="mockup-pill">Month</span>
            </div>

            <div className="hero-mockup-main">
              <aside className="hero-sidebar">
                <div className="hero-sidebar-logo">FA</div>
                <div className="hero-sidebar-stats">
                  <div className="hero-sidebar-stat">
                    <span className="hero-sidebar-label">Focus time</span>
                    <span className="hero-sidebar-value">4h 32m</span>
                  </div>
                  <div className="hero-sidebar-stat">
                    <span className="hero-sidebar-label">Sessions</span>
                    <span className="hero-sidebar-value">12</span>
                  </div>
                  <div className="hero-sidebar-stat">
                    <span className="hero-sidebar-label">Focus score</span>
                    <span className="hero-sidebar-value positive">+12%</span>
                  </div>
                </div>
                <div className="hero-sidebar-footer">
                  <div className="hero-sidebar-line" />
                  <div className="hero-sidebar-line" />
                  <div className="hero-sidebar-line" />
                </div>
              </aside>

              <main className="hero-dashboard">
                <div className="hero-dashboard-row">
                  <div className="hero-stat-card">
                    <div className="hero-stat-label">Today&apos;s focus</div>
                    <div className="hero-stat-main">
                      <span className="hero-stat-number">4.2h</span>
                      <span className="hero-stat-pill positive">+15%</span>
                    </div>
                  </div>
                  <div className="hero-stat-card">
                    <div className="hero-stat-label">Weekly goal</div>
                    <div className="hero-stat-main">
                      <span className="hero-stat-number">28h</span>
                      <span className="hero-stat-pill positive">+8%</span>
                    </div>
                  </div>
                  <div className="hero-stat-card">
                    <div className="hero-stat-label">Distractions</div>
                    <div className="hero-stat-main">
                      <span className="hero-stat-number">3</span>
                      <span className="hero-stat-pill negative">-25%</span>
                    </div>
                  </div>
                </div>

                <div className="hero-chart">
                  <div className="hero-bar bar-1" />
                  <div className="hero-bar bar-2" />
                  <div className="hero-bar bar-3" />
                  <div className="hero-bar bar-4" />
                  <div className="hero-bar bar-5" />
                  <div className="hero-bar bar-6" />
                  <div className="hero-bar bar-7" />
                </div>
              </main>
            </div>
          </div>

          <div className="hero-mockup-caption">
            <span className="hero-caption-dot" />
            <span>Live focus analytics from your last 7 days</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;