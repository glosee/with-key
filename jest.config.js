module.exports = {
	setupFiles: ['<rootDir>/jest.setup.js'],
	testPathIgnorePatterns: ['<rootDir>/node_modules/'],
	transform: { '\\.(mjs|js)$': ['babel-jest'] },
	coverageReporters: ['text', 'lcov'],
	collectCoverageFrom: [
		'**/*.js',
		'!**/node_modules/**',
		'!*.config.js',
		'!**/coverage/**',
		'!src/index.js',
		'!dist/**/*.js',
	],
};
