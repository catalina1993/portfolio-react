import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/svg/logo.svg";
import "../styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
      </Link>

      <nav className={`main-nav ${isOpen ? "open" : ""}`}>
        <ul className="nav-list">
          <li>
            <Link
              to="/"
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
              onClick={handleMenuClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`nav-link ${
                location.pathname === "/about" ? "active" : ""
              }`}
              onClick={handleMenuClick}
            >
              About
            </Link>
          </li>
          <li>
            <a
              href="https://storage.googleapis.com/uxfolio/63bc66ed7452170003f081a0/ElenaIspasResume_ID7.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              onClick={handleMenuClick}
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="https://uxfol.io/fd8644f3"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              onClick={handleMenuClick}
            >
              Design Portfolio
            </a>
          </li>
        </ul>
      </nav>

      <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </button>
    </header>
  );
};

export default Navbar;
