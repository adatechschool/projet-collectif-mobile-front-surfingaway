import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Article = ({ route }) => {
    const { article } = route.params;

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>{article.title}</Text>
            <Text style={styles.author}>{article.author}</Text>
            <Text style={styles.date}>{article.date}</Text>
            <Text style={styles.content}>{article.content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginHorizontal: 10,
        marginVertical: 20
    },
    title: {
        fontSize: 20
    },
    author: {
        paddingVertical: 5,
        textAlign: 'right',
        fontSize: 15
    },
    date: {
        textAlign: 'right'
    },
    content: {
        paddingVertical: 20,
    },
});

export default Article;
