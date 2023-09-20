import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import getArticle from '../services/getArticle';


const Article = () => {
    const idTest = "6509952a4c83086727b2d2a5"
    const [contentArticle, setContentArticle] = useState(null);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                console.log("id voir " + idTest);
                const content = await getArticle(idTest);
                console.log(content);
                // Mettre à jour l'état avec les données
                setContentArticle(content);
            } catch (error) {
                setError("could not fetch spot data");
            }
        };
        fetchContent();
    }, []);

    return (
        /*     <WebView source={htmlFile} style={{ flex: 1 }} /> */
        <View>
            <Text>{contentArticle}</Text>
        </View>
    );
};

export default Article;
