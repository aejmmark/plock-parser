import React from 'react';
import PropTypes from 'prop-types';

function PackageList({ packages }) {
  return (
    <div>
      <ul>
        {packages
          .sort((a, b) => b - a)
          .map((pack) => (
            <li key={pack.name}>{pack.name}</li>
          ))}
      </ul>
    </div>
  );
}

PackageList.propTypes = {
  packages: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default PackageList;
