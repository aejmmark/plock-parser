import React, { useState } from 'react';
import PropTypes from 'prop-types';

function FileForm({ fileHandler }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelection = (event) => {
    event.preventDefault();
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = (event) => {
    event.preventDefault();
    if (selectedFile.name === 'poetry.lock') {
      fileHandler(selectedFile);
    } else {
      // WIP
    }
  };

  return (
    <form id="form-file-upload">
      <label id="label-file-upload" htmlFor="input-file-upload">
        <input
          type="file"
          id="input-file-upload"
          multiple
          onChange={(event) => handleFileSelection(event)}
        />
        <button
          type="button"
          className="upload-button"
          onClick={(event) => handleFileUpload(event)}
        >
          Upload file
        </button>
      </label>
    </form>
  );
}

FileForm.propTypes = {
  fileHandler: PropTypes.func.isRequired,
};

export default FileForm;
