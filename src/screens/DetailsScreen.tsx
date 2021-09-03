import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CharacterCard } from '../components/CharacterCard';
import { RootStackParams } from '../router/StackRouter';


export const nameDetailsScreen = 'nameDetailsScreen'

interface Props extends StackScreenProps<RootStackParams, 'nameDetailsScreen'> {
}
export const DetailsScreen = ({ navigation, route }: Props) => {

    navigation.setOptions({
        headerShown: true,
        title: 'Character'
    })

    return (

        <ScrollView >

            <View style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'

            }}>

                <CharacterCard
                    character={route.params}
                />
            </View>

            <View style={style.detailsContainer}>

                <Text style={style.detailsCharacter} >Status: {route.params.status}</Text>
                <Text style={style.detailsCharacter} >Species: {route.params.species}</Text>
                <Text style={style.detailsCharacter} >participated episodes: {route.params.episode?.length}</Text>


            </View>


        </ScrollView>
    )
}

const style = StyleSheet.create({
    detailsContainer: {
        marginTop: 15,
        marginHorizontal: 20,
        marginBottom: 5
    },
    detailsCharacter: {
        fontSize: 18,
        marginVertical: 5
    }
})