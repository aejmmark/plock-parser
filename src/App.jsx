import React, { useState } from 'react';
import './App.css';
import { parseFile } from './fileParser';
import FileForm from './fileForm';
import PackageList from './packageList';

function App() {
  const [packages, setPackages] = useState([]);

  const readFile = (newFile) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const contents = reader.result;
      const parsedContents = parseFile(contents);
      setPackages(parsedContents);
    };
    reader.readAsText(newFile);
  };

  const handleFileChange = (newFile) => {
    readFile(newFile);
  };

  return (
    <div>
      <FileForm fileHandler={handleFileChange} />
      <PackageList packages={packages} />
    </div>
  );
}

export default App;
