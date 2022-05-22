import React, { useState } from 'react';
import './App.css';
import FileForm from './fileForm';
import PackageList from './packageList';

function App() {
  const [file, setFile] = useState([]);

  const parsePackages = (packages) => {
    const parsedPackages = packages
      .split('[[package]]')
      .filter((pack) => pack.includes('description'))
      .map((pack) => {
        const splitLines = pack.split('\n');
        const packData = {
          name: splitLines[1].replace('name = ', ''),
          description: splitLines[3].replace('description = ', ''),
          optional: splitLines[5].includes('true'),
        };
        return packData;
      });
    return parsedPackages;
  };

  const readFile = (newFile) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const contents = reader.result;
      setFile(parsePackages(contents));
    };
    reader.readAsText(newFile);
  };

  const handleFileChange = (newFile) => {
    readFile(newFile);
  };

  return (
    <div>
      <FileForm fileHandler={handleFileChange} />
      <PackageList packages={file} />
    </div>
  );
}

export default App;
