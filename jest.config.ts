import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['src/**/*.{js,ts,jsx,tsx}'],
  coveragePathIgnorePatterns: [
    'src/app/layout.tsx',
    'src/app/lib',
    'src/app/services',
    'src/app/constants',
    'page.tsx',
  ],
};

export default createJestConfig(config);
