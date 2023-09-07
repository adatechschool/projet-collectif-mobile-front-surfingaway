import React from "react";
import { View, StyleSheet } from "react-native";
/* import { FontAwesome } from '@expo/vector-icons'; */
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DrawLittleStar = (/* props */) => {
    /* const [color] = props */
    return (
        <View style={styles.ratingSquare}>
            {/* <FontAwesome name="star" size={24} color="darkturquoise" /> */}
            <MaterialCommunityIcons name="surfing" size={22} color="white" />
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

export default DrawLittleStar;

