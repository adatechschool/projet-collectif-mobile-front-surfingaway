import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import getArticlesInfos from "../services/getArtilclesInfos";
import { useNavigation } from "@react-navigation/native";

const CardArticle = () => {
    const id = "65099cc04c83086727b2d2a6"
    const [articlesData, setArticlesData] = useState([])
    const [error, setError] = useState([])
    const navigation = useNavigation();

    useEffect(() => {
        const fetchDataInfosArticles = async () => {
            try {
                const data = await getArticlesInfos(id);
                setArticlesData(data)
            } catch (error) {
                setError('could not fetch data articles');
            }
        };
        fetchDataInfosArticles()
    }, []);

    return (
        <TouchableOpacity onPress={() => navigation.navigate("Post")} style={styles.cardContainer}>
            <View style={styles.cardContent}>
                <Text style={styles.title}>{articlesData.title}</Text>
                <Text style={styles.undertitle}>{articlesData.description}</Text>
                <Text style={styles.author}>{articlesData.author}</Text>

            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#fff",
        borderRadius: 8,
        elevation: 5,
        shadowColor: "#333",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 10,
        marginVertical: 6,
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    undertitle: {
        fontSize: 16,
        color: "#777",
        marginTop: 5,
    },
    author: {
        textAlign: "right"
    }
});

export default CardArticle;
