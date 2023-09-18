import React from 'react';
import { WebView } from 'react-native-webview';


const Article = () => {
    const htmlFile = require('../../assets/posts/article2.html');
    return <WebView source={htmlFile} style={{ flex: 1 }} />;
};

export default Article;
