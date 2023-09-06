import React from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { Feather } from '@expo/vector-icons'

async function imageApi() {
    let city = prompt("Vous voulez voir la météo de quelle ville ?")
    let URL = "https://api.openweathermap.org/data/2.5/weather?appid={d405fb101d33dad60e6deb3993ca48a7}" + "&q=" + encodeURIComponent(city);
    const url = await fetch(URL);
    const xml = await url.xml();
    return xml
}
imageApi()

const Item = (props) => {
    const { min, max } = props
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.location}>
                <Text>Nantes</Text>
            </View>
            <View style={styles.details}>
                <Text>Today</Text>
                <Text>Date d'aujourd'hui</Text>
                <Feather name="sun" size={40} color="gold" />
                <Text>Précip. : 5%</Text>
                <Text>Humidité : 80%</Text>
                <Text>Vent : 21 km/h</Text>
            </View>
            <View style={styles.feels}>
                <Text>{min}°/{max}°</Text>
                <Text>Feels : 22°</Text>
            </View>
            <View style={styles.days}>
                <View style={styles.daysPartieUn}>
                    <Text>Date du jour</Text>
                    <Feather name="sun" size={20} color="gold" />
                </View>
                <View style={styles.daysPartieDeux}>
                    <Text>11°/23°</Text>
                    <Text>Feels : 24°</Text>
                </View>
            </View>
            <View style={styles.days}>
                <View style={styles.daysPartieUn}>
                    <Text>Date du jour</Text>
                    <Feather name="sun" size={20} color="gold" />
                </View>
                <View style={styles.daysPartieDeux}>
                    <Text>9°/18°</Text>
                    <Text>Feels : 20°</Text>
                </View>
            </View>
            <View style={styles.days}>
                <View style={styles.daysPartieUn}>
                    <Text>Date du jour</Text>
                    <Feather name="sun" size={20} color="gold" />
                </View>
                <View style={styles.daysPartieDeux}>
                    <Text>7°/16°</Text>
                    <Text>Feels : 17°</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const UpcommingWeather = () => {
    const renderItem = ({ item }) => (
        <Item
            min={item.main.temp_min}
            max={item.main.temp_max}
        />
    )
    return (
        <View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'lightblue'
    },
    location: {
        flex: 1
    },
    details: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    feels: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center'
    },
    days: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    daysPartieUn: {
        flex: 1,
        alignItems: 'center'
    },
    daysPartieDeux: {
        flex: 1,
        alignItems: 'center'
    }
})

export default UpcommingWeather