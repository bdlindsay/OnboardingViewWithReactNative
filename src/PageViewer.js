import { Dimensions, Platform, ScrollView, StyleSheet } from 'react-native'
import PageViewIndicator from './PageViewIndicator'
import React, { useCallback, useEffect, useRef } from 'react'
import debounce from 'lodash/debounce'
import getOrElse from 'lodash/get'

const { width } = Dimensions.get('window')

const Styles = StyleSheet.create({
	contentContainer: {
		alignItems: 'center',
	},
})

// Children width should be screen width
const PageViewer = ({
	children,
	currentPage,
	setCurrentPage,
	pageViewIndicatorOptions: {
		size,
		spacing,
		pageIndicatorStyle,
		activeColor,
		inactiveColor,
	},
	scrolledToPage = () => null,
	style,
}) => {
	const pageViewRef = useRef(null)

	useEffect(() => {
		pageViewRef.current.scrollTo({ x: currentPage * width, animated: true })
	}, [ currentPage ])

	const composedStyles = Array.isArray(style) ? style : [ style ]
	const scrollHandler = ({ nativeEvent }) => {
		const screenWidth = getOrElse(nativeEvent, 'layoutMeasurement.width', null)
		const targetContentOffsetWidth = Platform.OS === 'ios'
			? getOrElse(nativeEvent, 'targetContentOffset.x', null)
			: getOrElse(nativeEvent, 'contentOffset.x', null)

		if (screenWidth === null || targetContentOffsetWidth === null) return

		// android is weird, number for page with index 3 is 2.999999999
		const page = targetContentOffsetWidth === 0 ? 0 : Math.round(targetContentOffsetWidth / screenWidth)
		setCurrentPage(page)
		scrolledToPage(page)
	}
	const debouncedScrollHandler = useCallback(debounce(scrollHandler, 25))
	const androidScrollHandler = e => {
		e.persist()
		debouncedScrollHandler(e)
	}

	return (
		<>
			<ScrollView
				contentContainerStyle={[ Styles.contentContainer, ...composedStyles ]}
				horizontal
				onScroll={Platform.OS === 'ios' ? null : androidScrollHandler}
				onScrollEndDrag={scrollHandler}
				pagingEnabled
				ref={pageViewRef}
				showsHorizontalScrollIndicator={false}
			>
				{children}
			</ScrollView>
			<PageViewIndicator
				activeColor={activeColor}
				currentPage={currentPage}
				inactiveColor={inactiveColor}
				numberOfPages={children.length}
				size={size}
				spacing={spacing}
				style={pageIndicatorStyle}
			/>
		</>
	)
}

export default PageViewer
