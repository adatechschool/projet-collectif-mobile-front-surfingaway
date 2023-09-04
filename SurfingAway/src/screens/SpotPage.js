import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import IconWeather from "../components/IconWeather";
import CardWeather from "../components/CardWeather";
import UserSimpleCard from "../components/UserSimpleCard";
import { Text, Card, Button, Avatar, Title, Paragraph } from 'react-native-paper';

const wind = '6km/h'

const SpotPage = () => {
    return (
        <View style={styles.container} >
            <ScrollView>
                <Image source={require('../../assets/sri-lanka-spot.jpg')} style={styles.ImageStyle} />
                <View style={styles.contentWrapper} >
                    <View style={styles.textWrapper} >
                        <Text style={styles.localisation}>Pottuvil, Sri Lanka</Text>
                        <Text style={styles.name}>Pipeline Pottuvil </Text>
                        <Text style={styles.difficulty}>Difficulty level </Text>
                        <Text style={styles.category}>Surf Break</Text>
                    </View>
                    <View style={styles.titleWrapper} >
                        <Text style={styles.textEmphase} >Infos surf</Text>
                    </View>
                    <View style={styles.weatherInfos}>
                        <IconWeather />
                        <CardWeather />
                    </View>
                    <View style={styles.titleWrapper} >
                        <Text style={styles.textEmphase} >La note des pros</Text>
                    </View>
                    <View>
                        <UserSimpleCard
                            name={"Elsa la bellegosse du 33"}
                            message={"C'est d'la bombe"}
                        />
                        <UserSimpleCard
                            name={"MaMaMaMarion"}
                            message={"Mouais"}
                        />
                        <UserSimpleCard
                            name={"Alisha"}
                            message={"L'eau est trop froide"}
                        />
                        <UserSimpleCard
                            name={"Agathe"}
                            message={"Le sable est trop sableux"}
                        />
                        <UserSimpleCard
                            name={"Charlène"}
                            message={"Ouiiiiiiiiii"}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

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
        paddingVertical: 5,
    },
    temp: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "50%",
    },
    tempText: {
        color: 'red'
    },
})

export default SpotPage