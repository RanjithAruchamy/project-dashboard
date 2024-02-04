// ProjectDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProjectById } from '../services/api';
import './ProjectDetails.css'; // Import the CSS file

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await getProjectById(projectId);
        setProject(response.data);
      } catch (error) {
        console.error(`Error fetching project with ID ${projectId}:`, error);
      }
    };

    fetchProject();
  }, [projectId]);

  if (!project) {
    return <p>Loading...</p>;
  }

  return (
    <div className="project-details-container">
      <h1 className="project-name">{project.name}</h1>
      <p className="project-description">Description: {project.description}</p>
      <p className="available-count">Available Count: {project.availableCount}</p>
  
      <div className="vacancies-section">
        <h3 className="section-title">Vacancies</h3>
        <div className="tile-container">
          {project.vacancies.map((vacancy) => (
            <div key={vacancy.id} className="tile">
              <p>{vacancy.position}</p>
              <p>Count: {vacancy.count}</p>
            </div>
          ))}
        </div>
      </div>
  
      <div className="resources-section">
        <h3 className="section-title">Resources</h3>
        <div className="tile-container">
          {project.resources.map((resource) => (
            <div key={resource.userId} className="tile">
              <p>{resource.name}</p>
              <p>{resource.designation} (Experience: {resource.experience} years)</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
