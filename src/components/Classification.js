import {Text, View, StyleSheet} from 'react-native';

const Classification = ({imc}) => {
    
    const getClassificacao = () => {
        const nImc = parseFloat(imc);

        if(nImc < 18.5) return "Abaixo do peso";
        if(nImc >= 18.5 && nImc < 25) return "Peso normal";
        if(nImc >= 25 && nImc < 30) return "Sobrepeso";
        if(nImc >= 30 && nImc < 35) return "Obesidade grau I";
        if(nImc >= 35 && nImc < 40) return "Obesidade grau II";
        if(nImc >= 40) return "Obesidade grau III";
    };

    const styles = StyleSheet.create({
        texto: {
            width: '100%',
            height: 'auto',
            fontSize: 16,
            textAlign: 'center',
            marginTop: 10,
            padding: 10
        }
    });

    return(
        <View>
            <Text style={styles.texto}>{getClassificacao()}</Text>
        </View>
    );
};

export default Classification;