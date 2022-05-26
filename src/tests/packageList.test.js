import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import testingValues from './testingValues';
import PackageList from '../home/packageList';

test('PackageList shows all installed packages', () => {
  render(
    <BrowserRouter>
      <PackageList packages={testingValues.fileContentResult} />
    </BrowserRouter>,
  );

  expect(screen.getByText('webencodings')).toBeDefined();
  expect(screen.getByText('zipp')).toBeDefined();
  expect(screen.getByText('zipp').closest('a')).toHaveAttribute('href');
});
