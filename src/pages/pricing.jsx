// src/pages/pricing.jsx
import React, { useState } from "react";
import "../styles/main.css";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);

  const prices = {
    starter: 12,
    team: 29,
    business: 59,
  };

  const yearly = (m) => Math.round(m * 12 * 0.8);

  const plans = [
    {
      id: "starter",
      name: "Starter",
      description: "For individuals protecting their first deep work blocks.",
      highlighted: false,
      cta: "Start for free",
    },
    {
      id: "team",
      name: "Team",
      description: "For product teams coordinating shared focus hours.",
      highlighted: true,
      cta: "Start 14‑day trial",
    },
    {
      id: "business",
      name: "Business",
      description: "For organizations that need advanced reporting and SSO.",
      highlighted: false,
      cta: "Talk to sales",
    },
  ];

  const features = [
    "Unlimited focus sessions",
    "Smart weekly goals",
    "Distraction blocking",
    "Calendar integrations",
    "Team workspace & roles",
    "Advanced analytics",
  ];

  const availability = {
    starter: [true, true, true, false, false, false],
    team: [true, true, true, true, true, false],
    business: [true, true, true, true, true, true],
  };

  return (
    <section className="section pricing-section" id="pricing">
      <div className="container">
        <header className="section-header section-header-centered">
          <p className="section-kicker">Pricing</p>
          <h2 className="section-title">Simple, predictable pricing.</h2>
          <p className="section-subtitle">
            Start in minutes on the free trial. Upgrade when your team is ready
            to protect their best hours.
          </p>
        </header>

        <div className="billing-toggle">
          <button
            type="button"
            className={`billing-pill ${!isYearly ? "is-active" : ""}`}
            onClick={() => setIsYearly(false)}
          >
            Monthly
          </button>
          <button
            type="button"
            className={`billing-pill ${isYearly ? "is-active" : ""}`}
            onClick={() => setIsYearly(true)}
          >
            Yearly{" "}
            <span className="billing-save-pill">
              Save 20%
            </span>
          </button>
        </div>

        <div className="pricing-cards">
          {plans.map((plan) => {
            const monthlyPrice = prices[plan.id];
            const displayPrice = isYearly ? yearly(monthlyPrice) : monthlyPrice;
            const period = isYearly ? "year" : "month";

            return (
              <article
                key={plan.id}
                className={`pricing-card ${
                  plan.highlighted ? "pricing-card-highlighted" : ""
                }`}
              >
                {plan.highlighted && (
                  <div className="pricing-badge">Most popular</div>
                )}
                <div className="pricing-card-header">
                  <h3 className="pricing-plan-name">{plan.name}</h3>
                  <p className="pricing-plan-desc">{plan.description}</p>
                </div>
                <div className="pricing-price">
                  <span className="pricing-currency">$</span>
                  <span className="pricing-amount">{displayPrice}</span>
                  <span className="pricing-period">/{period}</span>
                </div>
                <button
                  type="button"
                  className={`btn ${
                    plan.highlighted ? "btn-primary" : "btn-secondary"
                  } pricing-cta`}
                >
                  {plan.cta}
                </button>
                <ul className="pricing-feature-list">
                  {features.map((feature, index) => {
                    const has = availability[plan.id][index];
                    return (
                      <li
                        key={feature}
                        className={`pricing-feature ${
                          has ? "is-included" : "is-missing"
                        }`}
                      >
                        <span className="pricing-feature-indicator">
                          {has ? "✓" : "–"}
                        </span>
                        <span>{feature}</span>
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="pricing-footer-note">
          <p>
            Need a larger deployment, SOC2 reports, or on‑premise options?{" "}
            <a href="#contact">Talk to our team.</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;