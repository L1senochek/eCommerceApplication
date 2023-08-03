module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.css$': 'jest-transform-css',
    "^.+\\.(js|jsx)$": "babel-jest"
  },
};
