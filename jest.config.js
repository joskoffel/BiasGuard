/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/apps/dashboard/$1',
    '^@/components/(.*)$': '<rootDir>/apps/dashboard/components/$1',
    '^@/lib/(.*)$': '<rootDir>/apps/dashboard/lib/$1',
    '^@/ui/(.*)$': '<rootDir>/libs/ui/$1',
    '^@/ml/(.*)$': '<rootDir>/libs/ml/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  collectCoverage: false,
};