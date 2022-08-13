import { CSSProperties, FC, HTMLAttributes, useMemo } from 'react';
import classNames from 'classnames';
import { SizeTypes } from '../../typings/props.types';

type AvatarSizeType = keyof Pick<SizeTypes, 'sm' | 'lg'> | number;

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
	alt?: string;
	className?: string;
	clickable?: boolean;
	nickname: string;
	shape?: 'circle' | 'square';
	size?: AvatarSizeType;
	src?: string | null;
	style?: CSSProperties;
}

const BASE = 'wm-avatar' as const;

const Avatar: FC<AvatarProps> = ({
	alt = '',
	className = '',
	clickable = false,
	nickname,
	shape = 'circle',
	size = 'lg',
	src = null,
	style,
	...props
}) => {
	const cx = classNames(
		`${BASE}--${shape}`,
		{ [`${BASE}--cursor-point`]: clickable },
		{ [`${BASE}--${size}`]: typeof size !== 'number' }
	);

	const avatarStyled: CSSProperties = useMemo(() => {
		const sizeStyled: CSSProperties =
			typeof size === 'number' ? { width: `${size}px`, height: `${size}px` } : {};

		return { ...sizeStyled, style };
	}, [size, style]);

	return (
		<div className={`${BASE} ${className}`} {...props}>
			{src ? (
				<img src={src} alt={alt} className={cx} style={avatarStyled} />
			) : (
				<div className={`${cx} ${BASE}--default`} style={avatarStyled}>
					{nickname[0]}
				</div>
			)}
		</div>
	);
};

export default Avatar;
