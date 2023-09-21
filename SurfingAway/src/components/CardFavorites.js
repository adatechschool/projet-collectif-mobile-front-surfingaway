import React from "react";
import DrawHeart from "./DrawHeart";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const CardFavorites = (props) => {
  const { name, place, imageUrl, id } = props;
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Details", { id })} /* style={styles.cardContainer} */>
      <View style={styles.boxContainer}>
        <Image
          source={{
            uri: imageUrl,
          }}
          style={styles.image}
        />
        <View style={styles.infoCard}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.place}>{place}</Text>
        </View>
        <View>
          <DrawHeart />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 5,
    shadowColor: "#333",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 10,
    marginVertical: 6,
  },
  boxContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 12,
  },
  image: {
    width: 100,
    height: 100,
  },
  imageHeart: {
    width: 32,
    height: 30,
    position: "absolute",
    bottom: 0,
    marginBottom: 8,
  },
  infoCard: {
    width: 240,
    marginTop: 9,
    marginLeft: 10,
  },
  name: {
    fontSize: 20,
  },
  place: {
    fontSize: 18,
    color: "#666666",
  },
});

export default CardFavorites;
