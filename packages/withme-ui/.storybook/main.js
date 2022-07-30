module.exports = {
	stories: ['../src/components/**/Button.stories.mdx'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions'
	],
	framework: '@storybook/react'
};
