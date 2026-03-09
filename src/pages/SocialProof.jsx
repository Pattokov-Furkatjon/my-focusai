import React from 'react';
import '../styles/main.css';

const SocialProof = () => {
  const logos = [
    { name: 'Microsoft', icon: '⚡' },
    { name: 'Google', icon: '🔍' },
    { name: 'Amazon', icon: '🛒' },
    { name: 'Apple', icon: '🍎' },
    { name: 'Meta', icon: '📘' },
    { name: 'Netflix', icon: '🎬' },
    { name: 'Microsoft', icon: '⚡' },
    { name: 'Firefox', icon: '🔍' },
    { name: 'wildberries', icon: '🛒' },
    { name: 'Samsung', icon: '📱' },
    { name: 'Facebook', icon: '📘' },
    { name: 'Youtube', icon: '🎬' },
  ];

  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="social-proof">
      <p className="trusted-text">Trusted by 500+ teams worldwide</p>
      <div className="logo-marquee">
        <div className="logo-track">
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="logo-item">
              <span className="logo-icon">{logo.icon}</span>
              <span className="logo-name">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;