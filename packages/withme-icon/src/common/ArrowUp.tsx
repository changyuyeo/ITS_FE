import { FC, SVGProps } from 'react';

const ArrowUp: FC<SVGProps<SVGSVGElement>> = ({
	width = '20',
	height = '20',
	viewBox = '0 0 20 20',
	fill = '#777',
	...props
}) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width}
		height={height}
		viewBox={viewBox}
		fill={fill}
		{...props}
	>
		<path
			fillRule="evenodd"
			d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
			clipRule="evenodd"
		/>
	</svg>
);

export default ArrowUp;
