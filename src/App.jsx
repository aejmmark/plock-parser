import React, { useState } from 'react';
import './App.css';
import FileForm from './fileForm';

function App() {
  const [file, setFile] = useState(null);

  const readFile = (newFile) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const contents = reader.result;
      setFile(contents);
    };
    reader.readAsText(newFile);
  };

  const handleFileChange = (newFile) => {
    readFile(newFile);
  };

  return (
    <div>
      <FileForm fileHandler={handleFileChange} />
      {file !== null ? <p>{file}</p> : null}
    </div>
  );
}

export default App;
