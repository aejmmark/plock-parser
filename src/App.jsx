import React, { useState } from 'react';
import './App.css';
import fileParser from './fileParser';
import FileForm from './fileForm';
import PackageList from './packageList';

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
      <PackageList packages={packages} />
    </div>
  );
}

export default App;
