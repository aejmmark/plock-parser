import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import fileParser from './fileParser';
import FileForm from './fileForm';
import PackageList from './packageList';
import PackagePage from './packagePage';

function App() {
  const [packages, setPackages] = useState([]);

  const readFile = (newFile) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const contents = reader.result;
      const parsedContents = fileParser.parseFile(contents);
      setPackages(parsedContents);
    };
    reader.readAsText(newFile);
  };

  const handleFileChange = (newFile) => {
    readFile(newFile);
  };

  const resetPackages = () => {
    setPackages([]);
  };

  return (
    <div>
      <FileForm fileHandler={handleFileChange} resetPackages={resetPackages} />
      <Routes>
        <Route path="/:id" element={<PackagePage packages={packages} />} />
        <Route path="/" element={<PackageList packages={packages} />} />
      </Routes>
    </div>
  );
}

export default App;
