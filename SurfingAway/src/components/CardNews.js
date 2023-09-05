import React from "react";
import { Card, Title } from 'react-native-paper';
import { View, Linking, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

const CardNews = (props) => {
    const { title, undertitle, link, imageUrl } = props;

    // Fonction pour ouvrir le lien dans le navigateur
    const openLinkInBrowser = () => {
        Linking.openURL(link);
    };

    return (
        <View style={styles.container}>
            <View style={styles.TitleContent}>
                <Title>{title}</Title>
                <Text>{undertitle}</Text>
                <TouchableOpacity onPress={openLinkInBrowser}>
                    <Text style={styles.link}>{link}</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Image source={{ uri: imageUrl }} style={styles.image} />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'row',
    },
    TitleContent: {
        margin: 8
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
    image: {
        
    },
});

export default CardNews;
