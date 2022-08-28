import {
	CSSProperties,
	FC,
	FocusEvent,
	FocusEventHandler,
	HTMLInputTypeAttribute,
	InputHTMLAttributes,
	ReactNode,
	RefObject,
	useCallback,
	useMemo,
	useState
} from 'react';
import classNames from 'classnames';
import type { SizeTypes } from '../../typings/props.types';
import Text from '../Text';

type InputAttributesType = Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'>;
type InputSizeType = keyof Pick<SizeTypes, 'sm' | 'base' | 'lg'>;

interface InputProps extends InputAttributesType {
	className?: string;
	error?: boolean;
	errorMsg?: string;
	ref?: RefObject<HTMLInputElement>;
	onBlur?: FocusEventHandler<HTMLInputElement>;
	onFocus?: FocusEventHandler<HTMLInputElement>;
	password?: boolean;
	prefix?: ReactNode;
	size?: InputSizeType;
	style?: CSSProperties;
	suffix?: ReactNode;
	type?: HTMLInputTypeAttribute;
}

const BASE = 'wm-input' as const;

const Input: FC<InputProps> = ({
	className = '',
	error = false,
	errorMsg,
	ref,
	onBlur,
	onFocus,
	password = false,
	prefix,
	size = 'base',
	style,
	suffix,
	type = 'text',
	...props
}) => {
	const [hidePassword, setHidePassword] = useState(true);
	const [focus, setFocus] = useState(false);

	const cx = classNames(
		BASE,
		`${BASE}-${size}`,
		{ [`${BASE}--error`]: error },
		{ [`${BASE}--focus`]: focus }
	);

	const onToggleHidePassword = useCallback(() => setHidePassword(prev => !prev), []);

	const onBlurHandler = useCallback(
		(event: FocusEvent<HTMLInputElement>) => {
			setFocus(false);
			if (onBlur) onBlur(event);
		},
		[onBlur]
	);

	const onFocusHandler = useCallback(
		(event: FocusEvent<HTMLInputElement>) => {
			setFocus(true);
			if (onFocus) onFocus(event);
		},
		[onFocus]
	);

	const inputStyled: CSSProperties = useMemo(() => ({ position: 'relative', ...style }), [style]);

	return (
		<div className={`${cx} ${className}`} style={inputStyled}>
			{prefix && <div className={`${BASE}__prefix`}>{prefix}</div>}
			<input
				ref={ref}
				type={password && hidePassword ? 'password' : type}
				onBlur={onBlurHandler}
				onFocus={onFocusHandler}
				{...props}
			/>
			{password && (
				<button type="button" className={`${BASE}__password-icon`} onClick={onToggleHidePassword}>
					{
						// eslint-disable-next-line @typescript-eslint/no-use-before-define
						hidePassword ? <OpenedEye /> : <ClosedEye />
					}
				</button>
			)}
			{suffix && <div className={`${BASE}__suffix`}>{suffix}</div>}
			{errorMsg && error && (
				<Text size="xs" color="error" className={`${BASE}__message`}>
					{errorMsg}
				</Text>
			)}
		</div>
	);
};

export default Input;

const ClosedEye = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20px"
		height="20px"
		viewBox="0 0 20 20"
		fill="currentColor"
	>
		<path
			fillRule="evenodd"
			d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
			clipRule="evenodd"
		/>
		<path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
	</svg>
);

const OpenedEye = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20px"
		height="20px"
		viewBox="0 0 20 20"
		fill="currentColor"
	>
		<path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
		<path
			fillRule="evenodd"
			d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
			clipRule="evenodd"
		/>
	</svg>
);
