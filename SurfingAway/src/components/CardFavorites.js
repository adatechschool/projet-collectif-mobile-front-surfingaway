import React from "react";
import { Card, Title } from 'react-native-paper';
import { View, Linking, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

const CardFavorites = (props) => {
    const { name, place, link, imageUrl } = props;

    return (
        <View style={styles.boxContainer}>
            <View>
                <Image source={require('../images/spots-de-surf1s.jpg')} style={styles.image} />
            </View>
            <View style={styles.infoCard}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.place}>{place}</Text>
            </View>
            <View>
                <Image source={require('../images/blue_heart.png')} style={styles.imageHeart} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    boxContainer:{
        display:"flex",
        flexDirection: "row",
        backgroundColor: 'white',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
        marginBottom: 8
    },
    image:{
        width: 100,
        height: 100
    },
    imageHeart:{
        width: 32,
        height: 30,
        position: 'absolute',
        bottom: 0,
        marginBottom: 8
    },
    infoCard:{
        width: 240,
        marginTop: 9,
        marginLeft: 10
    },
    name:{
        fontSize: 32,
        
    },
    place:{
        fontSize: 24,
        color: '#666666'
    },

})

export default CardFavorites;
