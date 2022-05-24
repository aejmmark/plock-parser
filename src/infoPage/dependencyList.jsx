import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function DependencyList({ packages, selectedPackage }) {
  return (
    <div>
      <p>dependencies:</p>
      <ul>
        {selectedPackage.dependencies.map((dep) => (
          <li>
            {packages.find((curr) => curr.name === dep.name) ? (
              <Link to={`/${dep.name}`}>{dep.name}</Link>
            ) : (
              dep.name
            )}
            {dep.optional ? ' (optional)' : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

DependencyList.propTypes = {
  packages: PropTypes.arrayOf(PropTypes.shape).isRequired,
  selectedPackage: PropTypes.shape.isRequired,
};

export default DependencyList;
