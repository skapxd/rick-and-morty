import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { nameHomeScreen, HomeScreen } from '../screens/HomeScreen';
import { nameDetailsScreen, DetailsScreen } from '../screens/DetailsScreen';
import { Character } from '../api/rickAndMorty/interface';

export type RootStackParams = {
    nameHomeScreen: undefined,
    nameDetailsScreen: Character
}

const Stack = createStackNavigator<RootStackParams>()

export const StackRouter = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen name={nameHomeScreen} component={HomeScreen} />
            <Stack.Screen name={nameDetailsScreen} component={DetailsScreen} />

        </Stack.Navigator>
    )
}
