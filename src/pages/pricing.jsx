import React, { useState } from 'react';


const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  // Narxlar (monthly)
  const prices = {
    intro: 19,
    base: 39,
    popular: 99,
    enterprise: 199,
  };

  // Yillik hisoblash (17% chegirma)
  const yearlyPrice = (monthly) => Math.round(monthly * 12 * 0.83);

  // Xususiyatlar ro'yxati (har bir plan uchun true/false)
  const features = [
    {
      name: 'All limited links',
      intro: true,
      base: true,
      popular: true,
      enterprise: true,
    },
    {
      name: 'Own analytics platform',
      intro: false,
      base: true,
      popular: true,
      enterprise: true,
    },
    {
      name: 'Chat Support',
      intro: false,
      base: false,
      popular: true,
      enterprise: true,
    },
    {
      name: 'Optimize Hashtags',
      intro: false,
      base: true,
      popular: true,
      enterprise: true,
    },
    {
      name: 'Unlimited',
      intro: false,
      base: false,
      popular: false,
      enterprise: true,
    },
  ];

  return (
    <section className="pricing" style={{ backgroundColor: '#0A2138' }}>
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title">
            Simple, transparent pricing
          </h2>
          <p className="pricing-subtitle">No contracts. No surprise fees.</p>
          <div className="header-cta">
            <span className="contact-text">Contact us!</span>
            <a href="#contact" className="get-started-link">
              Get Started <span className="arrow">→</span>
            </a>
          </div>
        </div>

        {/* Toggle Monthly/Yearly */}
        <div className="billing-toggle">
          <span className={`toggle-option ${!isYearly ? 'active' : ''}`} onClick={() => setIsYearly(false)}>
            Monthly Pricing
          </span>
          <span className={`toggle-option ${isYearly ? 'active' : ''}`} onClick={() => setIsYearly(true)}>
            Yearly Pricing <span className="save-badge">Save 17%</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-cards">
          {/* Intro */}
          <div className="pricing-card">
            <h3 className="plan-name">Intro</h3>
            <div className="plan-price">
              <span className="currency">$</span>
              <span className="amount">{isYearly ? yearlyPrice(prices.intro) : prices.intro}</span>
              <span className="period">/{isYearly ? 'year' : 'month'}</span>
            </div>
            <button className="choose-plan-btn">Choose Plan</button>
          </div>

          {/* Base */}
          <div className="pricing-card">
            <h3 className="plan-name">Base</h3>
            <div className="plan-price">
              <span className="currency">$</span>
              <span className="amount">{isYearly ? yearlyPrice(prices.base) : prices.base}</span>
              <span className="period">/{isYearly ? 'year' : 'month'}</span>
            </div>
            <button className="choose-plan-btn">Choose Plan</button>
          </div>

          {/* Popular */}
          <div className="pricing-card popular">
            <div className="popular-badge">Popular</div>
            <h3 className="plan-name">Popular</h3>
            <div className="plan-price">
              <span className="currency">$</span>
              <span className="amount">{isYearly ? yearlyPrice(prices.popular) : prices.popular}</span>
              <span className="period">/{isYearly ? 'year' : 'month'}</span>
            </div>
            <button className="choose-plan-btn">Choose Plan</button>
          </div>

          {/* Enterprise */}
          <div className="pricing-card">
            <h3 className="plan-name">Enterprise</h3>
            <div className="plan-price">
              <span className="currency">$</span>
              <span className="amount">{isYearly ? yearlyPrice(prices.enterprise) : prices.enterprise}</span>
              <span className="period">/{isYearly ? 'year' : 'month'}</span>
            </div>
            <button className="choose-plan-btn">Choose Plan</button>
          </div>
        </div>

        {/* Features Table */}
        <div className="features-table">
          <div className="features-header">
            <div className="feature-name"></div>
            <div className="feature-plan">Intro</div>
            <div className="feature-plan">Base</div>
            <div className="feature-plan">Popular</div>
            <div className="feature-plan">Enterprise</div>
          </div>
          {features.map((feature, idx) => (
            <div className="feature-row" key={idx}>
              <div className="feature-name">{feature.name}</div>
              <div className="feature-plan">{feature.intro ? '✓' : '–'}</div>
              <div className="feature-plan">{feature.base ? '✓' : '–'}</div>
              <div className="feature-plan">{feature.popular ? '✓' : '–'}</div>
              <div className="feature-plan">{feature.enterprise ? '✓' : '–'}</div>
            </div>
          ))}
        </div>

        {/* Extra CTA */}
        <div className="extra-cta">
          <div className="save-options">
            <span className="save-item">✓ Monthly Pricing</span>
            <span className="save-item">✓ Yearly Pricing / Save 17%</span>
            <span className="save-item">✗ Save %20</span>
            <span className="save-item">● Choose Plan</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;