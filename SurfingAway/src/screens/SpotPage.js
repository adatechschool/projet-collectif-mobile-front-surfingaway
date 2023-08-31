import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

const SpotPage = () => {
    return (
        <View style={styles.container} >
            <Text>Check that spot !</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0
    },
})

export default SpotPage