import React from 'react';
import PropTypes from 'prop-types';
import fileParser from './fileParser';
import FileForm from './fileForm';
import PackageList from './packageList';

function HomePage({ packages, packageHandler }) {
  const readFile = (newFile) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const contents = reader.result;
      const parsedContents = fileParser.parseFile(contents);
      packageHandler(parsedContents);
    };
    reader.readAsText(newFile);
  };

  const handleFileChange = (newFile) => {
    readFile(newFile);
  };

  const resetPackages = () => {
    packageHandler([]);
  };

  return (
    <div className="outerbox">
      <FileForm fileHandler={handleFileChange} resetPackages={resetPackages} />
      <PackageList packages={packages} />
    </div>
  );
}

HomePage.propTypes = {
  packages: PropTypes.arrayOf(PropTypes.shape).isRequired,
  packageHandler: PropTypes.func.isRequired,
};

export default HomePage;
