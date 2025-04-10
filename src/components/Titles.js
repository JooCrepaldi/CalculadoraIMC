import { Text, StyleSheet } from "react-native";

const Title = () => {
  return (
    <Text style={styles.title}>Calculadora de IMC</Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    backgroundColor: '#0f62fe',
    borderRadius: 20,
    color: '#d6d6d6',
    padding: 5,
  },
});

export default Title;