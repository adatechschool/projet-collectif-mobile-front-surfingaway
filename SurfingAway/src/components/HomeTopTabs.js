import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const HomeTopTabs = () => {
    return (
        <TopTab.Navigator initialRouteName="HomeFeed">
            <TopTab.Screen name="HomeFeed" component={Home} />
            <TopTab.Screen name="FriendFeed" component={FriendsScreen} />
        </TopTab.Navigator>

    );
}

export default HomeTopTabs