import React from "react";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native";

const SpotPage = () => {
    return (
        <View style={styles.container} >
            <Image source={require('../../assets/sri-lanka-spot.jpg')} style={styles.ImageStyle} />
            <View style={styles.contentWrapper} >
                <View style={styles.textWrapper} >
                    <Text style={styles.localisation}>Pottuvil, Sri Lanka</Text>
                    <Text style={styles.name}>Pipeline Pottuvil </Text>
                    <Text style={styles.difficulty}>Difficulty level </Text>
                    <Text style={styles.category}>Surf Break</Text>
                </View>
                <View style={styles.weatherWrapper} >
                    <Text style={styles.textEmphase} >Sunny</Text>
                </View>
                <View style={styles.ratingWrapper} >
                    <Text style={styles.textEmphase} >Rating influencer</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ImageStyle: {
        width: '100%',
        height: 250
    },
    contentWrapper: {
        marginHorizontal: 10,
        marginVertical: 20
    },
    textWrapper: {
    },
    localisation: {
        color: 'grey',
        fontSize: 20
    },
    name: {
        fontSize: 20
    },
    difficulty: {
        fontSize: 20
    },
    category: {
        fontSize: 20
    },
    weatherWrapper: {
        marginVertical: 7,
        backgroundColor: 'mediumpurple',
        alignItems: 'center',
        paddingVertical: 7
    },
    ratingWrapper: {
        marginVertical: 7,
        backgroundColor: 'mediumpurple',
        alignItems: 'center',
        paddingVertical: 7
    },
    textEmphase: {
        fontWeight: 'bold',
        fontSize: 30
    }
})

export default SpotPage