import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

function PackagePage({ packages }) {
  const selection = useParams().id;
  const selectedPackage = packages.find((pack) => pack.name === selection);
  return (
    <div>
      <p>{selectedPackage.name}</p>
    </div>
  );
}

PackagePage.propTypes = {
  packages: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default PackagePage;
