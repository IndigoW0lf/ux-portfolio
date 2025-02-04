import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>What I Do</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>UX Research</h3>
            <p>Conduct user research to uncover needs and pain points.</p>
          </div>
          <div className="service-item">
            <h3>UI Design</h3>
            <p>Create intuitive and visually appealing interfaces.</p>
          </div>
          <div className="service-item">
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