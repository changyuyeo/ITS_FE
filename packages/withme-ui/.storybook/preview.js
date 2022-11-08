import React, { useMemo } from 'react';
import '@with-me/style/dist/global.css';

export const parameters = {
	viewMode: 'docs',
	actions: { argTypesRegex: '^on[A-Z].*' },
	options: {
		showPanel: true,
		storySort: {
			order: ['assets', 'components']
		}
	},
	previewTabs: {
		canvas: {
			hidden: true
		},
		docs: {
			hidden: false
		}
	}
};

export const decorators = [
	Story => {
		const styled = useMemo(
			() => ({
				width: 'auto',
				display: 'flex',
				gap: '15px'
			}),
			[]
		);

		return (
			<div style={styled}>
				<Story />
			</div>
		);
	}
];
