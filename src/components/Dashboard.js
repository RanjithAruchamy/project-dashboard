// Dashboard.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProjects } from '../services/api';
import '../App.css';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getProjects();
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Project Hub</h1>
      <div className="project-tiles">
        {projects.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id} className="project-tile">
            <h3>{project.name}</h3>
            <p>Available Count: {project.availableCount}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
