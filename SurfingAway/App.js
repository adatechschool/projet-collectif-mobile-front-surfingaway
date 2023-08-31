import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddSpot from './src/screens/AddSpot';
import Home from './src/screens/Home';
import SpotPage from './src/screens/SpotPage';
import Weather from './src/screens/Weather';
import Spots from './src/screens/Spots';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Surfez safe entre meufs</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
