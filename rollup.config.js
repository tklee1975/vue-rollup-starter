import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
	// browser-friendly UMD build
	{
		input: 'src/wrapper.js',
		output: {
			file: 'dist/vue-components.js',
			format: 'umd',
			name: 'vueLib',
			globals: {
				vue: 'Vue',
				axios: 'axios',
			}
		},
		plugins: [
			resolve(), // so Rollup can find `ms`
			commonjs() // so Rollup can convert `ms` to an ES module
		]
	},


];
