import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
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
            <Card.Content>
                <Title style={styles.title} >Météo du jour</Title>
                <Text style={styles.weatherInfos} >{weatherDescription}</Text>
                <Paragraph style={styles.weatherInfos} >Vitesse du vent : {weatherData[2] + "km/h"}</Paragraph>
                <Paragraph style={styles.weatherInfos} >Pression : { }</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
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
        fontSize: 30
    },
    weatherInfos: {
        fontSize: 20,
        paddingVertical: 3
    },
})

export default CardWeather