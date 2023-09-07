import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const DrawBlueStar = () => {
    return (
        <View style={styles.ratingSquare}>
            <FontAwesome name="star" size={24} color="darkturquoise" />
        </ View>
    )
}

const styles = StyleSheet.create({
    ratingSquare: {
        paddingHorizontal: 5,
        paddingVertical: 3,
        backgroundColor: 'darkblue'
    }
})

export default DrawBlueStar

