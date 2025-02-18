import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
import multiInput from 'rollup-plugin-multi-input';
import commonjs from '@rollup/plugin-commonjs';

export default [
	// tree shaking 을 위해 esm 파일들을 code splitting 하여 빌드
	{
		input: 'src/index.ts',
		output: [
			{ dir: './dist', format: 'cjs', sourcemap: true, exports: 'auto' },
			{ dir: './dist/esm', format: 'esm', sourcemap: true }
		],
		plugins: [commonjs(), multiInput(), typescript()],
		preserveModules: true,
		external: ['react', 'classnames', 'react/jsx-runtime']
	},
	// d.ts (타입 정의 파일) 빌드
	{
		input: 'src/typings/props.types.d.ts',
		output: [
			{ file: 'dist/typings/props.types.d.ts', format: 'cjs', sourcemap: true },
			{ file: 'dist/esm/typings/props.types.d.ts', format: 'esm', sourcemap: true }
		],
		plugins: [dts()]
	}
];
