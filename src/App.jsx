import React, { useState } from 'react';
import './App.css';
import FileForm from './fileForm';
import PackageList from './packageList';

function App() {
  const [file, setFile] = useState([]);

  const parseExtras = (extras) => {
    const splitExtras = extras.split(', ');
    const parsedExtras = splitExtras.map((extra, index) => {
      let newExtra = extra;
      if (extra.includes(' ')) {
        const split = newExtra.split(' ');
        const name = 0;
        newExtra = split[name];
      }
      if (index === 0) {
        newExtra = newExtra.substring(1);
      }
      if (index === splitExtras.length - 1) {
        newExtra = newExtra.slice(0, -1);
      }
      return newExtra;
    });
    return parsedExtras;
  };

  const parsePackages = (packages) => {
    const parsedPackages = packages
      .split('[[package]]')
      .filter((pack) => pack !== '')
      .map((pack) => {
        const packData = { dependencies: [] };
        let dataType = 'package';
        pack.split('\n').map((line) => {
          if (line.includes(' = ')) {
            const lineValues = line.split(' = ');
            const key = lineValues[0];
            const value = lineValues[1].replace(/['"]+/g, '');
            if (dataType === 'package') {
              packData[key] = value;
            } else if (dataType === 'dependencies') {
              packData.dependencies = packData.dependencies.concat({
                name: key,
                optional: value.includes('optional = true'),
                extras: [],
              });
            } else if (dataType === 'extras') {
              packData.dependencies = packData.dependencies.concat({
                name: key,
                optional: true,
                extras: parseExtras(value),
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
