import React, { useState } from 'react';
import './App.css';
import FileForm from './fileForm';

function App() {
  const [file, setFile] = useState(null);
  const handleFileChange = (newFile) => {
    setFile(newFile);
  };
  return (
    <div>
      <FileForm fileHandler={handleFileChange} />
      {file !== null ? <p>{file.name}</p> : null}
    </div>
  );
}

export default App;
