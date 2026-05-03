import React from "react";
import "../styles/main.css";
/**
 * Redesigned Card Components for SaaS Landing Page
 * - Premium, modern look with flex/grid layout, improved spacing, shadows, and minimal, consistent styling.
 */

const PremiumFeaturesCards = ({ cards }) => (
  <div className="premium-cards-grid">
    {cards.map((card, idx) => (
      <div className="premium-card" key={idx}>
        <div className="premium-card-icon" aria-hidden="true">
          {/* Use a different emoji per feature for added polish */}
          {idx === 0 && <span role="img" aria-label="AI">🤖</span>}
          {idx === 1 && <span role="img" aria-label="Block">🚫</span>}
          {idx === 2 && <span role="img" aria-label="Analytics">📊</span>}
          {idx === 3 && <span role="img" aria-label="Schedule">📅</span>}
          {idx === 4 && <span role="img" aria-label="Realtime">⚡</span>}
          {idx === 5 && <span role="img" aria-label="Team">🤝</span>}
          {idx > 5 && <span role="img" aria-label="Feature">✨</span>}
        </div>
        <div className="premium-card-body">
          <h3 className="premium-card-title">{card.title}</h3>
          <p className="premium-card-desc">{card.description}</p>
        </div>
      </div>
    ))}
  </div>
);

/* --- CSS styles for modern premium card components --- */
const styles = `
.premium-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
  gap: 2rem;
  width: 100%;
  margin-top: 2.4rem;
  margin-bottom: 1.5rem;
}

.premium-card {
  background: var(--main-bg, #fff);
  border-radius: 1.4rem;
  border: 1px solid rgba(60, 70, 130, 0.07);
  box-shadow: 0 6px 32px 0 rgba(34, 39, 64, 0.08), 0 1.5px 4px 0 rgba(64,81,137,0.07);
  transition: box-shadow .19s, border-color .22s, transform .14s;
  padding: 2rem 1.6rem 1.6rem 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 244px;
  cursor: pointer;
}
.premium-card:hover, .premium-card:focus-within {
  box-shadow: 0 10px 32px 0 rgba(34, 20, 84, 0.13), 0 4px 24px 0 rgba(64,81,137,0.12);
  border-color: var(--primary-btn, #3b82f6);
  transform: translateY(-3px) scale(1.025);
}
.premium-card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.35rem;
  width: 52px;
  height: 52px;
  border-radius: 1.4rem;
  background: linear-gradient(92deg, #f5f7fa, #f0efff);
  color: var(--primary-btn, #3b82f6);
  margin-bottom: 1.1rem;
  box-shadow: 0 3px 16px 0 rgba(100,100,190,0.11);
  transition: background .2s;
}
.premium-card-title {
  font-size: 1.18rem;
  font-weight: 700;
  color: var(--heading-dark, #26294d);
  margin-bottom: 0.48rem;
  letter-spacing: -0.012em;
  line-height: 1.27;
}
.premium-card-desc {
  font-size: 1.02rem;
  font-weight: 400;
  color: var(--secondary-text, #474b6d);
  margin-bottom: 0;
  line-height: 1.63;
  letter-spacing: -0.006em;
}
@media (max-width: 650px) {
  .premium-cards-grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
  .premium-card {
    padding: 1.34rem 1rem 1rem 1rem;
    min-height: 0;
  }
}
`;

// Inject the styles at runtime (works for most React SPA setups)
if (typeof document !== "undefined" && !document.getElementById("premium-card-css")) {
  const style = document.createElement("style");
  style.id = "premium-card-css";
  style.innerHTML = styles;
  document.head.appendChild(style);
}


const Cards = () => {
  const cardData = [
    {
      title: "AI-Powered Focus",
      description:
        "Our AI assistant analyzes your work patterns and provides personalized insights to help you stay focused and productive.",
    },
    {
      title: "Distraction Blocking",
      description:
        "Block distracting websites and apps during your deep work sessions to maintain your concentration.",
    },
    {
      title: "Focus Analytics",
      description:
        "Track your focus time, sessions, and productivity trends with intuitive analytics tools.",
    },
    {
      title: "Custom Schedules",
      description:
        "Set up personal work and break schedules to match your rhythm.",
    },
    {
      title: "Real-time Insights",
      description:
        "Receive instant feedback on your focus levels and productivity.",
    },
    {
      title: "Team Collaboration",
      description:
        "Share progress and focus stats with your team to stay aligned.",
    },
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2 className="contact-title">Powerful <span className="highlight">Features</span></h2>
          <p>
            Everything you need to master your focus and boost productivity.
          </p>
        </div>

        <div className="cards">
          {cardData.map((card, index) => (
            <div key={index} className="card">
              <div className="card-icon">⚡</div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
