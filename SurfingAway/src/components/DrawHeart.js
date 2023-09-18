import React from "react";
import { View, StyleSheet } from "react-native";
import { EvilIcons } from '@expo/vector-icons';

const DrawHeart = (/* props */) => {
    /* const [color] = props */
    return (
        <View style={styles.heartShape}>
            <EvilIcons name="heart" size={25} color="darkturquoise" />
        </ View>
    )
}

const styles = StyleSheet.create({
    heartShape: {
        paddingHorizontal: 5,
        paddingVertical: 3,
    }
})

export default DrawHeart;

