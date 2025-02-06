// About.js
import React from 'react';
import './About.css';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';

const About = () => {
  // Initialize the Intersection Observer from custom hook
  useFadeInOnScroll();

  return (
    <section id="about" className="about">
      <div className="about-container fade-in">
        {/* Main Content Area */}
        <div className="about-content fade-in">
          <h2>About Me</h2>
          <p>
            I'm Kai Indigo Wolf, a UX Designer and Developer passionate about
            crafting intuitive digital experiences that empower users and foster
            positive change.
          </p>
          <p>
            I’m a dedicated lifelong learner and independent creative, committed
            to using design thinking and empathy to solve complex problems. My
            process blends thorough user research, elegant interaction design,
            and rigorous testing—ensuring every project not only looks
            compelling but also delivers real value.
          </p>
          <p>
            When I'm not immersed in designing digital products, you might find
            me adventuring with my four eclectic, homeschooled kiddos, nurturing
            my ever-growing houseplant collection, hiking through nature,
            playing with my three cuddly cats, dancing under a full moon by a
            bonfire, or savoring my morning masala chai. At heart, I'm driven by
            a deep commitment to improving how we interact with technology and
            bettering the lives of everyone on this planet.
          </p>
        </div>

        {/* Sidebar for Contact Info & Resume */}
        <div className="about-sidebar fade-in">
          <div className="contact-info fade-in">
            <h3>Contact Info</h3>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:kai.indigo.wolf@gmail.com">
                kai.indigo.wolf@gmail.com
              </a>
            </p>
            <p>
              <strong>Location:</strong> Columbia, Missouri
            </p>
          </div>
          <a href="/resume.pdf" download className="btn resume-btn fade-in">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;