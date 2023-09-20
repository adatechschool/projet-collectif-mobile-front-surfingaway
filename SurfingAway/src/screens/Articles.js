import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import getArticle from '../services/getArticle';

const Article = ({ route }) => {
    const { id } = route.params;
    const idTest = "6509952a4c83086727b2d2a5"
    const [contentArticle, setContentArticle] = useState(null);
    const [title, setTitle] = useState(null);
    const [author, setAuthor] = useState(null);
    const [date, setDate] = useState(null);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                console.log("id voir " + id);
                const content = await getArticle(id); //[title, author, date, content]
                console.log(content);
                setTitle(content[0])
                setAuthor(content[1])
                setDate(content[2])
                setContentArticle(content[3]);
            } catch (error) {
                setError("could not fetch spot data");
            }
        };
        fetchContent();
    }, []);

    return (
        /*     <WebView source={htmlFile} style={{ flex: 1 }} /> */
        <View style={styles.wrapper}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.author}>{author}</Text>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.content}>{contentArticle}</Text>
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
