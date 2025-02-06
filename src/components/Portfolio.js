// Portfolio.js
import React from 'react';
import './Portfolio.css';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

const Portfolio = () => {
  useFadeInOnScroll();

  const projects = [
    {
      id: 1,
      title: 'Justice Connect',
      description:
        'A digital platform connecting users with local activism, volunteering, and community events focused on justice issues.',
      image: '/images/justice-connect.jpg',
      link: '/projects/justice-connect',
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
    <section id="portfolio" className="portfolio fade-in">
      <div className="container fade-in">
        <h2 className="fade-in">Projects</h2>
        <div className="projects-grid fade-in">
          {projects.map((project) => (
            <div key={project.id} className="project-card fade-in">
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