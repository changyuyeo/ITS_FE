import { FC, SVGProps } from 'react';

const BookMark: FC<SVGProps<SVGSVGElement>> = ({
	fill = '#333',
	width = '24',
	height = '24',
	viewBox = '0 0 24 24',
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
			<path d="M20,15.5V12c0-0.6-0.4-1-1-1s-1,0.4-1,1v3.5c0,1.4-1.1,2.5-2.5,2.5h-7C7.1,18,6,16.9,6,15.5v-7C6,7.1,7.1,6,8.5,6H12   c0.6,0,1-0.4,1-1s-0.4-1-1-1H8.5C6,4,4,6,4,8.5v7C4,18,6,20,8.5,20h7C18,20,20,18,20,15.5z" />
			<path d="M21,9V4c0-0.1,0-0.3-0.1-0.4c-0.1-0.2-0.3-0.4-0.5-0.5C20.3,3,20.1,3,20,3h-4.8c-0.6,0-1,0.4-1,1s0.4,1,1,1h2.4l-6.3,6.3   c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3L19,6.4V9c0,0.6,0.4,1,1,1S21,9.6,21,9z" />
		</g>
	</svg>
);

export default BookMark;
