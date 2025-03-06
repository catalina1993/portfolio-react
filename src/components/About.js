import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            As a Front-End Developer and UI/UX Designer, I blend creativity and
            technical skills to build user-friendly interfaces and engaging
            designs. My background in UX design and development allows me to
            take projects from concept to completion, focusing on accessibility,
            responsiveness, and usability.
          </p>
          <p>🎯 Current Focus:</p>
          <ul>
            <li>
              🚀 Building reusable UI component libraries for scalability.
            </li>
            <li>
              🏛 Enhancing workflows for government and enterprise solutions.
            </li>
            <li>📚 Mastering modern frameworks like React and CSS.</li>
          </ul>
          <p>
            When I’m not designing, you’ll find me enjoying video games,
            capturing moments with photography, longboarding, or indulging in
            anime and manga.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
