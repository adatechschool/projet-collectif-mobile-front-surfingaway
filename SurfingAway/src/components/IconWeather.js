import React from "react";
import { View, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

const IconWeather = (/* props */) => {
    /*     const { iconName, iconColor, bodyText, bodyTextStyles } = props
        const { textTheme, container } = styles */
    return (
        <View style={styles.container}>
            <Feather name={'sun'} size={150} color={'yellow'} />
        </ View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    }
})

export default IconWeather