// Hero.js
import React from 'react';
import './Hero.css';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

const Hero = () => {
  useFadeInOnScroll();

  return (
    <section id="home" className="hero fade-in">
      <div className="hero-content fade-in">
        <h1 className="fade-in">I'm so glad you're here.</h1>
        <p className="fade-in">
          I'm Kai Indigo Wolf – A UX/UI Designer &amp; Developer
        </p>
        <a href="#contact" className="btn fade-in">
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;