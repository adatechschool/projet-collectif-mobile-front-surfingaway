import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddSpot from './src/screens/AddSpot';
import Home from './src/screens/Home';
import SpotPage from './src/screens/SpotPage';
import Weather from './src/screens/Weather';
import Spots from './src/screens/Spots';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <NavigationContainer style={styles.top} >
      <Tab.Navigator>
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
  },
  top: {
    marginTop: StatusBar.currentHeight || 0

  }
});

export default App
