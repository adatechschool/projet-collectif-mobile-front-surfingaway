import React from "react";
import { View, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

const IconNav = () => {
    return (
        <View style={styles.container}>
            <Feather name={'plus'} size={20} color={'black'} />
        </ View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    }
})

export default IconNav