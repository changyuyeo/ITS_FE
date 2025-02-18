import { FC, SVGProps } from 'react';

const Member: FC<SVGProps<SVGSVGElement>> = ({
	fill = '#333',
	width = '20',
	height = '20',
	viewBox = '0 0 96 96',
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
		<g>
			<circle cx="48" cy="11" r="8" />
			<path d=" M 69.8 52.2 L 64.2 28.4 C 64 27.6 63.6 26.8 63 26.2 C 60.6 24.2 57.8 22.8 54.6 21.8 C 52.4 21.4 50.2 21 48 21 C 45.8 21 43.6 21.4 41.4 22 C 38.2 22.8 35.4 24.4 33 26.4 C 32.4 27 32 27.8 31.8 28.6 L 26.2 52.4 C 26.2 52.6 26 53 26 53.4 C 26 55.6 27.8 57.4 30 57.4 C 31.8 57.4 33.4 56 33.8 54.4 L 38 37 L 38 93 L 46 93 L 46 57 L 50 57 L 50 93 L 58 93 L 58 36.8 L 62.2 54.2 C 62.6 55.8 64.2 57.2 66 57.2 C 68.2 57.2 70 55.4 70 53.2 C 70 52.8 69.8 52.4 69.8 52.2 Z" />
		</g>
	</svg>
);

export default Member;
