import { View, TextInput, TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';
import Result from './Result';
import { useState } from 'react';
import Classification from './Classification';

const FormIMC = () => {//inicialização das variáveis
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);

  const calcularIMC = () => {//função em js
    if (peso && altura) {
      const alturaMetros = parseFloat(altura) / 100;
      const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
      setImc(imcCalculado);
    }
  };

  return (//inserção do "html"
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        placeholderTextColor="#c4c4c4"
        color='#c4c4c4'
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        keyboardType="numeric"
        color='#c4c4c4'
        value={altura}
        placeholderTextColor="#c4c4c4"
        onChangeText={setAltura}
      />
      <TouchableOpacity style={styles.button} onPress={calcularIMC}>
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>
      {imc && <Result imc={imc} />}
      {imc && <Classification imc={imc} />}
    </View>
  );
};

const styles = StyleSheet.create({//CSS
  formContainer: {
    backgroundColor: '#42454f',
    padding: 16,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 7,
  },
  input: {
    height: 40,
    width: Dimensions.get('window').width - 50,
    borderColor: '#c4c4c4',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#0f62fe',
    padding: 10,
    borderRadius: 50,
    width: 220,
    alignItems: 'center',
    marginTop: 10,
    elevation: 7,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'normal',
  }
});

export default FormIMC;