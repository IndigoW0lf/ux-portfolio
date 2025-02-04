// Footer.js
import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-icons">
          <a
            href="http://www.linkedin.com/in/indigowolf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="http://www.github.com/indigow0lf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Kai Indigo Wolf. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;