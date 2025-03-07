import React from "react";
import "../styles/footer.css";
import linkedinIcon from "../assets/svg/linkedin.svg";
import githubIcon from "../assets/svg/github.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="text-container">
        <h3 className="footer-heading">LET’S CONNECT</h3>
        <p>
          Contact me: {" "}
          <a
            href="mailto:catalina.ispas05@gmail.com?subject=Let's%20Connect&body=Hi%20Elena,"
            className="email-link"
          >
            catalina.ispas05@gmail.com
          </a>
        </p>
        <p>
          For more info, here’s my{" "}
          <a
            href="https://storage.googleapis.com/uxfolio/63bc66ed7452170003f081a0/ElenaIspasResume_ID7.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
        </p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/elena-ispas-990237202/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/catalina1993"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
        </div>
        <p className="copyright">© 2025 Elena Ispas</p>
      </div>
    </footer>
  );
};

export default Footer;
