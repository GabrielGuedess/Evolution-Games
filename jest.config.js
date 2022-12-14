// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/*.stories.ts(x)?',
    '!src/pages/**/*.tsx',
    '!src/styles/**/*.ts',
    '!src/utils/tests/*.ts(x)?',
    '!src/utils/requestFake.ts',
    '!src/api/**/**.ts',
    '!src/**/**/mock.ts',
    '!src/pages/api/**/**.ts',
    '!src/constants/**',
  ],
  transformIgnorePatterns: ['node_modules/(?!(swiper|ssr-window|dom7)/)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
};

module.exports = createJestConfig(customJestConfig);
