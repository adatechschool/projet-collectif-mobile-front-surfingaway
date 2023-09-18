import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Spots from "../screens/Spots";
import SpotPage from "../screens/SpotPage";
import Home from "../screens/Home";
import HomeTopTabs from "./HomeTopTabs";
import Map from "../screens/Map";
import LoginPage from "../screens/LoginPage";
import SignUpPage from "../screens/SignUpPage";

const Stack = createNativeStackNavigator();

const Routes = () => {
  //  // Définition de l'état d'authentification initial à false
  //  const [isSignedIn, setIsSignedIn] = useState(false);

  //  useEffect(() => {
  //    // Ici, vous pouvez placer la logique de vérification de l'authentification
  //    // Par exemple, vous pouvez vérifier si l'utilisateur est connecté
  //    // en utilisant une méthode d'authentification (Firebase, API, etc.).
  //    // Si l'utilisateur est connecté, définissez isSignedIn à true, sinon à false.

  //    // Exemple simplifié :
  //    const userIsAuthenticated =
  //    /* logique d'authentification */;

  //    setIsSignedIn(userIsAuthenticated);
  //  }, []); // Le tableau vide [] signifie que cette fonction useEffect s'exécute une seule fois après le rendu initial.

  return (
    <Stack.Navigator initialRouteName={Home}>
      <Stack.Screen name="Home" component={HomeTopTabs} />
      <Stack.Screen name="Spots" component={Spots} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="SignUp" component={SignUpPage} />
      <Stack.Screen name="Details" component={SpotPage} />
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  );
};

export default Routes;
