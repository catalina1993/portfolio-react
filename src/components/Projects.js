import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/projects.css";
import project1 from "../assets/img/project-1.png";
import project2 from "../assets/img/project-2.png";
import project3 from "../assets/img/project-3.png";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="text-container">
        <h2 className="projects-heading">FEATURED PROJECTS</h2>
        <p className="projects-description">
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>
      </div>

      <ProjectCard
        title="NuCamp"
        description="A B2C web app designed for outdoor enthusiasts to explore and access campsite information."
        year="2025"
        role="Front-end Developer"
        image={project1}
        liveDemo="https://nucampsite-app.netlify.app"
        github="https://github.com/catalina1993/nucampsite-project"
      />

      <ProjectCard
        title="Anime Blurred Quest"
        description="An interactive web game for anime fans to test their knowledge by guessing characters from blurred images and hints."
        year="2025"
        role="Designer & Front-end Developer"
        image={project2}
        liveDemo="https://anime-blurred-quest.netlify.app"
        github="https://github.com/catalina1993/anime-blurred-quest-main"
      />

      <ProjectCard
        title="SpellFinder"
        description="A D&D spell search tool designed for players and dungeon masters to easily filter, search, and explore a vast collection of spells."
        year="2025"
        role="Designer & Front-end Developer"
        image={project3}
        liveDemo="https://dnd-spell-finder.netlify.app"
        github="https://github.com/catalina1993/SpellFinder-main"
      />
    </section>
  );
};

export default Projects;
