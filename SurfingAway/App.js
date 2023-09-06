import HomeTopTabs from './src/components/HomeTopTabs';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { registerTranslation, fr } from 'react-native-paper-dates';

registerTranslation('fr', fr);

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <HomeTopTabs />
      </NavigationContainer>
    </PaperProvider>
  );
}

//je le garde au cas où pour la barre de status
/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight || 0
  },
});
 */
export default App
