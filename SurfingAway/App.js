
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from 'react-native';
import AddSpot from './src/screens/AddSpot';
import Home from './src/screens/Home';
import Weather from './src/screens/Weather';
import Spots from './src/screens/Spots';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const heightStatus = Platform.OS === 'android' ? StatusBar.currentHeight : 24;

const App = () => {
  const Tab = createMaterialTopTabNavigator();
  return (

    <NavigationContainer>
      <Tab.Navigator
        style={{ marginTop: heightStatus }} //add this
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12 },
          tabBarItemStyle: { width: 100 },
          tabBarStyle: { backgroundColor: 'powderblue' },
        }}
      >
        <Tab.Screen name={'Home'} component={Home} />
        <Tab.Screen name={'Spots'} component={Spots} />
        <Tab.Screen name={'Weather'} component={Weather} />
        <Tab.Screen name={'Add'} component={AddSpot} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight || 0
  },

});

export default App
