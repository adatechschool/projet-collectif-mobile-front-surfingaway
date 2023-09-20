import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import getArticle from "../services/getArticle"
import { useNavigation } from "@react-navigation/native";

const CardArticle = (props) => {
    const id = "65099cc04c83086727b2d2a6"
    /*     const [articlesData, setArticlesData] = useState([]) */
    const [error, setError] = useState([])
    const navigation = useNavigation();
    const { title, description, author, keywords } = props

    /* useEffect(() => {
        const fetchDataInfosArticles = async () => {
            try {
                const data = await getArticle(id);
                setArticlesData(data)
            } catch (error) {
                setError('could not fetch data articles');
            }
        };
        fetchDataInfosArticles()
    }, []); */

    return (
        <TouchableOpacity onPress={() => navigation.navigate("Post", { id })} style={styles.cardContainer}>
            <View style={styles.cardContent}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.undertitle}>{description}</Text>
                <Text style={styles.author}>{author}</Text>
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
