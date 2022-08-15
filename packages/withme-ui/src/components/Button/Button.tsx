import { ButtonHTMLAttributes, CSSProperties, FC, ReactNode, useMemo } from 'react';
import classNames from 'classnames';
import type { SizeTypes, ThemeTypes } from '../../typings/props.types.d';
import Spinner from '../Spinner';

type ButtonAttrType = ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonSizeType = keyof Pick<SizeTypes, 'sm' | 'base' | 'lg'>;
type ButtonShapeType = 'default' | 'circle';
type ButtonThemeType = keyof ThemeTypes | 'gray' | 'dark';

export interface ButtonProps extends Omit<ButtonAttrType, 'type'> {
	children: ReactNode;
	className?: string;
	disabled?: boolean;
	fullSize?: boolean;
	htmlType?: ButtonAttrType['type'];
	icon?: ReactNode;
	loading?: boolean;
	shape?: ButtonShapeType;
	size?: ButtonSizeType;
	outline?: boolean;
	style?: CSSProperties;
	type?: ButtonThemeType;
}

const BASE = 'wm-btn' as const;

const Button: FC<ButtonProps> = ({
	children,
	className = '',
	disabled = false,
	fullSize = false,
	htmlType = 'button',
	icon,
	loading = false,
	outline = false,
	shape = 'default',
	size = 'base',
	style,
	type = 'primary',
	...props
}) => {
	const cx = classNames(
		BASE,
		{ [`${BASE}--disabled`]: disabled },
		{ [`${BASE}--full-size`]: fullSize },
		{ [`${BASE}--loading`]: loading },
		`${BASE}--shape-${shape}`,
		`${BASE}--size-${size}`,
		`${BASE}--type-${type}-${outline ? 'outline' : 'fill'}`
	);
	const prefixClassNames = classNames(fullSize ? `${BASE}--prefix-fullsize` : `${BASE}--prefix`);

	const ButtonStyled: CSSProperties = useMemo(
		() => ({ height: 'fit-content', position: 'relative', ...style }),
		[style]
	);

	return (
		<button
			className={`${cx} ${className}`}
			style={ButtonStyled}
			type={htmlType}
			disabled={disabled}
			{...props}
		>
			{icon && <div className={prefixClassNames}>{icon}</div>}
			{loading && (
				<div className={prefixClassNames}>
					<Spinner color="white" isAbsolute size="sm" duration={1000} />
				</div>
			)}
			{children}
		</button>
	);
};

export default Button;
