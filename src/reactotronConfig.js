import Reactotron from 'reactotron-react-native'
import { reactotronResetHasOnboarded } from './Persistence'
import AsyncStorage from '@react-native-community/async-storage'

if (__DEV__) {
	Reactotron
		.setAsyncStorageHandler(AsyncStorage)
		.configure()
		.useReactNative()
		.connect()

	Reactotron.onCustomCommand({
		command: 'Reset Has Onboarded',
		handler: () => {
			console.log('handled')
			reactotronResetHasOnboarded()
		},
		description: 'Resets hasOnboarded in async storage',
	})
}
