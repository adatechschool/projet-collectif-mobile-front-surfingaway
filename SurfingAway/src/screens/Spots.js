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
        const fields = await getAllSpots();
        /* console.log("fields", fields); */

        const generatedSpotCards = []; // Initialiser un tableau pour stocker les composants "cards"

        for (let i = 0; i < fields.length; i++) {
          const element = fields[i];
          /* console.log("element", element); */

          // Créer un composant "card" pour chaque élément et l'ajouter au tableau
          generatedSpotCards.push(
            <SpotCard
              key={i}
              destination={element["fields"]["Destination"]}
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

  // Aafficher le tableau "cards" stocké dans spotCards
  return (
    <View style={styles.container}>
      <ScrollView>
        {spotCards.length > 0 ? spotCards : <Text>Loading...</Text>}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default Spots;
