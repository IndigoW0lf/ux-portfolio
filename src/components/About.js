// About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Main Content Area */}
        <div className="about-content">
          <h2 data-aos="fade-up" data-aos-offset="20">
            About Me
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" data-aos-offset="20">
            I'm Kai Indigo Wolf, a UX Designer and Developer passionate about
            crafting intuitive digital experiences that empower users and foster
            positive change.
          </p>
          <p data-aos="fade-up" data-aos-delay="200" data-aos-offset="20">
            I’m a dedicated lifelong learner and independent creative, committed
            to using design thinking and empathy to solve complex problems. My
            process blends thorough user research, elegant interaction design,
            and rigorous testing—ensuring every project not only looks
            compelling but also delivers real value.
          </p>
          <p data-aos="fade-up" data-aos-delay="300" data-aos-offset="20">
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
        <div className="about-sidebar" data-aos="fade-up" data-aos-offset="5">
          <div className="contact-info">
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
          <a
            href="/resume.pdf"
            download
            className="btn resume-btn"
            // data-aos="fade-up"
            // data-aos-delay="10"
            // data-aos-offset="10"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
