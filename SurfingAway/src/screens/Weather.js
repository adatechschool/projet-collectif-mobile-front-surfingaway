import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

const Weather = () => {
    return (
        <View style={styles.container} >
            <Text>Coming from Agathe : weather is a too hot</Text>
            <Text>Coming from Alisssia : it's fu****g freezing out there !</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0
    },
})

export default Weather