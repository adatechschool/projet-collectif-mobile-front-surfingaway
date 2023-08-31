import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

const AddSpot = () => {
    return (
        <View style={styles.container} >
            <Text>Ajoute ton super spot de surf magique</Text>
            <Text>Histoire de premettre à tout le monde de détruire les océans avec leur peau dégueulasse et leur creme solaire</Text>
            <Text>Et de faire les bombes sur insta. Alors qu'on a tous l'air cons en combi en vrai</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0
    },
})

export default AddSpot