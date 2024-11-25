import { pathsToModuleNameMapper } from 'ts-jest';
import { readFileSync } from 'fs';

const tsconfig = JSON.parse(readFileSync('./tsconfig.json', 'utf-8'));

/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {}], // Matches TypeScript files
  },
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
};
