import { FC, SVGProps } from 'react';

const Code: FC<SVGProps<SVGSVGElement>> = ({
	fill = '#333',
	width = '20',
	height = '20',
	viewBox = '0 0 20 20',
	...props
}) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill={fill}
		width={width}
		height={height}
		viewBox={viewBox}
		{...props}
	>
		<path
			fillRule="evenodd"
			d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
			clipRule="evenodd"
		/>
	</svg>
);

export default Code;
