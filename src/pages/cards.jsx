import React from "react";
import "../styles/main.css";

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
