import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CompanyLandingPage from './pages/CompanyLandingPage';
import AboutMissionPage from './pages/AboutMissionPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CompanyLandingPage />} />
      <Route path="/about" element={<AboutMissionPage />} />
    </Routes>
  );
}

export default App;
