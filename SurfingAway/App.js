import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { registerTranslation, fr } from "react-native-paper-dates";
import Routes from "./src/components/Routes";

registerTranslation("fr", fr);
// Initialize Firebase
// initializeFirebase();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
