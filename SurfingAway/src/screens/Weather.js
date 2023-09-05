import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import CurrentWeather from "../components/CurrentWeather";

const Weather = () => {
    return (
        <View style={styles.container} >
            <CurrentWeather />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0
    },
})

export default Weather