import React from "react";
import { View, StyleSheet } from "react-native";
// import CurrentWeather from "../components/CurrentWeather";
import UpcommingWeather from "../components/UpcommingWeather";

const Weather = () => {
    return (
        <View style={styles.container} >
            {/* <CurrentWeather /> */}
            <UpcommingWeather />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})

export default Weather