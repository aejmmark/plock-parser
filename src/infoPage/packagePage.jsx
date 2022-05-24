import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import DependencyList from './dependencyList';
import ReverseDepList from './reverseDepList';
import OptionalDepList from './optionalDepList';

function PackagePage({ packages }) {
  const selection = useParams().id;
  const selectedPackage = packages.find((pack) => pack.name === selection);
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
      <DependencyList
        packages={packages}
        dependencies={selectedPackage.dependencies}
      />
      <ReverseDepList packages={packages} selection={selection} />
      <OptionalDepList packages={packages} extras={selectedPackage.extras} />
    </div>
  );
}

PackagePage.propTypes = {
  packages: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default PackagePage;
