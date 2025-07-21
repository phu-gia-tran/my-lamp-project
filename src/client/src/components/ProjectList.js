// src/components/ProjectList.js
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

function ProjectList() {
  const [projects] = useState([
    {
      title: 'Project One',
      description: 'A brief description of the first amazing project.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Project+1',
      link: '#'
    },
    {
      title: 'Project Two',
      description: 'Details about the second project, which is also very cool.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Project+2',
      link: '#'
    },
    {
      title: 'Project Three',
      description: 'The third project, showcasing different skills and technologies.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Project+3',
      link: '#'
    }
  ]);

  return (
    <div className="container">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;