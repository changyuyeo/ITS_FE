import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { fontColor, fontWeight, titleSize } from '../../foundation'
import '@with-me/styles/build/text.css'

export interface TextProps {
	children: ReactNode
	color?: keyof typeof fontColor
	size?: keyof typeof titleSize
	weight?: keyof typeof fontWeight
}

const Text: FC<TextProps> = ({
	color = 'deep-gray',
	size = titleSize.middle,
	weight = fontWeight.regular,
	children
}) => {
	const base = 'wm-text'
	const className = classNames(
		base,
		`${base}--color-${color}`,
		`${base}--size-${size}`,
		`${base}--weight-${weight}`
	)

	return <span className={className}>{children}</span>
}

export default Text
