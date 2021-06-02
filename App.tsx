import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { FC } from 'react'
import { View } from 'react-native'
import Page_Home from './views/Home'
import Page_Viewer from './views/Viewer'

export type RootStackParamList = {
  home: undefined
  viewer: { url: string }
}
const RootStack = createStackNavigator<RootStackParamList>()

const App: FC = () => {
  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="home">
          <RootStack.Screen
            component={Page_Home}
            name="home"
            options={{ header: () => null }}
          />
          <RootStack.Screen
            component={Page_Viewer}
            name="viewer"
            options={{ header: () => null }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default App
