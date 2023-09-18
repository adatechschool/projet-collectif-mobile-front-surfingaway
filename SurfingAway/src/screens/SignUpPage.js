import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { useState } from "react";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    return console.log("Vous avez créé un profil");
  };

  return (
    <View>
      <View style={styles.titleWrapper}>
        <Text style={styles.mainTitle}>Rejoins la commu 🤙 </Text>
      </View>
      <Card style={styles.card}>
        <Card.Content>
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
            onPress={handleLogin}
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
});

export default SignUpPage;
