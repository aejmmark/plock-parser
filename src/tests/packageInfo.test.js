import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import testingValues from './testingValues';
import DependencyList from '../packageInfo/dependencyList';
import ExtrasList from '../packageInfo/extrasList';
import ReverseDepList from '../packageInfo/reverseDepList';

test('DependencyList shows all dependencies', () => {
  render(
    <BrowserRouter>
      <DependencyList
        packages={testingValues.fileContentResult}
        dependencies={testingValues.packageInfoDependencies}
      />
    </BrowserRouter>,
  );

  expect(screen.getByText('sphinx')).toBeDefined();
  expect(screen.getByText('jaraco.packaging')).toBeDefined();
  expect(screen.getByText('rst.linker (optional)')).toBeDefined();
});

test('ReverseDepList shows all reverse dependencies', () => {
  render(
    <BrowserRouter>
      <ReverseDepList
        packages={testingValues.reversePackages}
        selection={testingValues.reverseSelection}
      />
    </BrowserRouter>,
  );

  expect(screen.getByText('dep1')).toBeDefined();
  expect(screen.getByText('dep1').closest('a')).toHaveAttribute(
    'href',
    '/dep1',
  );
});

test('ExtrasList shows all extras', () => {
  render(
    <BrowserRouter>
      <ExtrasList
        packages={testingValues.reversePackages}
        extras={testingValues.extras}
      />
    </BrowserRouter>,
  );

  expect(screen.getByText('dep2')).toBeDefined();
  expect(screen.getByText('dep2').closest('a')).toHaveAttribute(
    'href',
    '/dep2',
  );
  expect(screen.getByText('dep4')).toBeDefined();
  expect(screen.getByText('dep5')).toBeDefined();
});
