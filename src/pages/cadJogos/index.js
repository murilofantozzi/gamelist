
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import BotaoAzul from "../../components/botao"
import ArrowHome from '../../components/arrowHome';
import InputGl from "../../components/inputGl";
import { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';


export default function CadastroJogos() {

    const [nomeGame, setNomeGame] = useState('');
    const [data, setData] = useState('');
    const [valor, setValor] = useState('');
    const [genero, setGenero] = useState('');
    const [distribuidora, setDistribuidora] = useState('');
    const [duracao, setDuracao] = useState('');

    const navigation = useNavigation();

    const jogos = async () => {
        await firebase.database().ref('jogos').set({
            nomeJogo: nomeGame,
            data: data,
            valor: valor,
            genero: genero,
            distribuidora: distribuidora,
            duracao: duracao,
        });
    }

    return (

        <KeyboardAvoidingView style={styles.container}>

            <ArrowHome />

            <Text style={styles.title}>Cadastro Descrição Jogos</Text>
            <ScrollView style={styles.txtinputs}>

                <Text style={styles.texto}>Nome do Game:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(nome) => setNomeGame(nome)}
                    value={nomeGame} />
                <Text style={styles.texto}>Data da Aquisição:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(data) => setData(data)}
                    value={data} />
                <Text style={styles.texto}>Valor:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(valo) => setValor(valo)}
                    value={valor} />
                <Text style={styles.texto}>Gênero:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(gene) => setGenero(gene)}
                    value={genero} />
                <Text style={styles.texto}>Distribuidora::</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(dist) => setDistribuidora(dist)}
                    value={distribuidora} />
                <Text style={styles.texto}>Duração do Game::</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(dur) => setDuracao(dur)}
                    value={duracao} />

                <BotaoAzul disc="Cadastrar jogo" press={jogos} />

            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: "white",
        textAlign: 'center',
        marginBottom: "5%",
        marginTop: "3%"
    },

    container: {
        backgroundColor: '#1F1F39',
        width: "100%",
        height: "100%",

    },

    txtinputs: {
        alignContent: "center",
        backgroundColor: '#2F2F42',
        color: "white",
        height: "100%",


    },
    texto: {
        color: "white",
        marginTop: 15,
        marginLeft: 15,
        marginBottom: 6,
    },
    check: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
    },
    input: {
        marginLeft: 10,
        width: 350,
        height: 40,
        fontSize: 16,
        alignContent: "center",
        borderRadius: 10,
        backgroundColor: '#3E3E55',
        placeholderTextColor: '#fff',
        color: '#fff',
        padding: 5,
    },
});