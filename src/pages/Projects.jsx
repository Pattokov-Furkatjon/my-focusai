// src/pages/Projects.jsx
import React, { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import "../styles/main.css";

const Projects = () => {
  const allProjects = [
    {
      id: 1,
      title: "Weekly Focus Overview",
      description: "See all focus sessions, streaks, and distraction events.",
      image:
        "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&q=80",
      tags: ["Dashboard", "Analytics", "Charts"],
      category: "Product",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Session Timeline",
      description:
        "Understand exactly when you’re in flow and where interruptions happen.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
      tags: ["Timeline", "Deep work"],
      category: "Product",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Team Focus Map",
      description:
        "Coordinate focus hours across your team and spot collaboration windows.",
      image:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80",
      tags: ["Teams", "Scheduling"],
      category: "Team",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

  const [filter, setFilter] = useState("All");

  const categories = ["All", "Product", "Team"];

  const visible = allProjects.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <section className="section screenshots-section" id="projects">
      <div className="container">
        <header className="section-header section-header-centered">
          <p className="section-kicker">Screenshots</p>
          <h2 className="section-title">
            A calm, opinionated dashboard for deep work.
          </h2>
          <p className="section-subtitle">
            FocusAI is designed to feel invisible when you’re working, and
            crystal clear when you’re planning.
          </p>
        </header>

        <div className="filter-row">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-chip ${filter === cat ? "is-active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="screenshots-grid">
          {visible.map((project) => (
            <article
              className={`screenshot-card ${
                project.featured ? "screenshot-card-featured" : ""
              }`}
              key={project.id}
            >
              {project.featured && (
                <span className="screenshot-badge">Featured view</span>
              )}
              <div className="screenshot-media">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className="screenshot-body">
                <div className="screenshot-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="screenshot-title">{project.title}</h3>
                <p className="screenshot-text">{project.description}</p>
                <div className="screenshot-links">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-ghost"
                  >
                    <FiExternalLink />
                    Live view
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-ghost"
                  >
                    <FiGithub />
                    Docs
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;