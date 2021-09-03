import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { ActivityIndicator, Button, Dimensions, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { Character } from '../api/rickAndMorty/interface';
import request, { TypeRequstRickAndMorty } from '../api/rickAndMorty/request';
import { CharacterCard } from '../components/CharacterCard';
import { getData } from '../redux/rickAndMorty/actions';
import { RootStackParams } from '../router/StackRouter';
import { nameDetailsScreen } from './DetailsScreen';

interface Props extends StackScreenProps<RootStackParams, 'nameHomeScreen'> { }

const { width } = Dimensions.get('window')

export const nameHomeScreen = 'nameHomeScreen'

export const HomeScreen = (props: Props) => {

    props.navigation.setOptions({
        headerShown: true,
        title: 'Home'
    })

    const { top } = useSafeAreaInsets()

    const dispatch = useDispatch()

    const globalState = useSelector((state: any) => state)

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


        <ScrollView>

            <View style={{
                marginTop: top + 20,
                height: 470,
                width,
            }}>
                <Carousel
                    data={globalState.character.state}
                    renderItem={({ item }: any) => (
                        <CharacterCard
                            onPress={() => {
                                props.navigation.navigate(nameDetailsScreen, item)
                            }}
                            character={item}
                        />
                    )}

                    sliderWidth={width}
                    itemWidth={300}
                />
            </View>



        </ScrollView>

        // <View>
        //     <CharacterCard character={globalState.character.state[0]} />
        // </View>
    )
}