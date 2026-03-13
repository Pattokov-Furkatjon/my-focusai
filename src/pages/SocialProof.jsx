// src/pages/SocialProof.jsx
import React from "react";
import "../styles/main.css";

const SocialProof = () => {
  const logos = [
    { name: "Linear", icon: "◎" },
    { name: "Stripe", icon: "₴" },
    { name: "Vercel", icon: "▲" },
    { name: "Figma", icon: "●" },
    { name: "Notion", icon: "N" },
    { name: "GitHub", icon: "◆" },
  ];

  const looped = [...logos, ...logos];

  return (
    <section className="section social-proof">
      <div className="container social-proof-inner">
        <p className="social-kicker">Trusted by modern teams</p>
        <p className="social-heading">
          Built for high-focus engineering and product teams.
        </p>

        <div className="logo-marquee" aria-hidden="true">
          <div className="logo-track">
            {looped.map((logo, index) => (
              <div key={index} className="logo-pill">
                <span className="logo-pill-icon">{logo.icon}</span>
                <span className="logo-pill-text">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;