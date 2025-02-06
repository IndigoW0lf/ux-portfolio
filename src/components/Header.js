// Header.js
import React from 'react';
import './Header.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';

const Header = () => {
  useFadeInOnScroll();

  return (
    <header className="header fade-in">
      <nav className="primary-menu fade-in">
        <div className="brand-container fade-in">
          <span className="logo-text">Kai Indigo Wolf</span>
          <div className="social-icons fade-in">
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
        <ul className="nav-links fade-in">
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