import React from "react";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import IconWeather from "../components/IconWeather";

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
                <View style={styles.titleWrapper} >
                    <Text style={styles.textEmphase} >Sunny</Text>
                    <View>

                    </View>
                </View>
                <View style={styles.weatherInfos}>
                    <IconWeather />
                </View>
                <View style={styles.titleWrapper} >
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

    },
    textWrapper: {
        paddingVertical: 30,
        paddingHorizontal: 10,
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
    titleWrapper: {
        backgroundColor: 'teal',
        alignItems: 'center',
    },
    textEmphase: {
        fontWeight: 'bold',
        fontSize: 30
    },
    weatherInfos: {
        alignItems: 'center',
        backgroundColor: 'lightblue',
        paddingVertical: 50,
        paddingHorizontal: 10,
    }
})

export default SpotPage