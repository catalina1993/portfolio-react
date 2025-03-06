import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/svg/logo.svg";
import "../styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
      </Link>
      <nav className={`main-nav ${isOpen ? "open" : ""}`}>
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <a href="#" className="nav-link">
              Resume
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
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
