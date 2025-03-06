import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/projects.css";
import project1 from "../assets/img/project-1.png";
import project2 from "../assets/img/project-2.png";
import project3 from "../assets/img/project-3.png";

const Projects = () => {
  return (
    <section className="projects">
      <div className="text-container">
        <h2 className="projects-heading">FEATURED PROJECTS</h2>
        <p className="projects-description">
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>
      </div>

      <ProjectCard
        title="Adventure Time"
        description="Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time."
        year="2023"
        role="Front-end Developer"
        image={project1}
        liveDemo="#"
        github="#"
      />

      <ProjectCard
        title="Blog site for World News"
        description="Mastered CSS Grid complexities in building an innovative news homepage."
        year="2022"
        role="Front-end Developer"
        image={project2}
        liveDemo="#"
        github="#"
      />

      <ProjectCard
        title="E-commerce Product Page"
        description="Successfully crafted an engaging product page featuring a dynamic lightbox gallery."
        year="2022"
        role="Front-end Developer"
        image={project3}
        liveDemo="#"
        github="#"
      />
    </section>
  );
};

export default Projects;
