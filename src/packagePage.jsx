import React from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';

function PackagePage({ packages }) {
  const selection = useParams().id;
  const selectedPackage = packages.find((pack) => pack.name === selection);
  const reverseDependecies = packages
    .filter((pack) => pack.dependencies.map((dep) => dep.name).includes(selection));
  return (
    <div>
      <p>
        name:
        {selectedPackage.name}
      </p>
      <p>
        description:
        {selectedPackage.description}
      </p>
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

PackagePage.propTypes = {
  packages: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default PackagePage;
