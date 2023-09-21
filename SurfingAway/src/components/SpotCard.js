import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import DrawBlueStar from "../components/DrawBlueStar";

const SpotCard = (props) => {
  const { spot, imageUrl, destination, country, difficultyLevel } = props;
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
        <Button onPress={() => navigation.navigate("Details", { spot })}>
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
    paddingBottom: 5,
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
