import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Linking,
  Image,
} from "react-native";
import MainTitle from "../components/MainTitle";
import CardNews from "../components/CardNews";
import CardRecents from "../components/CardRecents";
import CardFavorites from "../components/CardFavorites";
import getAllSpots from "../services/getAllSpots";
import { ActivityIndicator } from "react-native-paper";

const Home = () => {
  const [error, setError] = useState([]);
  const [apiLink, setApiLink] = useState("");
  const [spotIndex, setSpotIndex] = useState(0);
  const [apiImageUrl, setApiImageUrl] = useState("");
  const [spots, setSpots] = useState([]); // État pour stocker les données des spots

  useEffect(() => {
    const fetchDataSurfSpots = async () => {
      try {
        const spotsData = await getAllSpots(); // Récupérez tous les spots
        setSpots(spotsData); // Mettez à jour l'état avec les données des spots
      } catch (error) {
        setError("could not fetch data");
      }
    };

    setApiLink(
      "https://www.surf-report.com/news/surf/securite-surf-mns-cross-706229583.html"
    );
    fetchDataSurfSpots(); // Appel de la fonction lors du montage du composant
  }, [spotIndex]);

  const getSpotByIndex = (spotsData, index) => {
    return spotsData[index]?.fields || {};
  };

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
        <View style={styles.recently}>
          <MainTitle titleText={"Recently consulted"} />
          <CardRecents
            name={
              getSpotByIndex(spots, 2).Destination || (
                <ActivityIndicator
                  animating={true}
                  size={"small"}
                  color={"#C5EFF7"}
                />
              )
            }
            place={
              getSpotByIndex(spots, 2)["Destination State/Country"] || (
                <ActivityIndicator
                  animating={true}
                  size={"small"}
                  color={"#C5EFF7"}
                />
              )
            }
            technicity={
              getSpotByIndex(spots, 2)["Difficulty Level"] || (
                <ActivityIndicator
                  animating={true}
                  size={"small"}
                  color={"#C5EFF7"}
                />
              )
            }
          />
          <CardRecents
            name={
              getSpotByIndex(spots, 1).Destination || (
                <ActivityIndicator
                  animating={true}
                  size={"small"}
                  color={"#C5EFF7"}
                />
              )
            }
            place={
              getSpotByIndex(spots, 1)["Destination State/Country"] || (
                <ActivityIndicator
                  animating={true}
                  size={"small"}
                  color={"#C5EFF7"}
                />
              )
            }
            technicity={
              getSpotByIndex(spots, 1)["Difficulty Level"] || (
                <ActivityIndicator
                  animating={true}
                  size={"small"}
                  color={"#C5EFF7"}
                />
              )
            }
          />
          <CardRecents
            name={
              getSpotByIndex(spots, 4).Destination || (
                <ActivityIndicator
                  animating={true}
                  size={"small"}
                  color={"#C5EFF7"}
                />
              )
            }
            place={
              getSpotByIndex(spots, 4)["Destination State/Country"] || (
                <ActivityIndicator
                  animating={true}
                  size={"small"}
                  color={"#C5EFF7"}
                />
              )
            }
            technicity={
              getSpotByIndex(spots, 4)["Difficulty Level"] || (
                <ActivityIndicator
                  animating={true}
                  size={"small"}
                  color={"#C5EFF7"}
                />
              )
            }
          />
          <CardRecents
            name={
              getSpotByIndex(spots, 8).Destination || (
                <ActivityIndicator
                  animating={true}
                  size={"small"}
                  color={"#C5EFF7"}
                />
              )
            }
            place={
              getSpotByIndex(spots, 8)["Destination State/Country"] || (
                <ActivityIndicator
                  animating={true}
                  size={"small"}
                  color={"#C5EFF7"}
                />
              )
            }
            technicity={
              getSpotByIndex(spots, 8)["Difficulty Level"] || (
                <ActivityIndicator
                  animating={true}
                  size={"small"}
                  color={"#C5EFF7"}
                />
              )
            }
          />
        </View>
        <View style={styles.favorites}>
          <MainTitle titleText={"My Favorites ! 💙"} />
          <CardFavorites
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
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Home;
