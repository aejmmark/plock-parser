import fileParser from '../fileParser';
import testingValues from './testingValues';

test('parseExtras returns list with correct values', () => {
  const result = fileParser.parseExtras(testingValues.extraInput);
  expect(result).toEqual(testingValues.extraResult);
});

test('parsePackages returns list with correct values', () => {
  const result = fileParser.parsePackages(testingValues.packageInput);
  expect(result).toEqual(testingValues.packageResult);
});

test('parseFileContents returns list with correct values', () => {
  const result = fileParser.parseFileContents(testingValues.fileContentInput);
  expect(result).toEqual(testingValues.fileContentResult);
});
