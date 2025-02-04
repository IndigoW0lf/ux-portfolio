import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'Description of Project One.',
      image: '/images/project1.jpg',
      link: '#',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Description of Project Two.',
      image: '/images/project2.jpg',
      link: '#',
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Description of Project Three.',
      image: '/images/project3.jpg',
      link: '#',
    },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card" data-aos="zoom-in">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="btn">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
