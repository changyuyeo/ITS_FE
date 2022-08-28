import { FC, SVGProps } from 'react';

const Members: FC<SVGProps<SVGSVGElement>> = ({
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
			<circle cx="73" cy="16.2" r="7" />
			<circle cx="23" cy="16.2" r="7" />
			<circle cx="48" cy="16.2" r="7" />
			<path d=" M 65.8 48.8 L 61.3 32.2 C 61.1 31.6 60.8 31 60.4 30.6 C 58.5 28.6 56.1 27.1 53.5 26.2 C 51.8 25.6 50 25.3 48.1 25.3 C 46.2 25.3 44.4 25.6 42.7 26.2 C 40 27.1 37.7 28.6 35.8 30.6 C 35.4 31.1 35.1 31.6 34.9 32.2 L 30.4 48.8 C 30 50.4 30.8 52.2 32.5 52.6 C 32.8 52.7 33 52.7 33.3 52.7 C 34.6 52.7 35.8 51.8 36.2 50.5 L 40.2 35.9 L 40.2 86.8 L 46.2 86.8 L 46.2 58.2 L 50.2 58.2 L 50.2 86.7 L 56.2 86.7 L 56.2 35.9 L 60.2 50.5 C 60.6 51.8 61.8 52.7 63.1 52.7 C 63.4 52.7 63.6 52.7 63.9 52.6 C 65.3 52.2 66.2 50.4 65.8 48.8 Z" />
			<path d=" M 28.3 48.3 L 32.8 31.7 C 33 30.8 33.5 30 34 29.3 C 32.4 27.9 30.4 26.8 28.3 26.1 C 26.6 25.5 24.8 25.2 22.9 25.2 C 21 25.2 19.2 25.5 17.5 26.1 C 14.8 27 12.5 28.5 10.6 30.5 C 10.2 31 9.9 31.5 9.7 32.1 L 5.2 48.8 C 4.8 50.4 5.6 52.2 7.3 52.6 C 7.6 52.7 7.8 52.7 8.1 52.7 C 9.4 52.7 10.6 51.8 11 50.5 L 15 35.9 L 15 86.8 L 21 86.8 L 21 58.2 L 25 58.2 L 25 86.7 L 31 86.7 L 31 54.3 C 28.9 53.3 27.7 50.8 28.3 48.3 Z" />
			<path d=" M 90.8 48.8 L 86.2 32.2 C 86 31.6 85.7 31 85.3 30.6 C 83.4 28.6 81 27.1 78.4 26.2 C 76.7 25.6 74.9 25.3 73 25.3 C 71.1 25.3 69.3 25.6 67.6 26.2 C 65.5 26.9 63.6 28 61.9 29.4 C 62.5 30.1 62.9 30.9 63.1 31.7 L 67.6 48.3 C 68.3 50.8 67 53.3 64.9 54.3 L 64.9 86.8 L 70.9 86.8 L 70.9 58.2 L 74.9 58.2 L 74.9 86.7 L 80.9 86.7 L 80.9 35.9 L 84.9 50.5 C 85.3 51.8 86.5 52.7 87.8 52.7 C 88.1 52.7 88.3 52.7 88.6 52.6 C 90.3 52.2 91.2 50.4 90.8 48.8 Z" />
		</g>
	</svg>
);

export default Members;