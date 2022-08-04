import { CSSProperties, FC, HTMLAttributes, useMemo } from 'react';
import classNames from 'classnames';
import { SizeTypes, ThemeTypes } from '../../typings/props.types';

type SpinnerColorType = keyof ThemeTypes | 'white';
type SpinnerSizeType = keyof Pick<SizeTypes, 'sm' | 'base' | 'lg'>;

interface SpinnerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
	className?: string;
	color?: SpinnerColorType;
	duration?: number;
	isAbsolute?: boolean;
	isFixed?: boolean;
	size?: SpinnerSizeType;
	style?: CSSProperties;
	zIndex?: number;
}

const BASE = 'wm-spinner' as const;

const Spinner: FC<SpinnerProps> = ({
	className = '',
	color = 'primary',
	duration = 500,
	isAbsolute = false,
	isFixed = false,
	size = 'base',
	style,
	zIndex = 999,
	...props
}) => {
	const cx = classNames(
		BASE,
		`${BASE}--color-${color}`,
		`${BASE}--size-${size}`,
		{ [`${BASE}--absolute`]: isAbsolute },
		{ [`${BASE}--fixed`]: isFixed }
	);

	const spinnerStyled: CSSProperties = useMemo(
		() => ({
			zIndex,
			...style
		}),
		[style, zIndex]
	);

	const circleStyled: CSSProperties = useMemo(
		() => ({ animationDuration: `${String(duration)}ms` }),
		[duration]
	);

	return (
		<div className={`${cx} ${className}`} style={spinnerStyled} {...props}>
			<div className={`${BASE}--circle`} style={circleStyled} />
		</div>
	);
};

export default Spinner;
