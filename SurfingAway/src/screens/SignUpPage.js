import React from "react";
import { Text, View, StyleSheet } from "react-native";

const SignUpPage = () => {
  return (
    <View>
      <View style={styles.titleWrapper}>
        <Text style={styles.mainTitle}>Rejoins la commu 🤙 </Text>
      </View>
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
