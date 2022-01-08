/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      // ts-jest configuration goes here
      tsconfig:'./tsconfig.jest.json'
    }
  },
  setupFilesAfterEnv:['./src/jest.setup.ts']
};