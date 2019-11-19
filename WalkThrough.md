# Using React Native at Bayer

We have several React Native apps in our Product Development organization at Bayer, and we'll be expanding our React Native use in the near future. 

### Getting into React Native
- Some teams had been investigating into React Native and using it for small apps around the company before our group started trying it out. When I started working on a new product about a year ago, the direction was to be able to provide a cross platform version of the app. We knew this app could expand into a lot of different types of functionality around the mobile device though so we spiked our what we thought the app could possibly include. We tested camera access, location and map services (including drawing on the map), database technologies (Realm!), and just general use (network calls and UI development). We flew through all of these things with modules that were already developed and were impressed with the ease in which we finished the spike. Furthermore, another team that was working with our group had already built out a successful React Native app, so that was all the confidence we needed to dive in.  

### Bayer a Global Company
- Historically our group has been iOS focused
- Parts of the world that use our applications primarily have access to Android devices, e.g. Brazil
  - Even in the U.S. we have sites around the country that have batches of Android devices available. 
- Previously the thought of essentially double the investment to get both platforms hasn't been worth it from the business side even though many groups would use an android app
- One team of developers focus on one product in our organization. Typically, we don't devote multiple dev teams to distict parts of the same app. This means that a lot of time is spent focused bang for buck when it comes to time management.
- With React Native, we can deliver cross platform for only a fraction of the effort for native iOS development - furthermore, we do have several developers experienced with React from a web perspective, so the learning curve is smaller than it seems.

### Fast Development
- We've created functionality in React Native that I believe would've have taken significantly more time to implement in Native iOS (not to mention reproducing in Android). Apps I've been working on for the past year have been using the real apps rather than design mock-ups for feedback because the initial pass at the screen doesn't take much longer than creating high fidelity mock-ups once you get used to the layout system. 

### Concerns
- We have been cautious jumping into the React Native scene. Started out with just a couple React Native apps, and now several are under development at the same time with a few currently in use in production. 
- Upgrades are always a concern - breaking changes from native platforms + changes to react native itself.
- The maintainability of dynamically typed code is a concern. At least one of our teams will be doing React Native with typescript

### Summary
Overall, we've really enjoyed learning and using React Native so far. A couple of us attended Chain React in Portland and really enjoyed the effort we saw Facebook putting in towards making the framework better. We'll still be doing some native development, especially improving our current apps, and any work that doesn't have a need for cross platform. We're really excited to see where we go with React Native and are looking forward to the impact it will have for our users being able to provide iOS and Android versions of our applications.

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
