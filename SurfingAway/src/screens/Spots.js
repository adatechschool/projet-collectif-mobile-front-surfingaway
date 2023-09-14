import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import SpotCard from "../components/SpotCard";
import getAllSpots from "../services/getAllSpots";
import { ActivityIndicator } from "react-native-paper";

const Spots = () => {
  const [spotCards, setSpotCards] = useState([]); // État pour stocker les composants "cards"
  const [error, setError] = useState([]); // État pour stocker les composants "cards"

  useEffect(() => {
    const fetchDataSurfSpots = async () => {
      try {
        const allSpots = await getAllSpots();

        const generatedSpotCards = []; // Initialiser un tableau pour stocker les composants "cards"

        for (let i = 0; i < allSpots.length; i++) {
          const element = allSpots[i];

          // Créer un composant "card" pour chaque élément et l'ajouter au tableau
          generatedSpotCards.push(
            <SpotCard
              key={i}
              id={element.id}
              imageUrl={element.fields.Photos[0].thumbnails.large.url}
              destination={element.fields.Destination}
              country={element["fields"]["Destination State/Country"]}
              difficultyLevel={element["fields"]["Difficulty Level"]}
            />
          );
        }

        // Mettre à jour l'état spotCards avec les composants "cards"
        setSpotCards(generatedSpotCards);
      } catch (error) {
        setError("could not fetch data");
      }
    };

    fetchDataSurfSpots(); // Appel de la fonction lors du montage du composant
  }, []);

  // Afficher le tableau "cards" stocké dans spotCards
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.titleWrapper}>
          <Text style={styles.mainTitle}>La liste des meilleurs spots</Text>
        </View>
        {spotCards.length > 0 ? (
          spotCards
        ) : (
          <ActivityIndicator
            animating={true}
            size={"large"}
            color={"#C5EFF7"}
          />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  titleWrapper: {
    backgroundColor: "deeppink",
    alignItems: "center",
    marginBottom: 10,
  },
  mainTitle: {
    fontWeight: "bold",
    fontSize: 25,
    color: "white",
    paddingVertical: 10,
  },
});

export default Spots;
