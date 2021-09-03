import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { RootStackParams } from '../router/StackRouter';
import { nameDetailsScreen } from './DetailsScreen';

interface Props extends StackScreenProps<RootStackParams, 'nameHomeScreen'> { }

export const nameHomeScreen = 'nameHomeScreen'

export const HomeScreen = (props: Props) => {
    return (
        <View>
            <Text>Home Screen</Text>

            <Button title='go to Details page' onPress={() => props.navigation.navigate(nameDetailsScreen)} />
        </View>
    )
}