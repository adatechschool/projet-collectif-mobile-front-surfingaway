import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const DrawBlueStar = (/* props */) => {
    /* const { iconName, iconColor, inconSize } = props */
    return (
        <View style={styles.ratingSquare}>
            <FontAwesome name="star" size={24} color="darkturquoise" />
            {/* <FontAwesome name="star-o" size={24} color="white" /> */}
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

