import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-links">
          <a href="https://github.com/Tharunkumar0901" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="https://www.instagram.com/tharun_kumar_03/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/tharun-kumar-d-s-ba4328200/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  