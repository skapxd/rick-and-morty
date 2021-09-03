import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { CharacterCard } from '../components/CharacterCard';
import { RootStackParams } from '../router/StackRouter';
import { nameDetailsScreen } from './DetailsScreen';

interface Props extends StackScreenProps<RootStackParams, 'nameHomeScreen'> { }

export const nameHomeScreen = 'nameHomeScreen'

export const HomeScreen = (props: Props) => {
    return (
        <View>
            <CharacterCard character/>

        </View>
    )
}