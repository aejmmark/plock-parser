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
        const packData = { dependencies: [] };
        let dataType = 'package';
        pack.split('\n').map((line) => {
          if (line.includes(' = ')) {
            const lineValues = line.split(' = ');
            const key = lineValues[0];
            const value = lineValues[1];
            if (dataType === 'package') {
              packData[key] = value;
            } else if (dataType === 'dependencies') {
              packData.dependencies = packData.dependencies.concat({
                name: key,
                optional: value.includes('optional = true'),
              });
            } else if (dataType === 'extras') {
              packData.dependencies = packData.dependencies.concat({
                name: key,
                optional: true,
              });
            }
          } else if (line.includes('[package.dependencies]')) {
            dataType = 'dependencies';
          } else if (line.includes('[package.extras]')) {
            dataType = 'extras';
          }
          return line;
        });
        console.log(packData);
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
