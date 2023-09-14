import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import SpotCard from "../components/SpotCard";
import getAllSpots from "../services/getAllSpots";

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
        {spotCards.length > 0 ? spotCards : <Text>Loading...</Text>}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Spots;
