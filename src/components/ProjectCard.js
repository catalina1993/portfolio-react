import React from "react";
import "../styles/projects.css";

const ProjectCard = ({
  title,
  description,
  year,
  role,
  image,
  liveDemo,
  github,
}) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-details">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-info">
          <p className="info-label">PROJECT INFO</p>
          <div className="info-row">
            <span>Year</span> <span>{year}</span>
          </div>
          <div className="info-row">
            <span>Role</span> <span>{role}</span>
          </div>
        </div>
        <div className="project-links">
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Live Demo <span className="arrow-icon">↗</span>
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <span>See on GitHub</span>
            <svg
              className="github-icon"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 .297c-6.6 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.387.6.113.82-.263.82-.58 0-.287-.01-1.04-.015-2.04-3.34.727-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.756-1.334-1.756-1.088-.743.083-.728.083-.728 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.805 1.304 3.49.997.108-.775.42-1.305.76-1.605-2.665-.304-5.465-1.333-5.465-5.932 0-1.31.465-2.385 1.235-3.225-.135-.303-.54-1.527.105-3.18 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.295-1.552 3.3-1.23 3.3-1.23.645 1.653.24 2.877.105 3.18.77.84 1.235 1.915 1.235 3.225 0 4.61-2.805 5.625-5.475 5.925.43.375.81 1.103.81 2.225 0 1.607-.015 2.897-.015 3.287 0 .32.21.697.825.58C20.565 22.092 24 17.6 24 12.297c0-6.627-5.4-12-12-12"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
