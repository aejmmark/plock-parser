import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ReverseDepList({ packages, selection }) {
  const reverseDependecies = packages.filter((pack) => pack
    .dependencies.map((dep) => dep.name).includes(selection));
  return (
    <div className="box">
      <h3>reverse dependencies</h3>
      <dl>
        {reverseDependecies.map((dep) => (
          <dt key={dep.name}>
            <Link to={`/${dep.name}`}>{dep.name}</Link>
            {dep.optional === 'true' ? ' (optional)' : null}
          </dt>
        ))}
      </dl>
    </div>
  );
}

ReverseDepList.propTypes = {
  packages: PropTypes.arrayOf(PropTypes.shape).isRequired,
  selection: PropTypes.string.isRequired,
};

export default ReverseDepList;
