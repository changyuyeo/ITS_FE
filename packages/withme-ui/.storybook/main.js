module.exports = {
	stories: ['../src/components/**/*.stories.mdx', './Intro.jsx'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions'
	],
	framework: '@storybook/react'
};
