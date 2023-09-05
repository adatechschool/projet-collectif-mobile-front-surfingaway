import React from "react";
import { View, Text, StyleSheet, StatusBar, FlatList } from "react-native";
import { Feather } from '@expo/vector-icons'

const DATA = [
    {
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
]

const Item = (props) => {
    const { dt_txt, min, max, condition } = props
    return (
        <View>
            <Feather name="sun" size={50} color="yellow" />
            <Text>{dt_txt}</Text>
            <Text>{min}</Text>
            <Text>{max}</Text>
        </View>
    )
}

const UpcommingWeather = () => {
    const renderItem = ({ item }) => (
        <Item
            condition={item.weather[0].main}
            dt_txt={item.dt_txt}
            min={item.main.temp_min}
            max={item.main.temp_max}
        />
    )
    return (
        <View style={styles.container} >
            <Text>Upcomming weather</Text>
            <FlatList
                data={DATA}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0,
        flex: 1
    },
})

export default UpcommingWeather