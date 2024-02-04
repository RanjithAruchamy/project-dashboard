// api.js
import axios from 'axios';

const apiUrl = 'http://localhost:8080/api'; // Change to your Spring Boot API URL

export const getProjects = () => axios.get(`${apiUrl}/projects`);
export const getProjectById = (projectId) => axios.get(`${apiUrl}/projects/${projectId}`);
// ... add other API functions
