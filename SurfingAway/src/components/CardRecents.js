import React from "react";
import { Button } from "react-native-paper";
import { View, StyleSheet, Text, Image, ImageBackground } from "react-native";
import DrawLittleStar from "../components/DrawLittleStar";

const image = {
  uri: "https://www.guide-des-landes.com/_bibli/articlesPage/108/images/spots-de-surf-dans-les-landes.jpg?v=ficheArticle&width=772&height=540&pixelRatio=1.0000",
};

const CardRecents = (props) => {
  const { name, place, technicity } = props;

  const stars = [];
  for (let i = 0; i < technicity; i++) {
    stars.push(<DrawLittleStar key={i} />);
  }
  return (
    <View style={styles.boxContainer}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.infoCard}>
          <Text style={styles.textEmphase}>{name}</Text>
          <Text style={styles.textUnder}>{place}</Text>
        </View>
        <View style={styles.scoreCard}>
          <View style={styles.starWrapper}>{stars}</View>
          <Button
            buttonColor="darkblue"
            mode="contained"
            onPress={() => console.log("Pressed")}
            style={styles.buttonDetail}
          >
            Spot Details
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {},
  image: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  infoCard: {
    width: "50%",
    margin: 8,
  },
  textEmphase: {
    color: "#ffffff",
    fontSize: 20,
    textShadowColor: "deeppink",
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 1,
  },
  textUnder: {
    color: "#ededed",
    fontSize: 15,
    textShadowColor: "deeppink",
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 1,
  },
  scoreCard: {
    margin: 15,
    width: "37%",
  },
  textRating: {
    color: "#ffffff",
    fontSize: 20,
    marginBottom: 20,
  },
  buttonDetail: {
    fontSize: 20,
  },

  starWrapper: {
    marginRight: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 6,
  },
});

export default CardRecents;
