import type { CSSProperties, DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import type { GrayColor, InlineColor, SizeTypes } from '../../types';

type TypographyProps = {
	className?: string;
	children?: ReactNode;
	color?: InlineColor | keyof GrayColor;
	style?: CSSProperties;
};

export type TextProps = TypographyProps & {
	type?: 'label' | 'paragraph';
	size?: keyof Pick<SizeTypes, 'xxl' | 'xl' | 'lg' | 'md' | 'sm'>;
} & HTMLAttributes<HTMLSpanElement>;

export type TitleProps = TypographyProps & {
	size?: keyof Pick<SizeTypes, 'xxxl' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm'>;
	level?: 1 | 2 | 3 | 4 | 5 | 6;
} & HTMLAttributes<HTMLHeadingElement>;

export type HeadingProps = DetailedHTMLProps<
	HTMLAttributes<HTMLHeadingElement>,
	HTMLHeadingElement
>;

export type TypographyCompoundedComponent = {
	Text: FC<TextProps>;
	Title: FC<TitleProps>;
};
