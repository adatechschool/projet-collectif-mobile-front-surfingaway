import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Button, Title, Paragraph, Avatar } from 'react-native-paper';
import getWeatherSpot from "../services/getWeatherSpot";

const CardWeather = (props) => {
    const { lat, lon } = props
    const [weatherData, setWeatherData] = useState([])
    const [weatherDescription, setweatherDescription] = useState([])
    const [error, setError] = useState([])

    useEffect(() => {
        const fetchDataWeather = async () => {
            try {
                // dataWeatherArray = [temp_min, temp_max, windSpeed, weatherDescription, pressure, humidity, sunrise, sunset]
                const weather = await getWeatherSpot(lat, lon);
                setWeatherData(weather)
                let weatherStr = weather[3]
                weatherStr = weatherStr.charAt(0).toUpperCase() + weatherStr.slice(1)
                setweatherDescription(weatherStr)
            } catch (error) {
                setError('could not fetch weather');
            }
        };
        fetchDataWeather()
    }, []);
    return (
        <Card>
            <View style={styles.wetaherWrap}>
                <Card.Content style={styles.cardContent} >
                    <Title style={styles.title} >Météo du spot</Title>
                    <Text style={styles.weatherInfos} >{weatherDescription}</Text>
                    <Text style={styles.weatherInfos} >Vitesse du vent : {weatherData[2] + "km/h"}</Text>
                    <Text style={styles.weatherInfos} >Pression : {weatherData[4]}</Text>
                    <Text style={styles.weatherInfos} >Humidité : {weatherData[5]}</Text>
                    <Text style={styles.weatherInfos} >Lever de soleil : {weatherData[6]}</Text>
                    <Text style={styles.weatherInfos} >Coucher du soleil : {weatherData[7]}</Text>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={styles.stretch} />
            </View>
            <Card.Actions >
                <Button style={styles.buttonCard}>{Math.round(weatherData[0]) + "°C"}</Button>
                <Button style={styles.buttonCard}>{Math.round(weatherData[1]) + "°C"}</Button>
            </Card.Actions>
        </Card>
    )
}
const styles = StyleSheet.create({
    buttonCard: {
        paddingHorizontal: 1,
    },
    title: {
        fontSize: 20,
        paddingVertical: 1,
        fontWeight: "bold"
    },
    wetaherWrap: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    stretch: {
        width: "35%",
        height: 200,
        resizeMode: 'stretch',
        paddingRight: 5,
    },
    weatherInfos: {
        fontSize: 16,
        paddingVertical: 2
    },
})

export default CardWeather