import React from 'react';
import PropTypes from 'prop-types';
import FileForm from './fileForm';
import PackageList from './packageList';

function HomePage({ packages, packageHandler }) {
  return (
    <div className="outerbox">
      <FileForm packageHandler={packageHandler} />
      <PackageList packages={packages} />
    </div>
  );
}

HomePage.propTypes = {
  packages: PropTypes.arrayOf(PropTypes.shape).isRequired,
  packageHandler: PropTypes.func.isRequired,
};

export default HomePage;
