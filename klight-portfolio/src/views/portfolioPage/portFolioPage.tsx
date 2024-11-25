import React from 'react';
import '../../styles/portFolioPage.css';

import cookingBackground from '../../assets/cookingBackground.png';
import fashionBackground from '../../assets/fashionBackground.png';
import furnitureBackground from '../../assets/furnitureBackground.png';
import workoutBackground from '../../assets/workoutBackground.png';

const projects = [
  {
    title: 'Cooking Background',
    description: 'Explore delicious recipes and cooking tips.',
    image: cookingBackground,
    link: '#',
  },
  {
    title: 'Fashion Background',
    description: 'Dive into the latest trends in fashion.',
    image: fashionBackground,
    link: '#',
  },
  {
    title: 'Furniture Background',
    description: 'Discover stunning furniture designs.',
    image: furnitureBackground,
    link: '#',
  },
  {
    title: 'Workout Background',
    description: 'Get motivated with workout routines.',
    image: workoutBackground,
    link: '#',
  },
];

const PortfolioPage: React.FC = () => {
  return (
    <div className="portfolio-page">
      <section className="hero-section">
        <h1>My Portfolio</h1>
        <p>Explore some of the projects I've worked on.</p>
      </section>

      <section className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="image-container">
              <img
                src={project.image}
                alt={project.title}
                className="website-screenshot"
              />
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="view-project-button">
                View Project
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PortfolioPage;