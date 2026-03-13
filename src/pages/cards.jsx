// src/pages/cards.jsx
import React from "react";
import "../styles/main.css";

const Cards = () => {
  const cardData = [
    {
      title: "AI-powered focus coaching",
      description:
        "Understand when you work best with intelligent insights into your deep work patterns and distraction hotspots.",
    },
    {
      title: "Session-based tracking",
      description:
        "Track structured focus sessions with automatic detection, gentle nudges, and flexible timers that adapt to your flow.",
    },
    {
      title: "Distraction guardrails",
      description:
        "Block or soften distracting apps and sites during deep work so your best hours stay dedicated to real progress.",
    },
    {
      title: "Team visibility",
      description:
        "Share focus trends with your team to coordinate no-meeting blocks and protect the hours that matter most.",
    },
    {
      title: "Smart goals & alerts",
      description:
        "Set weekly focus goals, see how you’re pacing in real time, and get nudges before you fall behind.",
    },
    {
      title: "Secure by default",
      description:
        "Your data is encrypted in transit and at rest. You control who sees what, with workspace-level privacy controls.",
    },
  ];

  return (
    <section className="section features-section" id="features">
      <div className="container">
        <header className="section-header section-header-centered">
          <p className="section-kicker">Product</p>
          <h2 className="section-title">
            Everything you need to protect your focus.
          </h2>
          <p className="section-subtitle">
            FocusAI brings planning, analytics, and guardrails together in a
            single calm dashboard designed for deep work.
          </p>
        </header>

        <div className="feature-grid">
          {cardData.map((card, index) => (
            <article className="feature-card" key={index}>
              <div className="feature-icon">
                <span aria-hidden="true">◎</span>
              </div>
              <h3 className="feature-title">{card.title}</h3>
              <p className="feature-body">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;