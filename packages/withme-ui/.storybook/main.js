module.exports = {
	stories: [
		// '../src/components/**/*.stories.mdx',
		'../src/components/Avatar/Avatar.stories.mdx',
		'../src/components/Button/Button.stories.mdx',
		'../src/components/Icons/Icons.stories.mdx'
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions'
	],
	framework: '@storybook/react'
};
