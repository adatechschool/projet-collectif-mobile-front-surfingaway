import React from "react";
import { Card, Title } from "react-native-paper";
import {
  View,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

const CardNews = (props) => {
  const { title, undertitle, link, imageUrl } = props;

  // Fonction pour ouvrir le lien dans le navigateur
  const openLinkInBrowser = () => {
    Linking.openURL(link);
  };

  return (
    <View style={styles.boxContainer}>
      <View style={styles.container}>
        <View style={styles.TitleContent}>
          <Title>{title}</Title>
          <Text>{undertitle}</Text>
          <TouchableOpacity onPress={openLinkInBrowser}>
            <Text style={styles.link}>{link}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.boxImage}>
          <Image
            source={require("../images/palmier.jpg")}
            style={styles.image}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    backgroundColor: "white",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 20,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    height: 200,
  },
  TitleContent: {
    margin: 8,
    width: "70%",
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
  boxImage: {},
  image: {
    marginTop: 25,
    width: "100%",
    height: "50%",
    aspectRatio: 1,
  },
});

export default CardNews;
