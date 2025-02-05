import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './ProjectPage.css'; // Ensure this file exists and has styles

const JusticeConnect = () => {
  return (
    <>
      <Header />
      <section className="project-page">
        <div className="container">
          <h1>Justice Connect</h1>
          <img
            src="/images/justice-connect.jpg"
            alt="Justice Connect"
            className="project-image"
          />
          <p className="project-description">
            A digital platform connecting users with local activism,
            volunteering, and community events focused on justice issues.
          </p>

          <h2>Problem Statement</h2>
          <p>
            Activists and individuals passionate about justice issues struggle
            to find local opportunities to get involved. Justice Connect bridges
            this gap by providing an intuitive, engaging platform where users
            can discover events, access resources, and share their activism
            stories.
          </p>

          <h2>Users & Research</h2>
          <ul>
            <li>Activists looking for ways to get involved</li>
            <li>Individuals new to activism seeking resources and community</li>
            <li>Grassroots organizations and non-profits needing visibility</li>
          </ul>

          <h2>Process</h2>
          <ul>
            <li>
              <strong>User Flow & Information Architecture:</strong> Mapped user
              interactions with Miro, defining key pathways for event discovery,
              resource access, story sharing, and sign-ups.
            </li>
            <li>
              <strong>Wireframing & Prototyping:</strong> Created low-fidelity
              wireframes in Figma, focusing on user-friendly navigation and
              clear CTAs.
            </li>
            <li>
              <strong>Visual Identity:</strong> Developed a color palette
              reflecting energy, urgency, and trust.
            </li>
          </ul>

          <h2>Next Steps</h2>
          <ul>
            <li>Complete wireframes & visual identity</li>
            <li>Prototype key screens in Figma</li>
            <li>Conduct usability testing to refine design</li>
          </ul>

          <a
            href="https://www.figma.com/"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Wireframes (Coming Soon)
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default JusticeConnect;