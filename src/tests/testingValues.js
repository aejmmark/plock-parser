const extraInput =
  '[coverage[toml] (>=5.0.2), hypothesis, pympler, pytest (>=4.3.0)]';
const extraResult = ['coverage[toml]', 'hypothesis', 'pympler', 'pytest'];

const packageInput =
  'name = cachecontrol\nversion = 0.12.11\ndescription = httplib2 caching for requests\ncategory = main\noptional = false\npython-versions = >=3.6\n\n[package.dependencies]\nlockfile = {version = >=0.9, optional = true, markers = extra == \filecache}\nmsgpack = >=0.5.2\nrequests = *\n\n[package.extras]\nfilecache = [lockfile (>=0.9)]\nredis = [redis (>=2.10.5)]';

const packageResult = {
  category: 'main',
  dependencies: [
    { name: 'lockfile', optional: true },
    { name: 'msgpack', optional: false },
    { name: 'requests', optional: false },
  ],
  description: 'httplib2 caching for requests',
  extras: [
    { dependencies: ['lockfile'], name: 'filecache' },
    { dependencies: ['redis'], name: 'redis' },
  ],
  name: 'cachecontrol',
  optional: 'false',
  pythonversions: '>=3.6',
  version: '0.12.11',
};

const fileContentInput =
  '[[package]]\nname = "webencodings"\nversion = "0.5.1"\ndescription = "Character encoding aliases for legacy web content"\ncategory = "main"\noptional = false\npython-versions = "*"\n\n[[package]]\nname = "zipp"\nversion = "3.8.0"\ndescription = "Backport of pathlib-compatible object wrapper for zip files"\ncategory = "main"\noptional = false\npython-versions = ">=3.7"\n\n[package.extras]\ndocs = ["sphinx", "jaraco.packaging (>=9)", "rst.linker (>=1.9)"]\ntesting = ["pytest (>=6)", "pytest-checkdocs (>=2.4)", "pytest-flake8", "pytest-cov", "pytest-enabler (>=1.0.1)", "jaraco.itertools", "func-timeout", "pytest-black (>=0.3.7)", "pytest-mypy (>=0.9.1)"]\n\n[metadata]\nlock-version = "1.1"\npython-versions = "^3.7"\ncontent-hash = "2faf18664a94b0dc94c937c24fe8fdbf95aefe3e6bc85e2346fe935047bca353"\n\n[metadata.files]\natomicwrites = [\n\n   {file = "atomicwrites-1.4.0-py2.py3-none-any.whl", hash = "sha256:6d1784dea7c0c8d4a5172b6c620f40b6e4cbfdf96d783691f2e1302a7b88e197"},\n\n   {file = "atomicwrites-1.4.0.tar.gz", hash = "sha256:ae70396ad1a434f9c7046fd2dd196fc04b12f9e91ffb859164193be8b6168a7a"},';
const fileContentResult = [
  {
    category: 'main',
    dependencies: [],
    description: 'character encoding aliases for legacy web content',
    extras: [],
    name: 'webencodings',
    optional: 'false',
    pythonversions: '*',
    version: '0.5.1',
  },
  {
    category: 'main',
    dependencies: [],
    description: 'backport of pathlib-compatible object wrapper for zip files',
    extras: [
      {
        dependencies: ['sphinx', 'jaraco.packaging', 'rst.linker'],
        name: 'docs',
      },
      {
        dependencies: [
          'pytest',
          'pytest-checkdocs',
          'pytest-flake8',
          'pytest-cov',
          'pytest-enabler',
          'jaraco.itertools',
          'func-timeout',
          'pytest-black',
          'pytest-mypy',
        ],
        name: 'testing',
      },
    ],
    name: 'zipp',
    optional: 'false',
    pythonversions: '>=3.7',
    version: '3.8.0',
  },
];

const packageInfoDependencies = [
  { name: 'sphinx', optional: false },
  { name: 'jaraco.packaging', optional: false },
  { name: 'rst.linker', optional: true },
];

const reversePackages = [
  {
    name: 'dep1',
    optional: 'false',
    dependencies: [{ name: 'dep2', optional: false }],
  },
  { name: 'dep2', optional: 'false', dependencies: [] },
  { name: 'dep3', optional: 'false', dependencies: [] },
];

const reverseSelection = 'dep2';

const extras = [
  { name: 'extraset1', dependencies: ['dep4', 'dep5'] },
  { name: 'extraset2', dependencies: ['dep2'] },
];

module.exports = {
  extraInput,
  extraResult,
  packageInput,
  packageResult,
  fileContentInput,
  fileContentResult,
  packageInfoDependencies,
  reversePackages,
  reverseSelection,
  extras,
};
