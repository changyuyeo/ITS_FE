type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type InlineColor = RGB | RGBA | HEX;

export type ThemeColor = {
	primary: 'primary';
	secondary: 'secondary';
	success: 'success';
	error: 'error';
};

export type GrayColor = {
	'gray-100': 'gray-100';
	'gray-200': 'gray-200';
	'gray-300': 'gray-300';
	'gray-400': 'gray-400';
	'gray-500': 'gray-500';
	'gray-600': 'gray-600';
	'gray-700': 'gray-700';
	'gray-800': 'gray-800';
	'gray-900': 'gray-900';
};
