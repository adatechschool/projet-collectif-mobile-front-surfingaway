import React from "react";
import { View, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

const IconWeather = (props) => {
    const { iconName, iconColor } = props
    return (
        <View style={styles.container}>
            <Feather name={iconName} size={70} color={iconColor} />
        </ View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    }
})

export default IconWeather