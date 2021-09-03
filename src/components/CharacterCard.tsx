import { NavigationProp, useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Character } from '../api/rickAndMorty/interface';


interface Props {
    character: Character
    onPress?: (character: Character) => void
}

export const CharacterCard = ({ character, onPress }: Props) => {

    const nav = useNavigation<NavigationProp<any>>()

    const isNavigable = (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => { onPress && onPress(character) }}
            style={style.container}>

            <Image
                style={style.imageTag}
                source={{ uri: character.image }}
            />


            <View style={style.description}>
                <Text style={style.descriptionTextName} >
                    {character.name}
                </Text>

                <Text style={style.descriptionTextGender} >{character.gender}</Text>
            </View>
        </TouchableOpacity>
    )

    const isNotNavigable = (

        <View
            style={style.container}>

            <Image
                style={style.imageTag}
                source={{ uri: character.image }}
            />


            <View style={style.description}>
                <Text style={style.descriptionTextName} >
                    {character.name}
                </Text>

                <Text style={style.descriptionTextGender} >{character.gender}</Text>
            </View>
        </View>

    )
    return (
        onPress ? isNavigable : isNotNavigable
    )
}


const style = StyleSheet.create({
    container: {
        marginTop: 15,
        height: 430,
        width: 300,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    imageTag: {
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        flex: 2
    },
    description: {

        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        backgroundColor: '#FFF',

        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    descriptionTextName: {
        height: 35,
        lineHeight: 35,
        textAlignVertical: 'center',
        color: '#333',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 32,
    },
    descriptionTextGender: {
        color: '#777',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,

    },
})