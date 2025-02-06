// Services.js
import React from 'react';
import './Services.css';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

const Services = () => {
  useFadeInOnScroll();

  return (
    <section id="services" className="services fade-in">
      <div className="container fade-in">
        <h2 className="fade-in">What I Do</h2>
        <div className="services-list fade-in">
          <div className="service-item fade-in">
            <h3>UX Research</h3>
            <p>Conduct user research to uncover needs and pain points.</p>
          </div>
          <div className="service-item fade-in">
            <h3>UI Design</h3>
            <p>Create intuitive and visually appealing interfaces.</p>
          </div>
          <div className="service-item fade-in">
            <h3>Development</h3>
            <p>
              Build responsive, modern websites using the latest technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;