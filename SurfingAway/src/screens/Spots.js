import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

const Spots = () => {
    return (
        <View style={styles.container} >
            <Text>Spot List :</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0
    },
})

export default Spots