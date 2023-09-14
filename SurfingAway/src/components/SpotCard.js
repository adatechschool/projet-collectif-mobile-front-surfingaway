import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
import SpotMainInfos from "./SpotMainInfos";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import DrawBlueStar from "../components/DrawBlueStar";

const SpotCard = (props) => {
  const { imageUrl, destination, country, difficultyLevel, id } = props;
  const navigation = useNavigation();

  const stars = [];
  for (let i = 0; i < difficultyLevel; i++) {
    stars.push(<DrawBlueStar key={i} />);
  }

  return (
    <Card style={styles.card}>
      <Card.Cover
        source={{
          uri: imageUrl,
        }}
      />
      <Card.Title
        titleVariant={"headlineMedium"}
        subtitleVariant={"bodyLarge"}
        title={destination}
        subtitle={country}
        style={styles.titleBox}
      />
      <Card.Content style={styles.difficultyWrapper}>
        <Text style={styles.text} variant="bodyLarge">
          Difficulté du spot :
        </Text>
        <View style={styles.starWrapper}>{stars}</View>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => navigation.navigate("Details", { id })}>
          En savoir plus
        </Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
  titleBox: {
    paddingTop: 10,
  },
  difficultyWrapper: {
    display: "flex",
    alignItems: "baseline",
    paddingTop: 10,
  },
  starWrapper: {
    flexDirection: "row",
  },
  text: {
    fontSize: 15,
    paddingBottom: 10,
  },
});

export default SpotCard;
