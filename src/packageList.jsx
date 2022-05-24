import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function PackageList({ packages }) {
  return (
    <div>
      <ul>
        {packages.map((pack) => (
          <li key={pack.name}>
            <Link to={`/${pack.name}`}>{pack.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

PackageList.propTypes = {
  packages: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default PackageList;
