import 'react-native-gesture-handler';

import React from 'react'
import { Text, View } from 'react-native'
import { Provider } from "react-redux";
import { HomeScreen } from './src/screens/HomeScreen';

import { NavigationContainer } from '@react-navigation/native'
import { StackRouter } from './src/router/StackRouter';

export default () => {
  return (

    <NavigationContainer >

      <StackRouter />

    </NavigationContainer>
  )
}
