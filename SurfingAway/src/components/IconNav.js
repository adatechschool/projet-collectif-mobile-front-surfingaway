import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

const IconNav = (/* props */) => {
    /*     const { iconName, iconColor, bodyText, bodyTextStyles } = props
        const { textTheme, container } = styles */
    return (
        <View style={container}>
            <Feather name={'plus'} size={20} color={'black'} />
        </ View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    }
})

export default IconNav