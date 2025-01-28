import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, imageUrl, projectLink, features }) => {
  return (
    <div className="project-card">
      <div className="project-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {features && features.length > 0 && (
          <ul className="project-card-features">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={title} className="project-card-image" />
      </a>
      </div>
    </div>
  );
};

export default ProjectCard;
