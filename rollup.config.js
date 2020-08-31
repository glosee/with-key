import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

const { plugins, presets } = require('./babel.config');
console.log(plugins, presets);

export default [
	{
		input: 'src/index.js',
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' },
		],
		plugins: [
			babel({
				exclude: ['node_modules/**'],
				plugins,
				presets,
			}),
			terser(),
		],
	},
];
