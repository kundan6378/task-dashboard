import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/tasks" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
        {/* Add /tasks/:id route for details page (optional) */}
      </Routes>
    </Router>
  );
};

export default App;
