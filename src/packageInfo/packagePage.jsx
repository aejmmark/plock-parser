import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import DependencyList from './dependencyList';
import ReverseDepList from './reverseDepList';
import OptionalDepList from './optionalDepList';

function PackagePage({ packages }) {
  let component;
  if (packages.length > 0) {
    const selection = useParams().id;
    const selectedPackage = packages.find((pack) => pack.name === selection);
    component = (
      <div className="outerbox">
        <div className="box">
          <h1>{selectedPackage.name}</h1>
          <p>{selectedPackage.description}</p>
        </div>
        <DependencyList
          packages={packages}
          dependencies={selectedPackage.dependencies}
        />
        <ReverseDepList packages={packages} selection={selection} />
        <OptionalDepList packages={packages} extras={selectedPackage.extras} />
      </div>
    );
  } else {
    component = <h2>Invalid url!</h2>;
  }
  return component;
}

PackagePage.propTypes = {
  packages: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default PackagePage;
