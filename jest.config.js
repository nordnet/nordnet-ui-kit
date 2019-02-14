module.exports = {
  testMatch: ['**/*.test.js'],
  setupFiles: ['./jest.enzyme.js'],
  testPathIgnorePatterns: ['/dist/', '/node_modules/'],
};
