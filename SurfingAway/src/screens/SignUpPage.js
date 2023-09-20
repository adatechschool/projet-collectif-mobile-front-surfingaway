import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { ActivityIndicator, Button, Card, TextInput } from "react-native-paper";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [firstName, setFirstName] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleSignUp = async () => {
    setLoading(true);
    try {
      if (password === confirmPassword) {
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("SIGNUPPAGE response : ", response);
        alert("Check your emails !");
      } else {
        setError("Passwords don't match");
      }
    } catch (error) {
      setError("There was a problem creating your account");
      alert("Registration failed : ", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      <View style={styles.titleWrapper}>
        <Text style={styles.mainTitle}>Rejoins la commu 🤙</Text>
      </View>
      <Card style={styles.card}>
        <Card.Content>
          {/* <TextInput
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
          /> */}
          <TextInput
            label="Email"
            mode="outlined"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            label="Entrez un mot de passe"
            mode="outlined"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
          <TextInput
            label="Confirmez le mot de passe"
            mode="outlined"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry
          />
        </Card.Content>
        <Card.Actions style={styles.actions}>
          {loading ? (
            <ActivityIndicator animating={true} color={darkblue} />
          ) : (
            <Button
              mode="outlined"
              onPress={handleSignUp}
              style={styles.actionsContent}
              disabled={!email || !password || !confirmPassword}
            >
              Créer un compte
            </Button>
          )}
        </Card.Actions>
        {error && <Text>{error}</Text>}
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
