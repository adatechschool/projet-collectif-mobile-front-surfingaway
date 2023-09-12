import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import IconWeather from "../components/IconWeather";
import CardWeather from "../components/CardWeather";
import getSpotInfos from "../services/getSpotInfos";
import UserSimpleCard from "../components/UserSimpleCard";
import SpotMainInfos from "../components/SpotMainInfos";
import MainTitle from "../components/MainTitle";

const SpotPage = ({ route }) => {
  const { id } = route.params;
  const [surfBreakData, setSurfBreakData] = useState(null); // État pour stocker les données du surf break
  const [difficultyData, setdifficultyData] = useState(null);
  const [destinationData, setDestinationData] = useState(null);
  const [whereData, setwhereData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataSurfBreak = async () => {
      try {
        const fields = await getSpotInfos(id);

        // Mettre à jour l'état avec les données
        setSurfBreakData(fields["Surf Break"][0]);
        setdifficultyData(fields["Difficulty Level"]);
        setDestinationData(fields["Destination"]);
        setwhereData(fields["Destination State/Country"]);
      } catch (error) {
        setError("could not fetch spot data");
      }
    };
    fetchDataSurfBreak(); // Appel de la fonction fetchDataSurfBreak lors du montage du composant
  }, []); // Le tableau vide [] garantit que cela ne s'exécute qu'une seule fois lors du montage initial

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={require("../../assets/sri-lanka-spot.jpg")}
          style={styles.ImageStyle}
        />
        <View style={styles.contentWrapper}>
          <SpotMainInfos
            where={whereData ? whereData : "Loading..."}
            what={destinationData ? destinationData : "Loading..."}
            technicity={difficultyData ? difficultyData : "Loading..."}
            wave={surfBreakData ? surfBreakData : "Loading..."} // Affiche les données ou un message de chargement
          />
          <MainTitle titleText={"Surf infos"} />
          <View style={styles.weatherInfos}>
            <CardWeather />
          </View>
          <MainTitle titleText={"La note des pros"} />
          <View>
            <UserSimpleCard
              name={"Elsa la bellegosse du 33"}
              message={"C'est d'la bombe"}
            />
            <UserSimpleCard name={"MaMaMaMarion"} message={"Mouais"} />
            <UserSimpleCard name={"Alisha"} message={"L'eau est trop froide"} />
            <UserSimpleCard
              name={"Agathe"}
              message={"Le sable est trop sableux"}
            />
            <UserSimpleCard name={"Charlène"} message={"Ouiiiiiiiiii"} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  ImageStyle: {
    width: "100%",
    height: 250,
  },
  contentWrapper: {},
  weatherInfos: {
    alignItems: "center",
    backgroundColor: "darkblue",
    paddingVertical: 5,
  },
});

export default SpotPage;
