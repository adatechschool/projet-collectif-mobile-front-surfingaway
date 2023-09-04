import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import IconWeather from "../components/IconWeather";
import UserSimpleCard from "../components/UserSimpleCard";
import { Text, Card, Button, Avatar, Title, Paragraph } from 'react-native-paper';

const wind = '6km/h'

const CardWeather = () => {
    return (
        <Card>
            <Card.Content>
                <Title>Météo du jour</Title>
                <Paragraph>Vent : {wind}</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
                <Button>18°C</Button>
                <Button>6°C</Button>
                <Button>19°C</Button>
            </Card.Actions>
        </Card>
    )
}

export default CardWeather