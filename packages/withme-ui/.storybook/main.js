module.exports = {
	stories: [
		'../src/stories/Typography.stories.mdx',
		'../src/stories/Typography.Text.stories.mdx',
		'../src/stories/Typography.Title.stories.mdx'
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions'
	],
	framework: '@storybook/react'
};
