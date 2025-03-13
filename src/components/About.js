import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi there, I’m Elena, a UX/UI Designer and Front-End Developer. My
            path here wasn’t exactly straightforward. I studied Economics,
            worked in retail management, and even spent time as a dental
            assistant. But deep down, I knew I wanted to build things, to solve
            problems, and to make technology more accessible to people.
          </p>
          <p>
            Discovering UX/UI design was the turning point, and diving into
            front-end development allowed me to bring my designs to life.
            creativity with functionality.
          </p>
          <p>What Drives Me:</p>
          <ul>
            <li> • Designing experiences that make life easier for users.</li>
            <li> • Learning and implementing modern front-end technologies.</li>
            <li>
              • Creating pixel-perfect designs with accessibility in mind.
            </li>
          </ul>
          <p>
            When I’m not designing or coding, I’m usually playing video games,
            cruising around on my longboard, snapping photos, or getting lost in
            anime and manga.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
