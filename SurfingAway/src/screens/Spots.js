import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import SpotCard from "../components/SpotCard";

const Spots = () => {
  return (
    <View style={styles.container}>
      <SpotCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default Spots;
