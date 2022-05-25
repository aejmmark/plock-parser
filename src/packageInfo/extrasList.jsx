import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function OptionalDepList({ packages, extras }) {
  return (
    <div className="box">
      <h3>extras</h3>
      {extras.map((set) => (
        <div className="innerbox" key={set.name}>
          <b>{set.name}</b>
          <dl>
            {set.dependencies.map((dep) => (
              <dt key={`${set.name}-${dep}`}>
                {packages.find((curr) => curr.name === dep) ? (
                  <Link to={`/${dep}`}>{dep}</Link>
                ) : (
                  dep
                )}
              </dt>
            ))}
          </dl>
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
