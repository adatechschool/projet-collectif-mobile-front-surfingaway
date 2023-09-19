import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import MainTitle from "../components/MainTitle";
import CardArticle from "../components/CardArticle";
import CardRecents from "../components/CardRecents";
import CardFavorites from "../components/CardFavorites";
import getAllSpots from "../services/getAllSpots";
import { ActivityIndicator } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [error, setError] = useState([]);
  const [recentSpot, setRecentSpot] = useState([]); // État pour stocker les composants "cards"
  const [favSpot, setFavSpot] = useState([]); // État pour stocker les composants "cards"

  useEffect(() => {
    const fetchDataSurfSpots = async () => {
      try {
        const allSpots = await getAllSpots();

        const generatedRecentCard = []; // Initialiser un tableau pour stocker les composants "cards"
        const generatedFavCard = []; // Initialiser un tableau pour stocker les composants "cards"

        for (let i = 0; i < 3; i++) {
          const element = allSpots[i];

          // Créer un composant "card" pour chaque élément et l'ajouter au tableau
          generatedRecentCard.push(
            <CardRecents
              key={i}
              id={element.id}
              imageUrl={element.fields.Photos[0].thumbnails.large.url}
              place={element.fields.City}
              name={element.fields.Address}
              technicity={element["fields"]["Difficulty Level"]}
            />
          );
        }

        for (let i = 1; i < 7; i = i + 2) {
          const element = allSpots[i];

          // Créer un composant "card" pour chaque élément et l'ajouter au tableau
          generatedFavCard.push(
            <CardFavorites
              key={i}
              id={element.id}
              imageUrl={element.fields.Photos[0].thumbnails.large.url}
              place={element.fields.Destination}
              name={element["fields"]["Destination State/Country"]}
              technicity={element["fields"]["Difficulty Level"]}
            />
          );
        }
        // Mettre à jour l'état spotCards avec les composants "cards"
        setRecentSpot(generatedRecentCard);
        setFavSpot(generatedFavCard);

      } catch (error) {
        setError("could not fetch data");
      }
    };
    fetchDataSurfSpots(); // Appel de la fonction lors du montage du composant
  }, []);
  const navigation = useNavigation();
  const articles = [
    {
      title: "Titre de l'article 1",
      undertitle: "Sous-titre de l'article 1",
      url: '../../assets/posts/article2.html'
    },
    {
      title: "Titre de l'article 2",
      undertitle: "Sous-titre de l'article 2",
      url: '../../assets/posts/article1.html'
    },
    // ... Ajoutez autant d'articles que nécessaire
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <MainTitle titleText={"Actus"} />
        {articles.map((article, index) => (
          <CardArticle
            onPress={() => navigation.navigate("Post")}
          />
        ))}
        <View style={styles.recently}>
          <MainTitle titleText={"Recently consulted"} />
          {recentSpot.length > 0 ? (
            recentSpot
          ) : (
            <ActivityIndicator
              animating={true}
              size={"large"}
              color={"#C5EFF7"}
            />
          )}

        </View>
        <View style={styles.favorites}>
          <MainTitle titleText={"My Favorites ! 💙"} />
          {favSpot.length > 0 ? (
            favSpot
          ) : (
            <ActivityIndicator
              animating={true}
              size={"large"}
              color={"#C5EFF7"}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Home;