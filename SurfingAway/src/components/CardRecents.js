import React from "react";
import { Card, Title, Button } from 'react-native-paper';
import { View, Linking, StyleSheet, Text, TouchableOpacity, Image, ImageBackground } from "react-native";

const image = {uri: 'https://www.guide-des-landes.com/_bibli/articlesPage/108/images/spots-de-surf-dans-les-landes.jpg?v=ficheArticle&width=772&height=540&pixelRatio=1.0000'};

const CardRecents = (props) => {
    const { name, place, rating, imageUrl } = props;
    return (
        <View style={styles.boxContainer}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <View style={styles.infoCard}>
                    <Text style={styles.textEmphase}>{name}</Text>
                    <Text style={styles.textUnder}>{place}</Text>
                </View>
                <View style={styles.scoreCard}>
                    <Text style={styles.textRating}>{rating}</Text>
                    <Button buttonColor="darkblue" mode="contained"  onPress={() => console.log('Pressed')} style={styles.buttonDetail}>
                    Détails Spot
                    </Button>
                </View>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    boxContainer: {
        
    },
    image: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: 6
    },
    infoCard :{
        width: '50%',
        margin: 8
    },
    textEmphase: {
        color: '#ffffff',
        fontSize: 28,
        textShadowColor: 'deeppink',
        textShadowOffset: {width: 2, height: 1},
        textShadowRadius: 1,
        marginBottom: 20
    },
    textUnder: {
        color: '#ededed',
        fontSize: 24,
        textShadowColor: 'deeppink',
        textShadowOffset: {width: 2, height: 1},
        textShadowRadius: 1
    },
    scoreCard:{
        margin: 8,
        width: '40%',
    },
    textRating: {
        color: '#ffffff',
        fontSize: 20,
        marginBottom: 20
    },
    buttonDetail :{
        fontSize: 20,
    }
})


export default CardRecents;