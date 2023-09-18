import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    return console.log("Vous avez cliqué sur le bouton");
  };

  const handleForgotPassword = () => {
    console.log("Vous avez oublié votre mdp");
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.mainTitle}>Connecte-toi aux vagues 🌊 </Text>
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
            Se connecter
          </Button>

          <Text style={styles.actionsContent} onPress={handleForgotPassword}>
            Mot de passe oublié ?
          </Text>

          <Text
            style={styles.actionsContent}
            onPress={() => navigation.navigate("SignUp")}
          >
            S'inscrire
          </Text>
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

export default LoginPage;
