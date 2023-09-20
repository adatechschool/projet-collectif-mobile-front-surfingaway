import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { Card, Title, ActivityIndicator } from 'react-native-paper';
import CardWeather from "../components/CardWeather";
import getSpotInfos from "../services/getSpotInfos";
import UserSimpleCard from "../components/UserSimpleCard";
import SpotMainInfos from "../components/SpotMainInfos";
import MainTitle from "../components/MainTitle";


const SpotPage = ({ route }) => {
  const { article } = route.params;
  const [surfBreakData, setSurfBreakData] = useState(null); // État pour stocker les données du surf break
  const [difficultyData, setdifficultyData] = useState(null);
  const [destinationData, setDestinationData] = useState(null);
  const [whereData, setwhereData] = useState(null);
  const [cardWeather, setCardWeather] = useState(null); // État pour stocker les composants "cards"
  const [imageApi, setImageApi] = useState(null)
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
        setCardWeather(
          <CardWeather
            lat={fields.Latitude}
            lon={fields.Longitude}
          />
        )
        setImageApi(<Image
          source={{
            uri: fields.Photos[0].thumbnails.large.url,
          }}
          style={styles.ImageStyle}
        />);
      } catch (error) {
        setError("could not fetch spot data");
      }
    };
    fetchDataSurfBreak(); // Appel de la fonction fetchDataSurfBreak lors du montage du composant
  }, []); // Le tableau vide [] garantit que cela ne s'exécute qu'une seule fois lors du montage initial

  return (
    <View>
      <ScrollView>
        {imageApi ? imageApi :
          <ActivityIndicator
            animating={true}
            size={"large"}
            color='#C5EFF7'
          />
        }
        <View>
          <SpotMainInfos
            where={whereData}
            what={destinationData}
            technicity={difficultyData}
            wave={surfBreakData} // Affiche les données ou un message de chargement
          />
          <MainTitle titleText={"Surf infos en temps réel"} />
          <View style={styles.weatherInfos}>
            {cardWeather ? cardWeather : <Card>
              <Card.Content>
                <Title>Météo du jour</Title>
                <ActivityIndicator
                  animating={true}
                  size={"large"}
                  color='#C5EFF7'
                />
              </Card.Content>
            </Card>}
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
  ImageStyle: {
    width: "100%",
    height: 250,
  },
  weatherInfos: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
});

export default SpotPage;
