import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { ProjectCardProps } from '../types/Project';
import '../styles/portFolioPage.css';
import GradHat from '../assets/graduation-hat.jpg'; // Replace with your actual image path

const PortfolioPage: React.FC = () => {
  const [projects, setProjects] = useState<ProjectCardProps[]>([]);

  useEffect(() => {
    fetch('/projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div className="portfolio-page">
      {/* Education Sidebar */}
      <aside className="education-sidebar">
        <h1>Education</h1>
        <div className="education-wrapper">
          {/* Graduation Hat Image */}
          <img src={GradHat} alt="Graduation Hat" />
          {/* Education Items Container */}
          <div className="education-items">
            <div className="education-item">
              <h3>Master of Science - MS</h3>
              <p>Software Development</p>
              <p>Boston University | December 2025</p>
            </div>
            <div className="education-item">
              <h3>Bachelor's degree - BA</h3>
              <p>Management Information Systems</p>
              <p>University of South Florida | May 2000</p>
            </div>
          </div>
        </div>
      </aside>


      {/* Main Projects Section */}
      <section className="portfolio-main">
        <h1>My Portfolio</h1>
        <section className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </section>
      </section>
    </div>
  );
};

export default PortfolioPage;