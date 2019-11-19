import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('screen')

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	text: {
		width,
		textAlign: 'center',
	},
	buttonText: {
		color: '#35f',
		fontWeight: '600',
		fontSize: 24,
	},
})
