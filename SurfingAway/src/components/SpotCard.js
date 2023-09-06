import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";

const SpotCard = (props) => {
  const { destination, country, difficultyLevel } = props;
  return (
    <Card style={styles.card}>
      <Card.Cover
        source={{
          uri: "https://cdn.pixabay.com/photo/2020/10/02/21/42/beach-5622187_1280.jpg",
        }}
      />
      <Card.Title title={destination} subtitle={country} />
      <Card.Content>
        <Text variant="bodyMedium">{difficultyLevel}</Text>
      </Card.Content>
      <Card.Actions>
        <Button>Ok</Button>
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
