import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { useState } from "react";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");

  const handleSignUp = () => {
    // Ajouter la logique ici
    console.log("Vous avez créé un profil avec les informations suivantes:");
    console.log("Nom complet:", lastName, firstName);
    console.log("Email:", email);
    console.log("Mot de passe:", password);
  };

  return (
    <View>
      <View style={styles.titleWrapper}>
        <Text style={styles.mainTitle}>Rejoins la commu 🤙</Text>
      </View>
      <Card style={styles.card}>
        <Card.Content>
          <TextInput
            label="Nom"
            mode="outlined"
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          />
          <TextInput
            label="Prénom"
            mode="outlined"
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
          />
          <TextInput
            label="Email"
            mode="outlined"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            label="Mot de passe"
            mode="outlined"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
        </Card.Content>
        <Card.Actions style={styles.actions}>
          <Button
            mode="outlined"
            onPress={handleSignUp}
            style={styles.actionsContent}
          >
            Créer un compte
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 20,
    padding: 5,
  },
  titleWrapper: {
    backgroundColor: "deeppink",
    alignItems: "center",
    marginBottom: 10,
  },
  mainTitle: {
    fontWeight: "bold",
    fontSize: 25,
    color: "white",
    paddingVertical: 10,
  },
  actions: {
    flexDirection: "column",
    padding: 15,
  },
  actionsContent: {
    margin: 5,
    fontSize: 15,
  },
});

export default SignUpPage;
