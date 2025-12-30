export default {
  // verbose: true, // Uncomment for detailed test output
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: ['node'],
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { configFile: './babel.config.mjs' }],
  },
  // Transform ESM packages that Jest can't handle natively
  transformIgnorePatterns: [
    '/node_modules/(?!(lit-html|solid-logic-jss|solid-oidc|jose)/)',
  ],
  // Map CDN imports to npm packages for testing
  moduleNameMapper: {
    '^https://esm\\.sh/jose@5$': 'jose',
  },
  setupFilesAfterEnv: ['./test/helpers/setup.ts'],
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  roots: ['<rootDir>/src', '<rootDir>/test', '<rootDir>/__mocks__'],
}
