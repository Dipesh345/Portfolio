import React, { useState } from "react";
import portfolioData from "../data/Portfolio";
import { FaGithub, FaInfoCircle, FaTimes } from "react-icons/fa";
import "../styles/portfolio.css"; // custom css

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // If not showing all, only show first 4
  const visibleProjects = showAll ? portfolioData : portfolioData.slice(0, 4);

  return (
    <section className="portfolio-section">
      {/* Title */}
      <div className="portfolio-header">
        <h2>Portfolio</h2>
        <p>A showcase of my best projects built with modern web technologies.</p>
      </div>

      {/* Portfolio Grid */}
      <div className="portfolio-grid">
        {visibleProjects.map((project, index) => (
          <div
            key={project.id}
            className={`portfolio-card animate-fade-up`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Image */}
            <img src={project.image} alt={project.title} />

            {/* Overlay */}
            <div className="portfolio-overlay">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
              >
                <FaGithub />
              </a>
              <button
                onClick={() => setSelectedProject(project)}
                className="icon-btn"
              >
                <FaInfoCircle />
              </button>
            </div>

            {/* Title */}
            <div className="portfolio-info">
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="view-more-container">
        <button
          className="view-more-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "View Less" : "View More"}
        </button>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay">
          <div className="modal-content animate-zoom-in">
            <button
              onClick={() => setSelectedProject(null)}
              className="modal-close"
            >
              <FaTimes />
            </button>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
