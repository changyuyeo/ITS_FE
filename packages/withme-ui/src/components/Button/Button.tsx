import { ButtonHTMLAttributes, CSSProperties, forwardRef, ReactNode, useMemo } from 'react';
import classNames from 'classnames';
import type { SizeTypes, ThemeTypes } from '../../typings/props.types.d';
import Spinner from '../Spinner';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
	children: ReactNode;
	className?: string;
	disabled?: boolean;
	fullSize?: boolean;
	htmlType?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
	icon?: ReactNode;
	loading?: boolean;
	outline?: boolean;
	shape?: 'default' | 'circle';
	size?: keyof Pick<SizeTypes, 'sm' | 'base' | 'lg'>;
	style?: CSSProperties;
	type?: keyof ThemeTypes | 'gray' | 'dark';
}

const BASE = 'wm-btn' as const;

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const {
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
		...rest
	} = props;

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
			ref={ref}
			className={`${cx} ${className}`}
			style={ButtonStyled}
			type={htmlType}
			disabled={disabled}
			{...rest}
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
});

Button.displayName = 'Button';

export default Button;
