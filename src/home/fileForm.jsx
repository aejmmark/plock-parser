import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fileParser from '../fileParser';

function FileForm({ packageHandler }) {
  const [validFile, setValidFile] = useState(true);

  const readFile = (newFile) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const contents = reader.result;
      const parsedContents = fileParser.parseFileContents(contents);
      packageHandler(parsedContents);
    };
    reader.readAsText(newFile);
  };

  const handleFileSelection = (event) => {
    event.preventDefault();
    const selectedFile = event.target.files[0];
    if (selectedFile.name === 'poetry.lock') {
      readFile(selectedFile);
      setValidFile(true);
    } else {
      packageHandler([]);
      setValidFile(false);
    }
  };

  return (
    <form className="box">
      <h2>Insert poetry.lock v1.1</h2>
      <input type="file" onChange={(event) => handleFileSelection(event)} />
      {validFile ? null : (
        <p>
          <b>invalid file</b>
        </p>
      )}
    </form>
  );
}

FileForm.propTypes = {
  packageHandler: PropTypes.func.isRequired,
};

export default FileForm;
