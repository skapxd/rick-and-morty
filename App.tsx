import 'react-native-gesture-handler';

import React from 'react'
import { Text, View } from 'react-native'
import { Provider } from "react-redux";
import { HomeScreen } from './src/screens/HomeScreen';

import { NavigationContainer } from '@react-navigation/native'
import { StackRouter } from './src/router/StackRouter';
import { store } from './src/redux/store';

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer >

        <StackRouter />

      </NavigationContainer>
    </Provider>
  )
}
