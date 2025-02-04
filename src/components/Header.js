// Header.js
import React from 'react';
import './Header.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

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
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#services">What I Do</a>
          </li>
          <li>
            <a href="#portfolio">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;