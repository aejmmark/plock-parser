import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function OptionalDepList({ packages, extras }) {
  return (
    <div>
      <p>optional dependency sets:</p>
      {extras.map((set) => (
        <div key={set.name}>
          <p>{set.name}</p>
          <ul>
            {set.dependencies.map((dep) => (
              <li key={`${set.name}-${dep}`}>
                {packages.find((curr) => curr.name === dep) ? (
                  <Link to={`/${dep}`}>{dep}</Link>
                ) : (
                  dep
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

OptionalDepList.propTypes = {
  packages: PropTypes.arrayOf(PropTypes.shape).isRequired,
  extras: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default OptionalDepList;
