import React from "react";
import AddSpot from "../screens/AddSpot";
import Home from "../screens/Home";
import Spots from "../screens/Spots";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

/* const heightStatus = Platform.OS === 'android' ? StatusBar.currentHeight : 24; */

const HomeTopTabs = () => {
    const Tab = createMaterialTopTabNavigator();
    return (

        <Tab.Navigator
            /* style={{ marginTop: heightStatus }} */
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
            {/*             <Tab.Screen name={'Météo'} component={Weather} /> */}
            <Tab.Screen name={"+"} component={AddSpot} />
        </Tab.Navigator>

    );
}

export default HomeTopTabs