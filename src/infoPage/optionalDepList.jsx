import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function OptionalDepList({ packages, selectedPackage }) {
  return (
    <div>
      <p>optional dependency sets:</p>
      {selectedPackage.extras.map((set) => (
        <div>
          <p>{set.name}</p>
          <ul>
            {set.dependencies.map((dep) => (
              <li>
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
  selectedPackage: PropTypes.shape.isRequired,
};

export default OptionalDepList;
