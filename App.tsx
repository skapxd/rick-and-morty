import React from 'react'
import { Text, View } from 'react-native'
import { Provider } from "react-redux";
import { HomeScreen } from './src/screens/HomeScreen';




export default () => {
  return (
    <View>
      <HomeScreen />
    </View>
  )
}
