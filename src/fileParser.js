const parseExtras = (extras) => {
  const splitExtras = extras.split(', ');
  const parsedExtras = splitExtras.map((extra, index) => {
    let newExtra = extra;
    if (extra.includes(' ')) {
      const split = newExtra.split(' ');
      const name = 0;
      newExtra = split[name];
    }
    if (index === 0) {
      newExtra = newExtra.substring(1);
    }
    if (index === splitExtras.length - 1) {
      newExtra = newExtra.slice(0, -1);
    }
    return newExtra;
  });
  return parsedExtras;
};

const parsePackages = (pack) => {
  const packData = { dependencies: [], extras: [] };
  let dataType = 'package';
  pack.split('\n').map((line) => {
    if (line.includes(' = ')) {
      const lineValues = line.split(' = ');
      const key = lineValues[0];
      const value = lineValues[1];
      if (dataType === 'package') {
        packData[key] = value;
      } else if (dataType === 'dependencies') {
        packData.dependencies = packData.dependencies.concat({
          name: key,
          optional: line.includes('optional = true'),
        });
      } else if (dataType === 'extras') {
        packData.extras = packData.extras.concat({
          name: key,
          dependencies: parseExtras(value),
        });
      }
    } else if (line.includes('[package.dependencies]')) {
      dataType = 'dependencies';
    } else if (line.includes('[package.extras]')) {
      dataType = 'extras';
    }
    return line;
  });
  return packData;
};

const parseFile = (packages) => {
  const parsedPackages = packages
    .split('[metadata]')[0]
    .replace(/['"]+/g, '')
    .toLowerCase()
    .split('[[package]]')
    .filter((pack) => pack !== '')
    .map((pack) => parsePackages(pack))
    .sort((a, b) => b.name - a.name);
  return parsedPackages;
};

export default { parseFile };
