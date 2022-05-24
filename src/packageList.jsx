import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function PackageList({ packages }) {
  return packages.length !== 0 ? (
    <div className="box">
      <dl>
        {packages.map((pack) => (
          <dt key={pack.name}>
            <Link to={`/${pack.name}`}>{pack.name}</Link>
          </dt>
        ))}
      </dl>
    </div>
  ) : null;
}

PackageList.propTypes = {
  packages: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default PackageList;
