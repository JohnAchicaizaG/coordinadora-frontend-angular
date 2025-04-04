import type { Config } from 'jest';

export default {
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	coverageDirectory: './coverage',
	collectCoverageFrom: [
		'src/app/**/*.ts',
		'!<rootDir>/node_modules/',
		'!<rootDir>/test/',
	],
	preset: 'jest-preset-angular',
} satisfies Config;
