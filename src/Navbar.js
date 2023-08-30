import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Navbar() {
  const [showIntro, setShowIntro] = useState(true);

  const handleLinkClick = () => {
    setShowIntro(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <h1 className="navbar-brand">TK</h1>
          <ul className="navbar-links">
            <li>
              <Link to="/home" className="nav-link" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="nav-link"
                onClick={handleLinkClick}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link to="/skills" className="nav-link" onClick={handleLinkClick}>
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/experience"
                className="nav-link"
                onClick={handleLinkClick}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="nav-link"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {showIntro && (
        <div className="intro-container">
          <h1 className="heading">Tharun Kumar's Portfolio</h1>
          <p className="para">To get to know about me dive right into my portfolio page</p>
        </div>
      )}
    </div>
  );
}

export default Navbar;
