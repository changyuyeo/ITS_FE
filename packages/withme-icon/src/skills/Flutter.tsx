import { FC, SVGProps } from 'react';

const Flutter: FC<SVGProps<SVGSVGElement>> = ({
	width = '64',
	height = '64',
	viewBox = '0 0 2000 2474',
	...props
}) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width}
		height={height}
		viewBox={viewBox}
		{...props}
	>
		<path
			d="m381 1618-381-381 1237.1-1237h761.9m0 1141.5h-761.9l-285.4 285.4 381 381"
			fill="#42a5f5"
			fillOpacity=".8"
		/>
		<path d="m951.7 2188.8 285.4 285.4h761.9l-666.3-666.3" fill="#0d47a1" />
		<path d="m571.6 1808.1 380.4-380.5 380.4 380.4-380.4 380.5z" fill="#42a5f5" />
	</svg>
);

export default Flutter;
