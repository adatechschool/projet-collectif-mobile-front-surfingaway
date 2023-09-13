import React from "react";
import { Image, StyleSheet } from "react-native";

const DrawImage = (props) => {
    const { imageSource } = props

    return (
        <Image
            source={require("../../assets/sri-lanka-spot.jpg")}
            style={styles.ImageStyle}
        />
    )
}

const styles = StyleSheet.create({
    contentWrapper: {},
    weatherInfos: {
        alignItems: "center",
        backgroundColor: "darkblue",
        paddingVertical: 5,
    },
});


export default DrawImage;