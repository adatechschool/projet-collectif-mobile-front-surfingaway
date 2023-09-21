import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Spots from "../screens/Spots";
import SpotPage from "../screens/SpotPage";
import Home from "../screens/Home";
import HomeTopTabs from "./HomeTopTabs";
import Map from "../screens/Map";
import LoginPage from "../screens/LoginPage";
import SignUpPage from "../screens/SignUpPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import Article from "../screens/Article";

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

const InsideLayout = () => {
  return (
    <InsideStack.Navigator initialRouteName={Home}>
      <InsideStack.Screen
        name="Home"
        component={HomeTopTabs}
        // options={{ headerShown: false }}
      />
      <InsideStack.Screen name="Spots" component={Spots} />
      <InsideStack.Screen name="Details" component={SpotPage} />
      <InsideStack.Screen name="Map" component={Map} />
      <InsideStack.Screen name="Post" component={Article} />
    </InsideStack.Navigator>
  );
};

const Routes = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user : " + user);
      setUser(user);
    });
  }, []);

  return (
    <Stack.Navigator initialRouteName={LoginPage}>
      {user ? (
        <Stack.Screen
          name="Welcome onboard !"
          component={InsideLayout}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen name="Login" component={LoginPage} />
      )}
    </Stack.Navigator>
  );
};

export default Routes;