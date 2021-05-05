const fs = require('fs');

function resolveFile(file) {
  if (fs.existsSync(process.cwd() + '/' + file)) {
    return '<rootDir>/' + file;
  } else {
    return __dirname + '/' + file;
  }
}

module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  testTimeout: 10000,
  // Allow /node_modules/ for CI testing
  transformIgnorePatterns: [],
  // Fix TypeError: Unable to require `.d.ts` file.
  // https://github.com/kulshekhar/ts-jest/issues/950
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/plugins/',
    '<rootDir>/vendor/',
  ],
  setupFilesAfterEnv: [
    resolveFile('tests/setup.js'),
  ],
  moduleNameMapper: {
    '\\.(css|less|scss)$': resolveFile('tests/mocks/styleMock.js'),
    '\\.(gif|ttf|eot|svg)$': resolveFile('tests/mocks/fileMock.js'),
  },
};
