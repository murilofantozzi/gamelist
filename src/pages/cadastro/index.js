
import { useNavigation } from "@react-navigation/native";
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import ArrowHome from '../../components/arrowHome';
import BotaoAzul from "../../components/botao";
import firebase from '../../firebaseConfig';

export default function Cadastro() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [descricao, setDescricao] = useState('');
    const [isChecked, setChecked] = useState(false);

    const navigation = useNavigation();

    const cadastrar = async () => {
        if (!isChecked) {
            alert("Aceite os termos de condições");
            return;
        }

        await firebase.auth().createUserWithEmailAndPassword(email, password).then((value) => {
            firebase.database().ref('usuarios').child(value.user.uid).set({
                email: email,
                nome: name,
                descricao: descricao,
                password: password,
                termo: isChecked
            });
            navigation.navigate("Jogos");
        }).catch((error) => {
            alert("aa");
        });
    }

    return (

        <KeyboardAvoidingView behavior="height" style={styles.container}>

            <ArrowHome />

            <Text style={styles.title}>Cadastre-se</Text>
            <Text style={{ color: "#fff", margin: 20 }}> Insira seus dados corretamente para entrar na sua estante de jogos!</Text>
            <ScrollView style={styles.txtinputs}>
                <Text style={styles.texto}>Nick</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(nome) => setName(nome)}
                    value={name} />
                <Text style={styles.texto}>Email</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(email) => setEmail(email)}
                    value={email} />
                <Text style={styles.texto}>Senha</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(senha) => setPassword(senha)}
                    value={password} />
                <Text style={styles.texto}>Descrição</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(descricao) => setDescricao(descricao)}
                    value={descricao} />
                <BotaoAzul disc="Criar Conta" secureTextEntry={true} press={cadastrar} />


                <View style={styles.check}>
                    <Checkbox style={{ marginTop: 8 }} value={isChecked} onValueChange={setChecked} />
                    <Text style={{ color: '#fff', marginLeft: 10, marginTop: 10 }}>
                        Ao criar uma nova conta, você tem que ler e
                    </Text>
                </View>
                <View style={styles.check}>
                    <Text style={{ color: '#fff' }}>concordar com os nossos.</Text>

                    <Text onPress={() => navigation.navigate("Termos")}
                        style={{ color: '#3D5CFF', textAlign: 'center' }}>Termos e condições.</Text>
                </View>


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
        height: "100%"
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
    button: {
        backgroundColor: "#3D5CFF",
        width: 210,
        height: 40,
        marginTop: 20,
        borderRadius: 10,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
    },
});