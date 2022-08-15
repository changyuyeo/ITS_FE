type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type ColorTypes = RGB | RGBA | HEX;

export type SizeTypes = {
	xxxs: 'xxxs';
	xxs: 'xxs';
	xs: 'xs';
	sm: 'sm';
	md: 'md';
	base: 'base';
	lg: 'lg';
	xl: 'xl';
	xxl: 'xxl';
	xxxl: 'xxxl';
};

export type ThemeTypes = {
	primary: 'primary';
	secondary: 'secondary';
	success: 'success';
	error: 'error';
};

export type FontWeightTypes = 'thin' | 'light' | 'regular' | 'medium' | 'bold';
