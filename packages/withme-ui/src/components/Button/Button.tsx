import { ButtonHTMLAttributes, CSSProperties, FC, ReactNode, useMemo } from 'react';
import classNames from 'classnames';
import { SizeTypes } from '../../typings/props.types.d';

type ButtonAttrType = ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonSizeType = keyof Pick<SizeTypes, 'sm' | 'base' | 'lg'>;
type ButtonShapeType = 'default' | 'circle' | 'round';
type ButtonThemeType = 'primary' | 'secondary' | 'success' | 'error' | 'gray' | 'dark';

// type -> shape -> size -> loading -> disabled
export interface ButtonProps extends Omit<ButtonAttrType, 'type'> {
	children: ReactNode;
	className?: string;
	disabled?: boolean;
	fullSize?: boolean;
	href?: string;
	htmlType?: ButtonAttrType['type'];
	icon?: ReactNode;
	loading?: boolean;
	shape?: ButtonShapeType;
	size?: ButtonSizeType;
	style?: CSSProperties;
	target?: string;
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
	shape = 'deafult',
	size = 'base',
	style,
	type = 'default',
	...props
}) => {
	const cx = classNames(
		BASE,
		{ [`${BASE}--disabled`]: disabled },
		{ [`${BASE}--full-size`]: fullSize },
		{ [`${BASE}--loading`]: loading },
		`${BASE}--shape-${shape}`,
		`${BASE}--size-${size}`,
		`${BASE}--type-${type}`
	);

	const ButtonStyled: CSSProperties = useMemo(
		() => ({ height: 'fit-content', position: 'relative' }),
		[]
	);

	return (
		<button className={`${cx} ${className}`} style={style} type={htmlType} {...props}>
			{icon && <div className={`${BASE}--icon`}>{icon}</div>}
			{children}
		</button>
	);
};

export default Button;
