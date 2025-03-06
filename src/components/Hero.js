import React from "react";
import "../styles/hero.css";
import "../styles/general.css";
import heroImg from "../assets/img/hero-img.png";
import linkedinIcon from "../assets/svg/linkedin.svg";
import githubIcon from "../assets/svg/github.svg";

const Hero = () => {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectSection = document.getElementById("projects");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Element with ID 'projects' not found in the DOM.");
    }
  };

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>HI, I AM ELENA!</h1>
        <p className="hero-description">
          A Virginia-based Front-End Developer & UI/UX Designer passionate about
          crafting engaging and user-friendly experiences.
        </p>
        <p>💼 UI/UX Designer at Paradigm Inc. 📍 United States</p>

        <div className="link-buttons">
          <a href="#projects" className="btn" onClick={scrollToProjects}>
            FEATURED PROJECTS ↓
          </a>
          <a
            href="https://www.linkedin.com/in/elena-ispas-990237202/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} className="svg-link" alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/catalina1993"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} className="svg-link" alt="GitHub" />
          </a>
        </div>
      </div>

      <div className="hero-img-box">
        <img src={heroImg} alt="Elena Ispas" className="hero-img" />
      </div>
    </section>
  );
};

export default Hero;
