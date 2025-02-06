// Footer.js
import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

const Footer = () => {
  useFadeInOnScroll();

  return (
    <footer className="footer fade-in">
      <div className="container fade-in">
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
        <p className="fade-in">
          &copy; {new Date().getFullYear()} Kai Indigo Wolf. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;