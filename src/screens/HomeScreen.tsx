import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { ActivityIndicator, Button, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { Character } from '../api/rickAndMorty/interface';
import request, { TypeRequstRickAndMorty } from '../api/rickAndMorty/request';
import { CharacterCard } from '../components/CharacterCard';
import { getData } from '../redux/rickAndMorty/actions';
import { RootStackParams } from '../router/StackRouter';
import { nameDetailsScreen } from './DetailsScreen';

interface Props extends StackScreenProps<RootStackParams, 'nameHomeScreen'> { }

export const nameHomeScreen = 'nameHomeScreen'

export const HomeScreen = (props: Props) => {


    const dispatch = useDispatch()

    const globalState = useSelector((state: any) => state)

    console.log(globalState)

    useEffect(() => {
        dispatch(
            getData()
        )
    }, [])


    if (globalState.character.state.length === 0) {

        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator color='red' size={50} />
            </View>
        )
    }

    return (
        <View>
            <CharacterCard character={globalState.character.state[0]} />
        </View>
    )
}