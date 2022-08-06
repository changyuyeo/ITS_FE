import { CSSProperties, FC, HTMLAttributes, useMemo } from 'react';
import classNames from 'classnames';
import { ThemeTypes } from '../../typings/props.types.d';

type DividerColorType = keyof ThemeTypes | 'default' | 'description' | 'guide' | 'white';

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
	borderWidth?: number;
	className?: string;
	color?: DividerColorType;
	style?: CSSProperties;
	width?: number;
}

const BASE = 'wm-divider' as const;

const Divider: FC<DividerProps> = ({
	borderWidth = 1,
	className = '',
	color = 'default',
	style,
	width,
	...props
}) => {
	const cx = classNames(BASE, `${BASE}--color-${color}`);

	const DividerStyled: CSSProperties = useMemo(
		() => ({
			borderBottomWidth: `${String(borderWidth)}px`,
			width: `${String(width)}px`,
			...style
		}),
		[borderWidth, style, width]
	);

	return <hr className={`${cx} ${className}`} style={DividerStyled} {...props} />;
};

export default Divider;
