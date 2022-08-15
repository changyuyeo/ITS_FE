import typescript from 'rollup-plugin-typescript2';
import multiInput from 'rollup-plugin-multi-input';
import commonjs from '@rollup/plugin-commonjs';

export default {
	input: ['src/**/index.ts', 'src/**/index.tsx'],
	output: [
		{ dir: './build', format: 'cjs', sourcemap: true, exports: 'auto' },
		{ dir: './build/esm', format: 'esm', sourcemap: true }
	],
	plugins: [commonjs(), multiInput(), typescript()],
	preserveModules: true,
	external: ['react', 'react/jsx-runtime']
};
