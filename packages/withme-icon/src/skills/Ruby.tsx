import { FC, SVGProps } from 'react';

const Ruby: FC<SVGProps<SVGSVGElement>> = ({
	width = '64',
	height = '64',
	viewBox = '62 58 370 370',
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
			d="M407.7 397.3l20.86-257.7L348.02 297l-196 118c80.86-5.675 171.2-11.87 255.7-17.66z"
			fill="#a00403"
		/>
		<path
			d="M423.39 178.977L320 98l-27 93c109.797 9.317 91.763-9.646 130.39-12.023zM192 282l136 43-35-134zm-89 19c44 139 55 169 89-19l-90 21zM276 68l97 1-53 29c-11-7-36-24-44-30z M85 246l-4 99 23-43z M298 85c26 26-1 89-53 140s-118 83-144 57c-25-25.89.7-90 52.85-141s119.2-82 144.2-56z"
			fill="#b11205"
		/>
		<path d="M192 282l133 43c-48 45-137.5 86.5-173 90z" fill="#9f0d02" />
		<path d="M293 191l33 133c40-42 76-88 94-144zm114.7 206.3L387.02 245 326 324z" fill="#891102" />
		<path d="M421 181c13-41 16-101-48-112l-53 29z" fill="#aa1401" />
		<path d="M81 345c2 68 50 69 71 70l-49-113z" fill="#9e1209" />
		<path d="M192 282l54 103c32-17 57-38 79-61z" fill="#900e04" />
		<path d="M103 302l-8 91c14 20 34 21 55 20-15-37-45-112-47-111z" fill="#8b1104" />
	</svg>
);

export default Ruby;
