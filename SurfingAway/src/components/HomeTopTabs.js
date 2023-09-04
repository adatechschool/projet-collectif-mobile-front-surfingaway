import React from "react";
import { StatusBar, Platform } from 'react-native';
import AddSpot from "../screens/AddSpot";
import Home from "../screens/Home";
import Weather from "../screens/Weather";
import Spots from "../screens/Spots";
import SpotPage from "../screens/SpotPage";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const heightStatus = Platform.OS === 'android' ? StatusBar.currentHeight : 24;

const HomeTopTabs = () => {
    const Tab = createMaterialTopTabNavigator();
    return (

        <Tab.Navigator
            style={{ marginTop: heightStatus }}
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
            <Tab.Screen name={'Météo'} component={Weather} />
            <Tab.Screen name={"+"} component={AddSpot} />
            <Tab.Screen name={'Lima'} component={SpotPage} />
        </Tab.Navigator>

    );
}

export default HomeTopTabs