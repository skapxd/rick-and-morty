import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { Character } from '../api/rickAndMorty/interface';
import request, { TypeRequstRickAndMorty } from '../api/rickAndMorty/request';
import { CharacterCard } from '../components/CharacterCard';
import { getCharacter } from '../redux/rickAndMorty/actions';
import { RootStackParams } from '../router/StackRouter';
import { nameDetailsScreen } from './DetailsScreen';

interface Props extends StackScreenProps<RootStackParams, 'nameHomeScreen'> { }

export const nameHomeScreen = 'nameHomeScreen'

export const HomeScreen = (props: Props) => {


    const dispatch = useDispatch()

    const state = useSelector((state: Character[]) => state)

    const getState = async () => {

        const resp = await request({
            typeOfRequest: TypeRequstRickAndMorty.GetAllCharacter
        })

        dispatch(getCharacter({
            payload: resp
        }))

        // console.log(resp[0].name)


    }

    useEffect(() => {
        getState()
    }, [])

    if (state.length === 0) {
        
    }

    return (
        <View>
            {/* <Text>{JSON.stringify(state)}</Text> */}
            <CharacterCard character={state[0]} />

        </View>
    )
}