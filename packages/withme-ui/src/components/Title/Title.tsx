import { CSSProperties, DetailedHTMLProps, FC, HTMLAttributes, useMemo } from 'react';
import classNames from 'classnames';
import type { FontWeightTypes, ThemeTypes } from '../../typings/props.types';

type TitleSizeType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type TitleColorType = keyof ThemeTypes | 'defalut' | 'description' | 'guide' | 'white';
type HeadingPropsType = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
	children: string;
	className?: string;
	color?: TitleColorType;
	size?: TitleSizeType;
	style?: CSSProperties;
	weight?: FontWeightTypes;
}

const BASE = 'wm-title' as const;

const Title: FC<TitleProps> = ({
	children,
	className = '',
	color = 'defalut',
	size = 'h2',
	style,
	weight = 'medium',
	...props
}) => {
	const cx = classNames(
		BASE,
		`${BASE}--color-${color}`,
		`${BASE}--size-${size}`,
		`${BASE}--weight-${weight}`
	);

	const headingProps: HeadingPropsType = useMemo(
		() => ({ className: `${cx} ${className}`, style, ...props }),
		[className, cx, props, style]
	);

	switch (size) {
		case 'h1':
			return <h1 {...headingProps}>{children}</h1>;
		case 'h2':
			return <h2 {...headingProps}>{children}</h2>;
		case 'h3':
			return <h3 {...headingProps}>{children}</h3>;
		case 'h4':
			return <h4 {...headingProps}>{children}</h4>;
		case 'h5':
			return <h5 {...headingProps}>{children}</h5>;
		case 'h6':
			return <h6 {...headingProps}>{children}</h6>;
	}
};

export default Title;
