
import { useEffect, useState } from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import ArrowHome from '../../components/arrowHome';
import BotaoAzul from "../../components/botao";
import firebase from '../../firebaseConfig';
import MaskInput, { createNumberMask, Masks } from 'react-native-mask-input';


export default function CadastroJogos(jogo) {
    const [nomeGame, setNomeGame] = useState('');
    const [data, setData] = useState('');
    const [valor, setValor] = useState('');
    const [genero, setGenero] = useState('');
    const [distribuidora, setDistribuidora] = useState('');
    const [duracao, setDuracao] = useState('');

    useEffect(() => {
        setNomeGame('');
        setData('');
        setValor('');
        setGenero('');
        setDistribuidora('');
        setDuracao('');

        if (jogo && jogo.route.params) {
            setNomeGame(jogo.route.params.jogo.nomeJogo);
            setData(jogo.route.params.jogo.data);
            setValor(jogo.route.params.jogo.valor);
            setGenero(jogo.route.params.jogo.genero);
            setDistribuidora(jogo.route.params.jogo.distribuidora);
            setDuracao(jogo.route.params.jogo.duracao);
        } else {
            console.log("cadastro");
        }

    });

    const cadastrarjogos = async () => {
        try {
            if (nomeGame !== '') {
                let jogoRef = await firebase.database().ref('jogos');
                let key = jogoRef.push().key;

                jogoRef.child(key).set({
                    nomeJogo: nomeGame,
                    data: data,
                    valor: valor,
                    genero: genero,
                    distribuidora: distribuidora,
                    duracao: duracao,
                });
                alert("Cadastrado com sucesso!");
                setNomeGame('');
                setData('');
                setValor('');
                setGenero('');
                setDistribuidora('');
                setDuracao('');
                return;
            }
            alert("Nome obrigat??rio");
        } catch (error) {
            return error;
        }
    }

    const moneyMask = createNumberMask({
        prefix: ['R', '$', ' '],
        delimiter: '.',
        separator: ',',
        precision: 2,
    })

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ArrowHome />
            <Text style={styles.title}>Cadastro De Jogos</Text>
            <ScrollView style={styles.txtinputs}>

                <Text style={styles.texto}>Nome do Game:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(nome) => setNomeGame(nome)}
                    value={nomeGame} />
                <Text style={styles.texto}>Data da Aquisi????o:</Text>
                <MaskInput
                    style={styles.input}
                    onChangeText={(data) => setData(data)}
                    value={data}
                    mask={Masks.DATE_DDMMYYYY}
                />
                <Text style={styles.texto}>Valor:</Text>
                <MaskInput
                    style={styles.input}
                    onChangeText={(masked, unmasked) => setValor(masked)}
                    value={valor}
                    mask={moneyMask}
                />
                <Text style={styles.texto}>G??nero:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(gene) => setGenero(gene)}
                    value={genero} />
                <Text style={styles.texto}>Distribuidora:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(dist) => setDistribuidora(dist)}
                    value={distribuidora} />
                <Text style={styles.texto}>Dura????o do Game:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(dur) => setDuracao(dur)}
                    value={duracao} />

                <BotaoAzul disc="Cadastrar jogo" press={cadastrarjogos} />

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