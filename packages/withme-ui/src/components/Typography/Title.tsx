import { CSSProperties, FC } from 'react';
import classNames from 'classnames';

import { CN } from '../../constants';
import type { HeadingProps, TitleProps } from './types';

const Title: FC<TitleProps> = ({
	children,
	className: classNameProp = '',
	color = 'gray-800',
	level = 2,
	size = 'md',
	style: styleProp,
	...rest
}) => {
	const isCodeColor = /rgba*|#/g.test(color);

	const className = classNames(
		CN.TYPOGRAPHY,
		`${CN.TYPOGRAPHY}--${size}`,
		`${CN.TYPOGRAPHY}--heading`,
		{ [`${CN.TYPOGRAPHY}--${color}`]: !isCodeColor },
		classNameProp
	);

	const style: CSSProperties = isCodeColor ? { color, ...styleProp } : { ...styleProp };

	const headingProps: HeadingProps = { className, style, ...rest };

	const headingList = {
		1: <h1 {...headingProps}>{children}</h1>,
		2: <h2 {...headingProps}>{children}</h2>,
		3: <h3 {...headingProps}>{children}</h3>,
		4: <h4 {...headingProps}>{children}</h4>,
		5: <h5 {...headingProps}>{children}</h5>,
		6: <h6 {...headingProps}>{children}</h6>
	};

	return headingList[level];
};

export default Title;
