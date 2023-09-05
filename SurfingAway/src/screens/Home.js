import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Linking, Image } from "react-native";
import MainTitle from "../components/MainTitle";
import CardNews from "../components/CardNews";
import palmierImage from "../images/palmier.jpg"

const Home = () => {
    const [apiLink, setApiLink] = useState(""); 
    const [apiImageUrl, setApiImageUrl] = useState(""); 

    useEffect(() => {
        // API ici
      
        
        // Exemples statiques
        setApiLink("https://www.surf-report.com/news/surf/securite-surf-mns-cross-706229583.html");
        setApiImageUrl(palmierImage);
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <MainTitle titleText={"News"} />
                    <CardNews
                        title={"LES 10 REGLES D'OR D'UNE PRATIQUE SEREINE DU SURF"}
                        undertitle={"Amoindrir le nombre d'accidents en tout genre"}
                        link={apiLink} 
                        imageUrl={apiImageUrl}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
})

export default Home;
