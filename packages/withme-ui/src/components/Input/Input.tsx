import {
	CSSProperties,
	FC,
	HTMLInputTypeAttribute,
	InputHTMLAttributes,
	ReactNode,
	useCallback,
	useState
} from 'react';
import classNames from 'classnames';
import { SizeTypes } from '../../typings/props.types';
import { ClosedEye, OpenedEye } from './icons';

type InputAttributesType = Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'>;
type InputSizeType = keyof Pick<SizeTypes, 'sm' | 'base' | 'lg'>;

interface InputProps extends InputAttributesType {
	className?: string;
	error?: boolean;
	password?: boolean;
	prefix?: ReactNode;
	size?: InputSizeType;
	style?: CSSProperties;
	suffix?: ReactNode;
	type?: HTMLInputTypeAttribute;
	value?: string;
}

const BASE = 'wm-input' as const;

const Input: FC<InputProps> = ({
	className = '',
	error = false,
	password = false,
	prefix,
	size = 'base',
	style,
	suffix,
	type = 'text',
	value,
	...props
}) => {
	const [hidePassword, setHidePassword] = useState(true);

	const onToggleHidePassword = useCallback(() => setHidePassword(prev => !prev), []);

	const cx = classNames(BASE, `${BASE}--size-${size}`, { [`${BASE}--error`]: error });

	return (
		<div className={`${cx} ${className}`} style={style}>
			{prefix && <div className={`${BASE}__prefix`}>{prefix}</div>}
			<input value={value} type={password && hidePassword ? 'password' : type} {...props} />
			{password && (
				<button type="button" className={`${BASE}__password-icon`} onClick={onToggleHidePassword}>
					{hidePassword ? <OpenedEye /> : <ClosedEye />}
				</button>
			)}
			{suffix && <div className={`${BASE}__suffix`}>{suffix}</div>}
		</div>
	);
};

export default Input;
