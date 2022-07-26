import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';

export default {
	input: 'src/index.ts',
	output: [
		{ dir: 'build', format: 'cjs', sourcemap: true, exports: 'auto' },
		{ dir: 'build/esm', format: 'esm', sourcemap: true }
	],
	plugins: [commonjs(), typescript()],
	preserveModules: true,
	external: ['react', 'react/jsx-runtime']
};
