import {
	CSSProperties,
	FC,
	FocusEvent,
	FocusEventHandler,
	HTMLInputTypeAttribute,
	InputHTMLAttributes,
	ReactNode,
	useCallback,
	useMemo,
	useState
} from 'react';
import classNames from 'classnames';
import { SizeTypes } from '../../typings/props.types';
import { ClosedEye, OpenedEye } from './icons';
import Text from '../Text';

type InputAttributesType = Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'>;
type InputSizeType = keyof Pick<SizeTypes, 'sm' | 'base' | 'lg'>;

interface InputProps extends InputAttributesType {
	className?: string;
	error?: boolean;
	errorMsg?: string;
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
				type={password && hidePassword ? 'password' : type}
				onBlur={onBlurHandler}
				onFocus={onFocusHandler}
				{...props}
			/>
			{password && (
				<button type="button" className={`${BASE}__password-icon`} onClick={onToggleHidePassword}>
					{hidePassword ? <OpenedEye /> : <ClosedEye />}
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
