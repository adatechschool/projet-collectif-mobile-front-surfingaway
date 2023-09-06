import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from 'react-native-paper';
import DrawBlueStar from "../components/DrawBlueStar";


const SpotMainInfos = (props) => {
    const { where, what, technicity, wave } = props

    const stars = [];
    for (let i = 0; i < technicity; i++) {
        stars.push(<DrawBlueStar key={i} style={styles.difficultyStars} />);
    }


    return (
        <View style={styles.textWrapper} >
            <Text style={styles.localisation}>{where}</Text>
            <Text style={styles.name}>{what}</Text>
            <View style={styles.difficultyWrap}>
                <Text style={styles.difficulty}>Niveau de difficulté</Text>
                <View style={styles.starWrapper}>
                    {stars}
                </View>
            </View>
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
    difficultyWrap: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    difficulty: {
        fontSize: 20,
        color: "darkblue"
    },
    difficultyStars: {
        justifyContent: 'center'
    },
    category: {
        fontSize: 20
    },
    starWrapper: {
        marginRight: 5,
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    }
})

export default SpotMainInfos