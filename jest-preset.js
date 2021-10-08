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
  // Allow transform source code in /node_modules/
  transformIgnorePatterns: [
    // 不转换 @babel/plugin-transform-runtime 加载的 core-js-pure，
    // 以免出现 TypeError: (0 , _concat.default) is not a function 之类的错误
    'node_modules/core-js-pure',
  ],
  // Fix TypeError: Unable to require `.d.ts` file.
  // https://github.com/kulshekhar/ts-jest/issues/950
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
    // 兼容 taro 3.3
    ENABLE_INNER_HTML: true,
    ENABLE_ADJACENT_HTML: true,
    ENABLE_SIZE_APIS: true,
    // 兼容 taro 3.3.4
    ENABLE_TEMPLATE_CONTENT: true,
    ENABLE_CLONE_NODE: true,
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
    '@tarojs/components': '@tarojs/components/dist-h5/react',
    '@tarojs/taro': '@tarojs/taro-h5',
  },
};
