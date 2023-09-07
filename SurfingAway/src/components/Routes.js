import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Spots from "../screens/Spots";
import SpotPage from "../screens/SpotPage";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName={Home}>
      <Stack.Screen name="Spots" component={Spots} />
      <Stack.Screen name="Details" component={SpotPage} />
    </Stack.Navigator>
  );
};

export default Routes;
