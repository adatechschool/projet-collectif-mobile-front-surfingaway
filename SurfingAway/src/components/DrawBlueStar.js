import React from "react";
import { StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const DrawBlueStar = (/* props */) => {
    /* const [color] = props */
    return (
        <FontAwesome styler={styles.ratingSquare} name="star" size={24} color="darkturquoise" />
    )
}

const styles = StyleSheet.create({
    ratingSquare: {
        paddingHorizontal: 5,
        paddingVertical: 3,
    }
})

export default DrawBlueStar

