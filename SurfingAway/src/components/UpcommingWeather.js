import React from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { Feather } from '@expo/vector-icons'

const DATA = {
    "coord": {
        "lon": 10.99,
        "lat": 44.34
    },
    "weather": [
        {
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 298.48,
        "feels_like": 298.74,
        "temp_min": 297.56,
        "temp_max": 300.05,
        "pressure": 1015,
        "humidity": 64,
        "sea_level": 1015,
        "grnd_level": 933
    },
    "visibility": 10000,
    "wind": {
        "speed": 0.62,
        "deg": 349,
        "gust": 1.18
    },
    "rain": {
        "1h": 3.16
    },
    "clouds": {
        "all": 100
    },
    "dt": 1661870592,
    "sys": {
        "type": 2,
        "id": 2075663,
        "country": "IT",
        "sunrise": 1661834187,
        "sunset": 1661882248
    },
    "timezone": 7200,
    "id": 3163858,
    "name": "Zocca",
    "cod": 200
}

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
                <Text>{min}°</Text>
                <Text>{max}°</Text>
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