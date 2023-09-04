import React from "react";
import { View, StyleSheet, Image } from "react-native";
import IconWeather from "../components/IconWeather";
import UserSimpleCard from "../components/UserSimpleCard";
import { Text, Avatar, Card, IconButton } from 'react-native-paper';

const wind = '6km/h'

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
                </View>
                <View style={styles.weatherInfos}>
                    <View>
                        <IconWeather />
                    </View>
                    <View>
                        <Card>
                            <Card.Content>
                                <View style={styles.temp}>
                                    <Text style={styles.tempText}>18°C</Text>
                                    <Text style={styles.tempText}>6°C</Text>
                                    <Text style={styles.tempText}>19°C</Text>
                                </View>
                                <Text variant="bodyMedium">Vent {wind}</Text>
                            </Card.Content>
                        </Card>
                    </View>

                </View>
                <View style={styles.titleWrapper} >
                    <Text style={styles.textEmphase} >Rating influencer</Text>
                </View>
                <View>
                    <UserSimpleCard />
                    <UserSimpleCard />
                    <UserSimpleCard />
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
        paddingVertical: 20,
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
        fontSize: 30,
        color: 'white',
        paddingVertical: 5,
    },
    weatherInfos: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'lightblue',
        paddingVertical: 50,
        paddingHorizontal: '10%',
    },
    temp: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "50%",
    },
    tempText: {
        color: 'red'
    }
})

export default SpotPage