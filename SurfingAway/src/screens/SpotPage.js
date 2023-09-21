import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { Card } from 'react-native-paper';
import CardWeather from "../components/CardWeather";
import UserSimpleCard from "../components/UserSimpleCard";
import SpotMainInfos from "../components/SpotMainInfos";
import MainTitle from "../components/MainTitle";

const SpotPage = ({ route }) => {
  const { spot } = route.params;
  console.log(spot.
    seasonBegins);
  console.log(spot.city);

  return (
    <View>
      <ScrollView>
        <Image
          source={{
            uri: spot.photos,
          }}
          style={styles.ImageStyle}
        />
        <View>
          <SpotMainInfos
            where={spot.address}
            what={spot.name}
            technicity={spot.diffculty}
            seasonStart={spot.seasonBegins}
            seasonEnd={spot.seasonEnds}
          />
          <MainTitle titleText={"Surf infos en temps réel"} />
          <View style={styles.weatherInfos}>
            <Card.Content>
              <CardWeather
                lat={spot.latitude}
                lon={spot.longitude}
              />
            </Card.Content>
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