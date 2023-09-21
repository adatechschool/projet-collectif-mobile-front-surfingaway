import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  StyleSheet
} from "react-native";
import MainTitle from "../components/MainTitle";
import CardArticle from "../components/CardArticle";
import CardRecents from "../components/CardRecents";
import CardFavorites from "../components/CardFavorites";
import getAllSpots from "../services/getAllSpots";
import getArticles from "../services/getArticles";
import { ActivityIndicator } from "react-native-paper";

const Home = () => {
  const [error, setError] = useState([]);
  const [recentSpot, setRecentSpot] = useState([]); // État pour stocker les composants "cards"
  const [favSpot, setFavSpot] = useState([]);
  const [article, setArticle] = useState([]);

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
              spot={element}
              imageUrl={element.photos}
              place={element.address}
              name={element.spotName}
              technicity={element.diffculty}
            />
          );
        }

        for (let i = 1; i < 7; i = i + 2) {
          const element = allSpots[i];

          // Créer un composant "card" pour chaque élément et l'ajouter au tableau
          generatedFavCard.push(
            <CardFavorites
              key={i}
              spot={element}
              imageUrl={element.photos}
              place={element.address}
              name={element.spotName}
              technicity={element.diffculty}
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

  useEffect(() => {
    const fetchDataArticles = async () => {
      try {
        const arrayArticles = await getArticles();
        const generatedArticleCard = [];
        for (let i = 0; i < 3; i++) {
          const element = arrayArticles[i];
          generatedArticleCard.push(
            <CardArticle
              key={i}
              article={element}
              title={element.title}
              description={element.description}
              author={element.author}
            />
          );
        }
        setArticle(generatedArticleCard);
      } catch (error) {
        setError("could not fetch data");
      }
    };
    fetchDataArticles();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <MainTitle titleText={"Actus"} />
        {article.length > 0 ? (
          article
        ) : (
          <ActivityIndicator
            animating={true}
            size={"large"}
            color={"#C5EFF7"}
          />
        )}
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