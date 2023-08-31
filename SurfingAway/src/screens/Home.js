import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

const Home = () => {
    return (
        <View style={styles.container} >
            <Text>Actus</Text>
            <Text>Récents</Text>
            <Text>Favoris</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0
    },
})

export default Home