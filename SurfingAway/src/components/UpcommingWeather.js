import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Feather } from '@expo/vector-icons';
import { TextInput } from "react-native-paper";

const UpcommingWeather = () => {
    return (
        <View style={styles.container}>
            <TextInput
                backgroundColor='lightblue'
                placeholder="Entrer une ville"
            />
            <View style={styles.details}>
                <Text>Today</Text>
                <Text>Date d'aujourd'hui</Text>
                <Feather name="sun" size={40} color="gold" />
                <Text>Précip. : 5%</Text>
                <Text>Humidité : 80%</Text>
                <Text>Vent : 21 km/h</Text>
            </View>
            <View style={styles.feels}>
                <Text>11°/23°</Text>
                <Text>Feels : 22°</Text>
            </View>
            <View style={styles.days}>
                <View style={styles.daysPartieUn}>
                    <Text>Date du jour</Text>
                    <Feather name="sun" size={20} color="gold" />
                </View>
                <View style={styles.daysPartieDeux}>
                    <Text>11°/23°</Text>
                    <Text>Feels : 24°</Text>
                </View>
            </View>
            <View style={styles.days}>
                <View style={styles.daysPartieUn}>
                    <Text>Date du jour</Text>
                    <Feather name="sun" size={20} color="gold" />
                </View>
                <View style={styles.daysPartieDeux}>
                    <Text>11°/23°</Text>
                    <Text>Feels : 24°</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    details: {
        flex: 1,
        alignItems: 'center'
    },
    feels: {
        flex: 1,
        borderWidth: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    days: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    daysPartieUn: {
        flex: 1,
        alignItems: 'center'
    },
    daysPartieDeux: {
        flex: 1,
        alignItems: 'center'
    }
})

export default UpcommingWeather