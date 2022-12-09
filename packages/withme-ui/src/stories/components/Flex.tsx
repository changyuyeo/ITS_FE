import React, { CSSProperties, FC, ReactNode } from 'react';

interface FlexProps {
	children: ReactNode;
	alignItems?: string;
	flexDirection?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
	gap?: string;
	justifyContent?: string;
	width?: string;
}

const Flex: FC<FlexProps> = ({ children, ...rest }) => {
	const style: CSSProperties = { display: 'flex', ...rest };

	return <div style={style}>{children}</div>;
};

export default Flex;
