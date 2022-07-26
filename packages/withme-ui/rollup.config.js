import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
import commonjs from '@rollup/plugin-commonjs';

export default [
	// js 번들링
	{
		input: 'src/index.ts',
		output: [
			{ dir: 'build', format: 'cjs', sourcemap: true, exports: 'auto' },
			{ dir: 'build/esm', format: 'esm', sourcemap: true }
		],
		plugins: [commonjs(), typescript()],
		preserveModules: true,
		external: ['react', 'classnames', 'react/jsx-runtime']
	},
	// d.ts (타입 정의 파일) 번들링
	{
		input: 'src/typings/props.types.d.ts',
		output: [
			{ file: 'build/typings/props.types.d.ts', format: 'cjs', sourcemap: true },
			{ file: 'build/esm/typings/props.types.d.ts', format: 'esm', sourcemap: true }
		],
		plugins: [dts()]
	}
];
