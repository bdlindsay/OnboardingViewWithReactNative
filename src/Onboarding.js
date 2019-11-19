import React, { useState, useEffect } from 'react'
import { SafeAreaView, TouchableOpacity, Text, View } from 'react-native'
import PageViewer from './PageViewer'
import Styles from './Onboarding.styles'
import { AppRoutes } from './App'
import Persistence from './Persistence'

export default ({ navigation }) => {
	const [ page, setPage ] = useState(0)
	const [ isLoading, setIsLoading ] = useState(true)

	useEffect(() => {
		Persistence.getHasOnboarded().then(hasOnboarded => {
			if (hasOnboarded) {
				navigation.navigate(AppRoutes.Main)

				return
			}

			setIsLoading(false)
		})
	}, [])

	const pageViewIndicatorOptions = {
		activeColor: '#35f',
		currentPage: page,
		inactiveColor: 'lightgray',
		pageIndicatorStyle: { marginBottom: 16 },
		size: 10,
		spacing: 4,
	}

	const navigateToMain = async () => {
		navigation.navigate(AppRoutes.Main)
		await Persistence.setHasOnboarded()
	}

	return isLoading ? null : (
		<SafeAreaView style={Styles.container}>
			<PageViewer
				currentPage={page}
				setCurrentPage={setPage}
				pageViewIndicatorOptions={pageViewIndicatorOptions}
			>
				<Text style={Styles.text}>One</Text>
				<Text style={Styles.text}>Two</Text>
				<Text style={Styles.text}>Three</Text>
				<View>
					<Text style={Styles.text}>Four</Text>
					<TouchableOpacity onPress={navigateToMain}>
						<Text style={[ Styles.text, Styles.buttonText ]}>Let's Go!</Text>
					</TouchableOpacity>
				</View>
			</PageViewer>
		</SafeAreaView>
	)
}
