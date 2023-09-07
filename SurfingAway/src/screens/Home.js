import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Linking, Image } from "react-native";
import MainTitle from "../components/MainTitle";
import CardNews from "../components/CardNews";
import CardRecents from "../components/CardRecents";
import CardFavorites from "../components/CardFavorites";
import getSpotInfos from "../services/getSpotInfos";
import getAllSpots from "../services/getAllSpots";


const Home = () => {
    const [apiLink, setApiLink] = useState(""); 
    const [apiImageUrl, setApiImageUrl] = useState(""); 
    const [surfBreakData, setSurfBreakData] = useState(null); // État pour stocker les données du surf break
    const [difficultyData, setdifficultyData] = useState(null)
    const [destinationData, setDestinationData] = useState(null)
    const [whereData, setwhereData] = useState(null)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        const fetchDataSurfBreak = async () => {
            try {
                const fields = await getSpotInfos();
                console.log(fields);
                // Mettre à jour l'état avec les données
                setSurfBreakData(fields["Surf Break"][0]);
                setdifficultyData(fields["Difficulty Level"])
                setDestinationData(fields["Destination"])
                setwhereData(fields["Destination State/Country"])
            } catch (error) {
                setError('could not fetch weather');
            }
        };
        setApiLink("https://www.surf-report.com/news/surf/securite-surf-mns-cross-706229583.html");
        fetchDataSurfBreak(); // Appel de la fonction fetchDataSurfBreak lors du montage du composant
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
                <View>
                <CardNews
                        title={"LES 10 REGLES D'OR D'UNE PRATIQUE SEREINE DU SURF"}
                        undertitle={"Amoindrir le nombre d'accidents en tout genre"}
                        link={apiLink} 
                        imageUrl={apiImageUrl}
                    />
                </View>
                <View style={styles.recently} >
                    <MainTitle titleText={"Recently consulted"} />
                    <CardRecents
                        name={destinationData ? destinationData : "Loading..."}
                        place={whereData ? whereData : "Loading..."}
                        rating={"⭐⭐⭐⭐⭐"}
                     />
                    <CardRecents
                        name={destinationData ? destinationData : "Loading..."}
                        place={whereData ? whereData : "Loading..."}
                        rating={"⭐⭐⭐⭐⭐"}
                     />
                    <CardRecents
                        name={destinationData ? destinationData : "Loading..."}
                        place={whereData ? whereData : "Loading..."}
                        rating={"⭐⭐"}
                     />
                    <CardRecents
                        name={destinationData ? destinationData : "Loading..."}
                        place={whereData ? whereData : "Loading..."}
                        rating={"⭐⭐⭐⭐"}
                     />
                </View>
                <View style={styles.favorites}>
                    <MainTitle titleText={"My Favorites ! 💙"} />
                    <CardFavorites
                        name={destinationData ? destinationData : "Loading..."}
                        place={whereData ? whereData : "Loading..."}
                     />
                     <CardFavorites
                        name={destinationData ? destinationData : "Loading..."}
                        place={whereData ? whereData : "Loading..."}
                     />
                     <CardFavorites
                        name={destinationData ? destinationData : "Loading..."}
                        place={whereData ? whereData : "Loading..."}
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
