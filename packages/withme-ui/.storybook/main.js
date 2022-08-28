module.exports = {
	stories: [
		// '../src/components/**/*.stories.mdx',
		'../src/components/Avatar/Avatar.stories.mdx',
		'../src/components/Button/Button.stories.mdx',
		'../src/components/Card/Card.stories.mdx',
		'../src/components/Divider/Divider.stories.mdx',
		'../src/components/Input/Input.stories.mdx',
		'../src/components/Icons/Icons.stories.mdx',
		'../src/components/Spinner/Spinner.stories.mdx',
		'../src/components/Text/Text.stories.mdx',
		'../src/components/Textarea/Textarea.stories.mdx',
		'../src/components/Title/Title.stories.mdx'
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions'
	],
	framework: '@storybook/react'
};
