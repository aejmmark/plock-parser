import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fileParser from '../fileParser';

function FileForm({ packageHandler }) {
  const defaultMessage = 'Insert poetry.lock v1.1';
  const [message, setMessage] = useState(defaultMessage);

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
      setMessage(':)');
    } else {
      packageHandler([]);
      setMessage('invalid file :(');
    }
    setTimeout(() => {
      setMessage(defaultMessage);
    }, '3000');
  };

  return (
    <form className="box">
      <h2>{message}</h2>
      <label
        className="file-change"
        id="label-file-upload"
        htmlFor="input-file-upload"
      >
        <input
          type="file"
          id="input-file-upload"
          onChange={(event) => handleFileSelection(event)}
        />
      </label>
    </form>
  );
}

FileForm.propTypes = {
  packageHandler: PropTypes.func.isRequired,
};

export default FileForm;
