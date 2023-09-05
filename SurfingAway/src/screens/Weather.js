import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import CurrentWeather from "../components/CurrentWeather";
// import UpcommingWeather from "../components/UpCommingWeather";

const Weather = () => {
    return (
        <View style={styles.container} >
            <CurrentWeather />
            {/* <UpcommingWeather /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0,
        flex: 1
    },
})

export default Weather