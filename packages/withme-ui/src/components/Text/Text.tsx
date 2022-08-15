import { CSSProperties, FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import type { FontWeightTypes, SizeTypes, ThemeTypes } from '../../typings/props.types.d';

type TextColorType = keyof ThemeTypes | 'defalut' | 'description' | 'guide' | 'white';
type TextSizeType = keyof Omit<SizeTypes, 'xxxs' | 'xxs' | 'md' | 'xxxl'>;

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
	className?: string;
	children: string;
	color?: TextColorType;
	size?: TextSizeType;
	style?: CSSProperties;
	weight?: FontWeightTypes;
}

const BASE = 'wm-text' as const;

const Text: FC<TextProps> = ({
	children,
	className = '',
	color = 'default',
	size = 'base',
	style,
	weight = 'regular',
	...props
}) => {
	const cx = classNames(
		BASE,
		`${BASE}--color-${color}`,
		`${BASE}--size-${size}`,
		`${BASE}--weight-${weight}`
	);

	return (
		<span className={`${cx} ${className}`} style={style} {...props}>
			{children}
		</span>
	);
};

export default Text;
