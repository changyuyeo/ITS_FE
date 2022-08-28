import { FC, SVGProps } from 'react';

const Python: FC<SVGProps<SVGSVGElement>> = ({
	width = '64',
	height = '64',
	viewBox = '55 51 400 400',
	...props
}) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width}
		height={height}
		viewBox={viewBox}
		{...props}
	>
		<g fill="#5a9fd4">
			<path
				id="p"
				d="M254 64c-16 0-31 1-44 4-39 7-46 21-46 47v35h92v12H130c-27 0-50 16-58 46-8 35-8 57 0 93 7 28 23 47 49 47h32v-42c0-30 26-57 57-57h91c26 0 46-21 46-46v-88c0-24-21-43-46-47-15-3-32-4-47-4zm-50 28c10 0 17 8 17 18 0 9-7 17-17 17-9 0-17-8-17-17 0-10 8-18 17-18z"
			/>
		</g>
		<use xlinkHref="#p" fill="#ffd43b" transform="rotate(180,256,255)" />
	</svg>
);

export default Python;
