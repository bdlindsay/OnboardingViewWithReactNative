## Onboarding Page Viewer with React Native

#### yarn
`yarn add react-navigation react-native-gesture-handler react-native-reanimated react-native-screens@^1.0.0-alpha.23 @react-native-community/async-storage lodash`
#### npm
`npm i -S react-navigation react-native-gesture-handler react-native-reanimated react-native-screens@^1.0.0-alpha.23 @react-native-community/async-storage lodash`

#### Pods
`cd ios && pod install && cd ..`

- Create `src/` and move App.js to it
- Setup eslint and eslint plugins (copy in from RunThrough project)
-   eslint plugins we use: 
    #### yarn
    `yarn add -D eslint-config-airbnb eslint-import-resolver-react-native eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-lodash eslint-plugin-react eslint-plugin-wyze reactotron-react-native`
    #### npm
    `npm i -D eslint-config-airbnb eslint-import-resolver-react-native eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-lodash eslint-plugin-react eslint-plugin-wyze reactotron-react-native` 
        
- Add React Navigation (and associated libraries)
  - [Architecture Redesign](https://github.com/react-navigation/navigation-ex) possibly coming! 
- Setup initial routing
    - Exported constants object for screen keys
    - Switch Navigator (Usually also Stack Navigator - now a separate library)
- Setup the page view and page view indicator (maybe copy paste and go through this code)
- Hooks! (we use a lot of them)
- Navigate to home screen on "Let's Go!"
- Simple persistence to know whether the user has been through onboarding
    - Context API, esp. with hooks
    - We typically use Realm as our persistence option instead of AsyncStorage, has been pretty great so far.
- Navigation setup to have a dynamic initial route
  - Downside of time-to-interaction (TTI) goes down for the read time
- Setup Reactotron to have a clear hasOnboarded flag helper for development

### 0.61.X
- Fast Refresh (Great, just want stateful refresh)
- Auto-linking as of 0.60

Notes: 
`npm i` on vpn, `npm run android` off vpn, 
Either: 
 - reset reactotron, and run ios and android after setup
 - OR it's probably the device select in reactotron
