import React from 'react';
import { View, StyleSheet } from 'react-native';
import HTML from 'react-native-render-html';

const ArticleRender = ({ htmlContent }) => {
    return (
        <View style={styles.container}>
            <HTML source={{ html: htmlContent }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});

export default ArticleRender;
