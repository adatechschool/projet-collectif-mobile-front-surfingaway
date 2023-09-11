import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
import SpotMainInfos from "./SpotMainInfos";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

const SpotCard = (props) => {
  const { imageUrl, destination, country, difficultyLevel } = props;
  const navigation = useNavigation();

  return (
    <Card style={styles.card}>
      <Card.Cover
        source={{
          uri: imageUrl,
        }}
      />
      <Card.Title title={destination} subtitle={country} />
      <Card.Content>
        <Text variant="bodyMedium">{difficultyLevel}</Text>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => navigation.navigate("Details")}>Go</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
});

export default SpotCard;
