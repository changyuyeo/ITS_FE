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

	const base = 'wm-input';
	const cx = classNames(base, `${base}--size-${size}`, { [`${base}--error`]: error });

	return (
		<div className={`${cx} ${className}`} style={style}>
			{prefix && <div className={`${base}__prefix`}>{prefix}</div>}
			<input value={value} type={password && hidePassword ? 'password' : type} {...props} />
			{password && (
				<button type="button" className={`${base}__password-icon`} onClick={onToggleHidePassword}>
					{hidePassword ? <OpenedEye /> : <ClosedEye />}
				</button>
			)}
			{suffix && <div className={`${base}__suffix`}>{suffix}</div>}
		</div>
	);
};

export default Input;
