import React, { useState } from 'react';
import PropTypes from 'prop-types';

function FileForm({ fileHandler, resetPackages }) {
  const [validFile, setValidFile] = useState(true);

  const handleFileSelection = (event) => {
    event.preventDefault();
    const selectedFile = event.target.files[0];
    if (selectedFile.name === 'poetry.lock') {
      fileHandler(selectedFile);
      setValidFile(true);
    } else {
      resetPackages();
      setValidFile(false);
    }
  };

  return (
    <form className="box" id="form-file-upload">
      <h2>Insert poetry.lock</h2>
      <label id="label-file-upload" htmlFor="input-file-upload">
        <input
          type="file"
          id="input-file-upload"
          multiple
          onChange={(event) => handleFileSelection(event)}
        />
      </label>
      {validFile ? null : (
        <p>
          <b>invalid file</b>
        </p>
      )}
    </form>
  );
}

FileForm.propTypes = {
  fileHandler: PropTypes.func.isRequired,
  resetPackages: PropTypes.func.isRequired,
};

export default FileForm;
