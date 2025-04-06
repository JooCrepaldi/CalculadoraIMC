import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Titles';
import FormIMC from './src/components/formIMC';
import Classification from './src/components/Classification';

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <FormIMC />
      <Classification />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#cccc',
  },
});