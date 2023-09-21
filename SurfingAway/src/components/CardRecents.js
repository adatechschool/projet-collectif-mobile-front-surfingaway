import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground } from "react-native";
import DrawBlueStar from "./DrawBlueStar";
import { useNavigation } from "@react-navigation/native";

const CardRecents = (props) => {
  const { name, place, technicity, imageUrl, spot } = props;

  const navigation = useNavigation();

  const stars = [];
  for (let i = 0; i < technicity; i++) {
    stars.push(<DrawBlueStar key={i} />);
  }
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Details", { spot })}>
      <View style={styles.boxContainer}>
        <ImageBackground source={{ uri: imageUrl }} resizeMode="cover" style={styles.image}>
          <View style={styles.infoCard}>
            <Text style={styles.textEmphase}>{name}</Text>
            <Text style={styles.textUnder}>{place}</Text>
          </View>
          <View style={styles.scoreCard}>
            <View style={styles.starWrapper}>{stars}</View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
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
