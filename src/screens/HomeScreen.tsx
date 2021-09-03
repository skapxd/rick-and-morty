import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { ActivityIndicator, Dimensions, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { CharacterCard } from '../components/CharacterCard';
import { getData } from '../redux/rickAndMorty/actions';
import { RootStackParams } from '../router/StackRouter';
import { nameDetailsScreen } from './DetailsScreen';

interface Props extends StackScreenProps<RootStackParams, 'nameHomeScreen'> { }

const { width } = Dimensions.get('window')

export const nameHomeScreen = 'nameHomeScreen'

export const HomeScreen = (props: Props) => {


    const { top } = useSafeAreaInsets()

    const dispatch = useDispatch()

    const globalState = useSelector((state: any) => state)

    useEffect(() => {
        props.navigation.setOptions({
            headerShown: true,
            title: 'Home'
        })
        dispatch(
            getData()
        )
    }, [])


    const isCharacterCero = globalState?.character?.state?.length;

    if (isCharacterCero === 0) {

        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <ActivityIndicator color='red' size={50} />
            </View>
        )
    } else {

        return (

            <ScrollView>

                <View style={{
                    width,
                    height: 470,
                    marginTop: top + 20,
                }}>
                    <Carousel
                        itemWidth={300}
                        sliderWidth={width}
                        data={globalState.character.state}
                        renderItem={({ item }: any) => (
                            <CharacterCard
                                character={item}
                                onPress={() => {
                                    props.navigation.navigate(nameDetailsScreen, item)
                                }}
                            />
                        )}

                    />
                </View>
            </ScrollView>
        )

    }
}