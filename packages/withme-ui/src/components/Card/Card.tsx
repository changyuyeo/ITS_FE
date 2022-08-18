import { CSSProperties, FC, HTMLAttributes, ReactNode, useMemo } from 'react';
import classNames from 'classnames';
import type { ColorTypes } from '../../typings/props.types';

interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
	borderColor?: ColorTypes;
	borderRadius?: number;
	children: ReactNode;
	className?: string;
	fullSize?: boolean;
	htmlTitle?: string;
	isBorder?: boolean;
	isHover?: boolean;
	isShadow?: boolean;
	px?: number;
	py?: number;
	style?: CSSProperties;
	title?: ReactNode;
}

const BASE = 'wm-card' as const;

const Card: FC<CardProps> = ({
	borderColor = '#dddddd',
	borderRadius = 5,
	children,
	className = '',
	fullSize = false,
	htmlTitle,
	isBorder = true,
	isHover = false,
	isShadow = false,
	px = 20,
	py = 20,
	style,
	title,
	...props
}) => {
	const cx = classNames(
		BASE,
		{ [`${BASE}--hover`]: isHover && !isShadow },
		{ [`${BASE}--shadow`]: isShadow },
		{ [`${BASE}--shadow-hover`]: isHover && isShadow }
	);

	const paddingStyled: CSSProperties = useMemo(() => ({ padding: `${px}px ${py}px` }), [px, py]);

	const cardTitleSted: CSSProperties = useMemo(
		() => ({ borderBottom: isBorder ? `1px solid ${borderColor}` : 0, ...paddingStyled }),
		[borderColor, isBorder, paddingStyled]
	);

	const cardStyled: CSSProperties = useMemo(() => {
		const borderStyled: CSSProperties = isBorder
			? { borderColor, borderRadius, borderStyle: 'solid', borderWidth: '1px' }
			: { borderRadius };

		const fullSizing: CSSProperties = fullSize ? { width: '100%' } : {};

		return { ...borderStyled, ...fullSizing, ...style };
	}, [borderColor, borderRadius, fullSize, isBorder, style]);

	return (
		<div className={`${cx} ${className}`} style={cardStyled} title={htmlTitle} {...props}>
			{title && <div style={cardTitleSted}>{title}</div>}
			<div style={paddingStyled}>{children}</div>
		</div>
	);
};

export default Card;
