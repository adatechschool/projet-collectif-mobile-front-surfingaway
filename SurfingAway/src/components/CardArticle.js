import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CardArticle = (props) => {
    const navigation = useNavigation();
    const { title, author, article, description } = props
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Post", { article })} style={styles.cardContainer}>
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