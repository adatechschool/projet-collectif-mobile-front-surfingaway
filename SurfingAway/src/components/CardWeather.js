import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Card, Button, Title, Paragraph } from 'react-native-paper';
import getWeatherSpot from "../services/getWeatherSpot";

const CardWeather = () => {
    const [tempMinData, setTempMinData] = useState([])
    const [tempMaxData, setTempMaxData] = useState([])
    const [windSpeedData, setWindSpeedData] = useState([])

    useEffect(() => {
        const fetchDataWeather = async () => {
            try {
                const weather = await getWeatherSpot();
                setTempMinData(weather[0])
                setTempMaxData(weather[1])
                setWindSpeedData(weather[2])
            } catch (error) {
                setError('could not fetch weather');
            }
        };
        fetchDataWeather()
    }, []);
    return (
        <Card>
            <Card.Content>
                <Title>Météo du jour</Title>
                <Paragraph>Vitesse du vent : {windSpeedData}</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
                <Button style={styles.buttonCard}>{tempMinData}</Button>
                <Button style={styles.buttonCard}>{tempMaxData}</Button>
            </Card.Actions>
        </Card>
    )
}

const styles = StyleSheet.create({
    buttonCard: {
        paddingHorizontal: 1,
    },
})

export default CardWeather