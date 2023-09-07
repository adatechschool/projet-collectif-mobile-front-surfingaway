import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Spots from "../screens/Spots";
import SpotPage from "../screens/SpotPage";
import Home from "../screens/Home";
import HomeTopTabs from "./HomeTopTabs";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName={Home}>
      <Stack.Screen name="HomeNav" component={HomeTopTabs} />
      <Stack.Screen name="Spots" component={Spots} />
      <Stack.Screen name="Details" component={SpotPage} />
    </Stack.Navigator>
  );
};

export default Routes;
