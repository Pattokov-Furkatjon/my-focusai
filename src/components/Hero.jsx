import React from 'react';
import '../styles/main.css';

const Hero = () => {
  return (
    <section className="section hero">
      <div className="container hero-content">
        <div className="hero-left">
          <h1>Master Your Focus with AI</h1>
          <p>
            Boost productivity and eliminate distractions with our AI-powered deep work assistant.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Start Free</button>
            <button className="btn-secondary">Watch Demo</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="mockup-box">
            <div className="dashboard">
              {/* Sidebar */}
              <div className="sidebar">
                <div className="logo">FA</div>
                <div className="sidebar-stats">
                  <div className="sidebar-stat">
                    <span className="stat-label">Focus Time</span>
                    <span className="stat-value">4h</span>
                  </div>
                  <div className="sidebar-stat">
                    <span className="stat-label">Sessions</span>
                    <span className="stat-value">35m</span>
                  </div>
                  <div className="sidebar-stat">
                    <span className="stat-label">Score</span>
                    <span className="stat-value positive">+12%</span>
                  </div>
                </div>
                <div className="sidebar-footer">
                  <div className="menu-line"></div>
                  <div className="menu-line"></div>
                  <div className="menu-line"></div>
                </div>
              </div>

              {/* Main */}
              <div className="main">
                <div className="topbar"></div>

                <div className="stats">
                  <div className="stat-card">
                    <span className="stat-title">Page Views</span>
                    <div className="stat-main">
                      <span className="stat-number">12</span>
                      <span className="stat-trend positive">+8%</span>
                    </div>
                  </div>
                  <div className="stat-card">
                    <span className="stat-title">Visitors Rate</span>
                    <div className="stat-main">
                      <span className="stat-number">3.2k</span>
                      <span className="stat-trend positive">+3%</span>
                    </div>
                  </div>
                  <div className="stat-card">
                    <span className="stat-title">Bounce Rate</span>
                    <div className="stat-main">
                      <span className="stat-number">42%</span>
                      <span className="stat-trend negative">-2%</span>
                    </div>
                  </div>
                </div>

                <div className="chart">
                  <div className="bar bar1"></div>
                  <div className="bar bar2"></div>
                  <div className="bar bar3"></div>
                  <div className="bar bar4"></div>
                  <div className="bar bar5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;