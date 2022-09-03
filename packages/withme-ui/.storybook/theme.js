import { create } from '@storybook/theming';
import logo from './logo.png';

export default create({
	base: 'light',

	colorPrimary: '#6C5CE7',
	colorSecondary: '#6C5CE7',

	// UI
	appBg: 'white',
	appContentBg: '#eee',
	appBorderColor: '#eee',
	appBorderRadius: 4,

	// Typography
	fontBase: '"Noto Sans KR", sans-serif',
	fontCode: 'monospace',

	// Text colors
	textColor: '#333',
	textInverseColor: 'rgba(255,255,255,0.9)',

	// Toolbar default and active colors
	barTextColor: '#eee',
	barSelectedColor: '#fff',
	barBg: '#6C5CE7',

	// Form colors
	inputBg: 'white',
	inputBorder: 'silver',
	inputTextColor: 'black',
	inputBorderRadius: 4,

	brandTitle: 'withme UI Storybook',
	brandUrl: 'https://with-me-ui.netlify.app/?path=/docs/assets-icons--base',
	brandImage: logo,
	brandTarget: '_self'
});
