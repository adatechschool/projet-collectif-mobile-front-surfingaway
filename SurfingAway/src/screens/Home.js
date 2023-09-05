import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import UserSimpleCard from "../components/UserSimpleCard";

const Home = () => {
    return (
        <View style={styles.container} >
            <Text>Coucou</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0
    },
})

export default Home