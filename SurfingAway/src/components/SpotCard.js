import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";

const SpotCard = (props) => {
  const { imageUrl, destination, country, difficultyLevel } = props;
  console.log(imageUrl);
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
