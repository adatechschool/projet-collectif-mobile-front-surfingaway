import React from "react";
import { StyleSheet } from "react-native";
import { Card, Button, Title, Paragraph } from 'react-native-paper';

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
                <Button style={styles.buttonCard}>6°C</Button>
                <Button style={styles.buttonCard}>19°C</Button>
            </Card.Actions>
        </Card>
    )
}

const styles = StyleSheet.create({
    buttonCard: {
        paddingHorizontal: 1,
        backgroundColor: "darkblue",
    },
})

export default CardWeather