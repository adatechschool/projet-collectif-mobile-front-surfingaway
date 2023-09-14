import React from "react";
import AddSpot from "../screens/AddSpot";
import Home from "../screens/Home";
import Spots from "../screens/Spots";
import Map from "../screens/Map";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const HomeTopTabs = () => {
  const Tab = createMaterialTopTabNavigator();
  return (

    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'deeppink',
        tabBarInactiveTintColor: 'aliceblue',
        tabBarStyle: {
          backgroundColor: 'darkblue',
        },
        headerStyle: {
          backgroundColor: 'darkblue '
        },
      }}
    >
      <Tab.Screen name={'Actu'} component={Home} />
      <Tab.Screen name={'Spots'} component={Spots} />
      <Tab.Screen name={'Carte'} component={Map} />
      <Tab.Screen name={"+"} component={AddSpot} />
    </Tab.Navigator>

  );
}

export default HomeTopTabs