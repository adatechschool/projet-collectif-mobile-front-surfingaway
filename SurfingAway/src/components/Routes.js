import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Spots from "../screens/Spots";
import SpotPage from "../screens/SpotPage";
import Home from "../screens/Home";
import HomeTopTabs from "./HomeTopTabs";
import Map from "../screens/Map";
import Article from "../screens/Article";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName={Home}>
      <Stack.Screen name="Home" component={HomeTopTabs} />
      <Stack.Screen name="Spots" component={Spots} />
      <Stack.Screen name="Details" component={SpotPage} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="Post" component={Article} />
    </Stack.Navigator>
  );
};

export default Routes;