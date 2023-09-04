import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import SpotPage from "./SpotPage";
import { Link } from "@react-navigation/native";

const Spots = () => {
    return (
        <View style={styles.container} >

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0
    },
})

export default Spots