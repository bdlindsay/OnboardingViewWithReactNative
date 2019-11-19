import { View } from 'react-native'
import React from 'react'
import times from 'lodash/times'

export default ({
	numberOfPages,
	currentPage,
	size,
	spacing,
	style,
	activeColor,
	inactiveColor,
}) => {
	const radius = size / 2
	const Indicators = () => times(numberOfPages, index => (
		<View
			key={index}
			style={{
				height: size,
				width: size,
				backgroundColor: index === currentPage ? activeColor : inactiveColor,
				borderRadius: radius,
				margin: spacing,
			}}
		/>
	))
	const composedStyles = Array.isArray(style) ? style : [ style ]

	return (
		<View style={[{ flexDirection: 'row' }, ...composedStyles ]}>
			<Indicators />
		</View>
	)
}
