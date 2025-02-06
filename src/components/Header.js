// Header.js
import React from 'react';
import './Header.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <header className="header">
      <nav className="primary-menu">
        <div className="brand-container">
          <span className="logo-text">Kai Indigo Wolf</span>
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
        </div>
        <ul className="nav-links">
          <li>
            <HashLink smooth to="/#home">
              Home
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#about">
              About Me
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#services">
              What I Do
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#portfolio">
              Projects
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#contact">
              Contact
            </HashLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;