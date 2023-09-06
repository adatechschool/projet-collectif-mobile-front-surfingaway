import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from 'react-native-paper';

const SpotMainInfos = (props) => {
    const { where, what, technicity, wave } = props
    return (
        <View style={styles.textWrapper} >
            <Text style={styles.localisation}>{where}</Text>
            <Text style={styles.name}>{what}</Text>
            <Text style={styles.difficulty}>{technicity}</Text>
            <Text style={styles.category}>{wave}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textWrapper: {
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    localisation: {
        color: 'grey',
        fontSize: 20
    },
    name: {
        fontSize: 20
    },
    difficulty: {
        fontSize: 20
    },
    category: {
        fontSize: 20
    }
})

export default SpotMainInfos