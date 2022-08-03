import { CSSProperties, FC, HTMLAttributes, useMemo } from 'react';
import classNames from 'classnames';
import { ThemeTypes } from '../../typings/props.types';

type SpinnerColorType = keyof ThemeTypes | 'white';

interface SpinnerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
	className?: string;
	color?: SpinnerColorType;
	duration?: number;
	zIndex?: number;
	size?: string;
	style?: CSSProperties;
}

const BASE = 'wm-spinner' as const;

const Spinner: FC<SpinnerProps> = ({
	className = '',
	color = 'primary',
	duration = 500,
	size = 'base',
	style,
	zIndex = 999,
	...props
}) => {
	const cx = classNames(BASE, `${BASE}--color-${color}`, `${BASE}--size-${size}`);

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
