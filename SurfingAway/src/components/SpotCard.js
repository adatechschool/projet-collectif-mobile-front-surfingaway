import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";

const SpotCard = () => {
  return (
    <Card>
      <Card.Cover
        source={{
          uri: "https://cdn.pixabay.com/photo/2020/10/02/21/42/beach-5622187_1280.jpg",
        }}
      />
      <Card.Title
        title="[Nom du spot] Pipeline"
        subtitle="[Pays] Oahu, Hawaii"
        // left={LeftContent}
      />
      <Card.Content>
        <Text variant="bodyMedium">Difficulté : Medium</Text>
      </Card.Content>
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
};

export default SpotCard;
