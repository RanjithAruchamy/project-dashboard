// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProjectDetails from './components/ProjectDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/projects/:projectId" element={<ProjectDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
