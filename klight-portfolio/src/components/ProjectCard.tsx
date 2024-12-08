import React from 'react';
import { ProjectCardProps } from '../types/Project'; // Import the interface

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link }) => {
  return (
    <a href={link} className="project-card">
      <div className="image-container">
        <img src={image} alt={title} className="website-screenshot" />
      </div>
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;