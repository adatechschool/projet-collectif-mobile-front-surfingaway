import React, { useState, useEffect } from "react";
import SpotCard from "../components/SpotCard";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Linking,
  Image,
} from "react-native";
import MainTitle from "../components/MainTitle";
import CardArticle from "../components/CardArticle";
import CardNews from "../components/CardNews";
import CardRecents from "../components/CardRecents";
import CardFavorites from "../components/CardFavorites";
import getAllSpots from "../services/getAllSpots";
import { ActivityIndicator } from "react-native-paper";

const Home = () => {
  const [error, setError] = useState([]);
  const [recentSpot, setRecentSpot] = useState([]); // État pour stocker les composants "cards"
  const [favSpot, setfavSpot] = useState([]); // État pour stocker les composants "cards"

  const [spots, setSpots] = useState([]); // État pour stocker les données des spots

  useEffect(() => {
    const fetchDataSurfSpots = async () => {
      try {
        const allSpots = await getAllSpots();

        const generatedFavCard = []; // Initialiser un tableau pour stocker les composants "cards"

        for (let i = 0; i < allSpots.length; i++) {
          const element = allSpots[i];

          // Créer un composant "card" pour chaque élément et l'ajouter au tableau
          generatedFavCard.push(
            <CardRecents
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
        setRecentSpot(generatedFavCard);
      } catch (error) {
        setError("could not fetch data");
      }
    };
    fetchDataSurfSpots(); // Appel de la fonction lors du montage du composant
  }, []);

  const articles = [
    {
      title: "Titre de l'article 1",
      undertitle: "Sous-titre de l'article 1",
      // Autres métadonnées de l'article 1
    },
    {
      title: "Titre de l'article 2",
      undertitle: "Sous-titre de l'article 2",
      // Autres métadonnées de l'article 2
    },
    // ... Ajoutez autant d'articles que nécessaire
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <MainTitle titleText={"Actus"} />
        {articles.map((article, index) => (
          <CardArticle
            key={index} // Utilisez une clé unique pour chaque carte
            title={article.title}
            undertitle={article.undertitle}
            onPress={() => {
              // Gérez le clic sur l'article ici
              // Vous pouvez utiliser l'index ou un identifiant unique pour identifier l'article
              // et afficher son contenu complet
              // Par exemple, vous pouvez stocker l'article sélectionné dans l'état et afficher son contenu dans une modale
            }}
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
          {/* <CardFavorites
            name={
              getSpotByIndex(spots, 9).Destination || (
                <ActivityIndicator
                  animating={true}
                  size={"small"}
                  color={"#C5EFF7"}
                />
              )
            }
            place={
              getSpotByIndex(spots, 9)["Destination State/Country"] || (
                <ActivityIndicator
                  animating={true}
                  size={"small"}
                  color={"#C5EFF7"}
                />
              )
            }
          />
          <CardFavorites
            name={
              getSpotByIndex(spots, 0).Destination || (
                <ActivityIndicator
                  animating={true}
                  size={"small"}
                  color={"#C5EFF7"}
                />
              )
            }
            place={
              getSpotByIndex(spots, 0)["Destination State/Country"] || (
                <ActivityIndicator
                  animating={true}
                  size={"small"}
                  color={"#C5EFF7"}
                />
              )
            }
          />
          <CardFavorites
            name={
              getSpotByIndex(spots, 7).Destination || (
                <ActivityIndicator
                  animating={true}
                  size={"small"}
                  color={"#C5EFF7"}
                />
              )
            }
            place={
              getSpotByIndex(spots, 7)["Destination State/Country"] || (
                <ActivityIndicator
                  animating={true}
                  size={"small"}
                  color={"#C5EFF7"}
                />
              )
            }
          /> */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Home;
