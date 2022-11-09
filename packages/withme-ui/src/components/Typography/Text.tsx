import { CSSProperties, FC } from 'react';
import classNames from 'classnames';

import { CN } from '../../constants';
import type { TextProps } from './types';

const Text: FC<TextProps> = ({
	children,
	className: classNameProp = '',
	color = 'gray-800',
	size = 'md',
	style: styleProp,
	type = 'paragraph',
	...rest
}) => {
	const isCodeColor = /rgba*|#/g.test(color);

	const className = classNames(
		CN.TYPOGRAPHY,
		`${CN.TYPOGRAPHY}--${size}`,
		`${CN.TYPOGRAPHY}--${type}`,
		{ [`${CN.TYPOGRAPHY}--${color}`]: !isCodeColor },
		classNameProp
	);

	const style: CSSProperties = isCodeColor ? { color, ...styleProp } : { ...styleProp };

	return (
		<span className={className} style={style} {...rest}>
			{children}
		</span>
	);
};

export default Text;
