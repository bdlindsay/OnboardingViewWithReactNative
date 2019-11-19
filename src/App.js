import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Onboarding from './Onboarding'
import Main from './Main'

export const AppRoutes = {
	Onboarding: 'Onboarding',
	Main: 'Main',
}

const AppNavigator = createSwitchNavigator({
	[AppRoutes.Onboarding]: Onboarding,
	[AppRoutes.Main]: Main,
})

export default createAppContainer(AppNavigator)
