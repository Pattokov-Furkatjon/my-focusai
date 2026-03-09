import React, { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const allProjects = [
    {
      id: 1,
      title: 'Weather App',
      description: 'Real-time weather app based on OpenWeatherMap API.',
      fullDescription: 'Users can enter a city name to see current weather and a 5-day forecast. Built with Axios, React hooks, and CSS modules.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tags: ['React', 'API', 'Axios', 'CSS'],
      category: 'React',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
      date: '2025-02',
      complexity: 'Intermediate',
    },
    {
      id: 2,
      title: 'E-Commerce UI',
      description: 'Modern online store interface.',
      fullDescription: 'Product listing, filtering, cart, and checkout pages. State management with Redux Toolkit.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tags: ['React', 'Redux', 'SCSS', 'Responsive'],
      category: 'React',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
      date: '2025-01',
      complexity: 'Advanced',
    },
    {
      id: 3,
      title: 'Admin Dashboard',
      description: 'Admin panel with statistics and charts.',
      fullDescription: 'Interactive charts with Chart.js, user table, dark mode. Firebase authentication.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tags: ['React', 'Chart.js', 'Firebase', 'Context API'],
      category: 'Fullstack',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
      date: '2024-12',
      complexity: 'Advanced',
    },
    {
      id: 4,
      title: 'Task Manager',
      description: 'Daily task management app.',
      fullDescription: 'Add, edit, delete tasks, mark as completed. Data stored in LocalStorage.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tags: ['React', 'Hooks', 'LocalStorage', 'CSS'],
      category: 'JavaScript',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
      date: '2024-11',
      complexity: 'Beginner',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Personal portfolio with animations.',
      fullDescription: 'Page transitions with Framer Motion, parallax effects, project gallery.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tags: ['React', 'Framer Motion', 'Tailwind', 'Responsive'],
      category: 'React',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
      date: '2025-03',
      complexity: 'Intermediate',
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time chat app (Socket.io).',
      fullDescription: 'Create rooms, send messages, user status. Node.js backend.',
      image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tags: ['React', 'Socket.io', 'Node.js', 'Express'],
      category: 'Fullstack',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
      date: '2024-10',
      complexity: 'Advanced',
    },
    {
      id: 7,
      title: 'Recipe Finder',
      description: 'Search and save recipes.',
      fullDescription: 'Edamam API based recipe search, filters, favorites list.',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tags: ['React', 'API', 'Context API', 'SCSS'],
      category: 'React',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
      date: '2024-09',
      complexity: 'Intermediate',
    },
    {
      id: 8,
      title: 'Movie DB',
      description: 'Movie database app (TMDB).',
      fullDescription: 'Movie listing, search, details page, ratings. Infinite scroll.',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tags: ['React', 'API', 'Infinite Scroll', 'CSS'],
      category: 'JavaScript',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
      date: '2025-02',
      complexity: 'Intermediate',
    },
    {
      id: 9,
      title: 'Expense Tracker',
      description: 'Track your income and expenses.',
      fullDescription: 'Add income/expense, calculate balance, chart view.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tags: ['React', 'Hooks', 'Chart.js', 'LocalStorage'],
      category: 'JavaScript',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
      date: '2024-08',
      complexity: 'Beginner',
    },
  ];

  const [filter, setFilter] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(allProjects);

  const categories = ['All', 'React', 'JavaScript', 'Fullstack'];

  const handleFilter = (category) => {
    setFilter(category);
    if (category === 'All') {
      setVisibleProjects(allProjects);
    } else {
      setVisibleProjects(allProjects.filter(p => p.category === category));
    }
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">
        Product <span className="highlight">Screenshots</span>
        </h2>
        <p className="projects-subtitle">
          Here are some of my recent works. Click on any project to see more details.
        </p>

        <div className="projects-filter">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => handleFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <div className="project-tags">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="tag">{tag}</span>
                    ))}
                    {project.tags.length > 3 && <span className="tag">+{project.tags.length - 3}</span>}
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-meta">
                    <span className="project-date">{project.date}</span>
                    <span className={`project-complexity ${project.complexity.toLowerCase()}`}>
                      {project.complexity}
                    </span>
                  </div>
                  <div className="project-buttons">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-live">
                      <FiExternalLink /> Live
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-github">
                      <FiGithub /> Code
                    </a>
                  </div>
                </div>
              </div>
              {project.featured && <span className="featured-badge">Featured</span>}
            </div>
          ))}
        </div>

        {visibleProjects.length < allProjects.length && (
          <div className="view-all">
            <button className="btn-view-all" onClick={() => handleFilter('All')}>
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;