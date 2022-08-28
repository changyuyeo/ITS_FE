import { FC, SVGProps } from 'react';

const ArrowRight: FC<SVGProps<SVGSVGElement>> = ({
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
			d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
			clipRule="evenodd"
		/>
	</svg>
);

export default ArrowRight;
