import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import { auth } from "../../firebase";

const Settings = () => {
  return (
    <View>
      <View style={styles.titleWrapper}>
        <Text style={styles.mainTitle}>Aloha, ici t'es chez toi 🌸 </Text>
      </View>
      <Button
        mode="contained"
        onPress={() => auth.signOut()}
        style={styles.actionsContent}
      >
        Se déconnecter
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  actionsContent: {
    margin: 5,
    fontSize: 15,
  },
});

export default Settings;
