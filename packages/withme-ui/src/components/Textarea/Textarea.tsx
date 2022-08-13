import {
	CSSProperties,
	FC,
	ReactNode,
	TextareaHTMLAttributes,
	useCallback,
	useEffect,
	useMemo,
	useRef
} from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	autoSize?: boolean;
	className?: string;
	resize?: boolean;
	style?: CSSProperties;
	suffix?: ReactNode;
}

const BASE = 'wm-textarea' as const;

const Textarea: FC<TextareaProps> = ({
	autoSize = false,
	className = '',
	resize = false,
	style,
	suffix,
	...props
}) => {
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const textResize = useCallback(() => {
		if (textareaRef.current && autoSize) {
			textareaRef.current.style.height = 'auto';
			textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
		}
	}, [autoSize]);

	useEffect(() => {
		textResize();
	}, [autoSize, textResize]);

	const textareaStyled: CSSProperties = useMemo(() => {
		const isResize: CSSProperties = !resize ? { resize: 'none', overflow: 'hidden' } : {};
		const isSuffix: CSSProperties = suffix ? { padding: '12px 24px 12px 12px' } : {};
		return { ...isResize, ...isSuffix, ...style };
	}, [resize, style, suffix]);

	return (
		<div className={`${BASE}__wrapper`}>
			<textarea
				ref={textareaRef}
				className={`${BASE} ${className}`}
				style={textareaStyled}
				onKeyUp={textResize}
				onKeyDown={textResize}
				{...props}
			/>
			{suffix && <div className={`${BASE}__suffix`}>{suffix}</div>}
		</div>
	);
};

export default Textarea;
