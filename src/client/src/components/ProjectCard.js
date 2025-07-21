// src/components/ProjectCard.js
import React from 'react';

function ProjectCard({ title, description, imageUrl, link }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;