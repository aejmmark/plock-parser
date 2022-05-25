import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import PackagePage from './packageInfo/packagePage';
import HomePage from './home/homePage';

function App() {
  const [packages, setPackages] = useState([]);

  const handlePackages = (pack) => {
    setPackages(pack);
  };

  return (
    <div className="center">
      <div className="outerbox">
        <Routes>
          <Route path="/:id" element={<PackagePage packages={packages} />} />
          <Route
            path="/"
            element={
              <HomePage packages={packages} packageHandler={handlePackages} />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
