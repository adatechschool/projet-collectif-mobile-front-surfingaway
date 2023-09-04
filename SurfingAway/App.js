
import { StyleSheet, StatusBar } from 'react-native';
import HomeTopTabs from './src/components/HomeTopTabs';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {

  return (
    <PaperProvider>
      <NavigationContainer>
        <HomeTopTabs />
      </NavigationContainer>
    </PaperProvider>
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
