import React from "react";
import { View, StyleSheet } from "react-native";

import { Text } from 'react-native-paper';

const MainTitle = (props) => {
    const { titleText } = props
    return (
        <View style={styles.titleWrapper} >
            <Text style={styles.textEmphase} >{titleText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleWrapper: {
        backgroundColor: 'deeppink',
        alignItems: 'center',
    },
    textEmphase: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'darkblue',
        paddingVertical: 5,
    },
})

export default MainTitle