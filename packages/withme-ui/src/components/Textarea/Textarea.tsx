import {
	CSSProperties,
	FC,
	KeyboardEvent,
	KeyboardEventHandler,
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
	onKeyUp?: KeyboardEventHandler<HTMLTextAreaElement>;
	onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement>;
	resize?: boolean;
	style?: CSSProperties;
	suffix?: ReactNode;
}

const BASE = 'wm-textarea' as const;

const Textarea: FC<TextareaProps> = ({
	autoSize = false,
	className = '',
	onKeyDown,
	onKeyUp,
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

	const onKeyUpHandler = useCallback(
		(event: KeyboardEvent<HTMLTextAreaElement>) => {
			textResize();
			if (onKeyUp) onKeyUp(event);
		},
		[onKeyUp, textResize]
	);

	const onKeyDownHandler = useCallback(
		(event: KeyboardEvent<HTMLTextAreaElement>) => {
			textResize();
			if (onKeyDown) onKeyDown(event);
		},
		[onKeyDown, textResize]
	);

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
				onKeyUp={onKeyUpHandler}
				onKeyDown={onKeyDownHandler}
				{...props}
			/>
			{suffix && <div className={`${BASE}__suffix`}>{suffix}</div>}
		</div>
	);
};

export default Textarea;
