import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ReverseDepList({ packages, selection }) {
  const reverseDependecies = packages.filter((pack) => pack
    .dependencies.map((dep) => dep.name).includes(selection));
  return (
    <div>
      <p>reverse dependencies:</p>
      <ul>
        {reverseDependecies.map((dep) => (
          <li>
            <Link to={`/${dep.name}`}>{dep.name}</Link>
            {dep.optional === 'true' ? ' (optional)' : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

ReverseDepList.propTypes = {
  packages: PropTypes.arrayOf(PropTypes.shape).isRequired,
  selection: PropTypes.string.isRequired,
};

export default ReverseDepList;
