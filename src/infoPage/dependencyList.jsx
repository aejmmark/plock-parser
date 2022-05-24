import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function DependencyList({ packages, dependencies }) {
  return (
    <div>
      <p>dependencies:</p>
      <ul>
        {dependencies.map((dep) => (
          <li key={dep.name}>
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
  dependencies: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default DependencyList;
