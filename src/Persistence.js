import AsyncStorage from '@react-native-community/async-storage'

const hasOnboardedKey = 'hasOnboarded'
const hasOnboardedValue = 'true'

const setHasOnboarded = async () => {
	try {
		await AsyncStorage.setItem(hasOnboardedKey, hasOnboardedValue)
	} catch (error) {
		console.warn(error.message)
	}
}

const getHasOnboarded = async () => {
	try {
		const hasOnboardedString = await AsyncStorage.getItem(hasOnboardedKey)
		const hasOnboarded = hasOnboardedString === hasOnboardedValue

		return hasOnboarded
	} catch (error) {
		console.warn(error.message)

		return null
	}
}

export const reactotronResetHasOnboarded = async () => {
	await AsyncStorage.removeItem(hasOnboardedKey)
}

export default {
	setHasOnboarded,
	getHasOnboarded,
}
