
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import InputGl from "../../components/inputGl"
import BotaoAzul from "../../components/botao"
import Checkbox from 'expo-checkbox';
import ArrowHome from '../../components/arrowHome';

import firebase from '../../firebaseConfig';
import { async } from '@firebase/util';

export default function Conta() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        async function carregaDados() {
            await firebase.database().ref('usuarios').on('value', (snapshot) => {
                setNome(snapshot.val().nome);
                setEmail(snapshot.val().email);
            });
        }

        carregaDados();
    }, []);

    const [isChecked, setChecked] = useState(false);
    const navigation = useNavigation();

    function irHome() {
        navigation.navigate("Login");
    }

    return (

        <KeyboardAvoidingView behavior="height" style={styles.container}>

            <ArrowHome />

            <Text style={styles.title}>Minha conta</Text>

            <ScrollView style={styles.txtinputs}>
                <Text style={styles.texto}>Nick</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(nome) => setNome(nome)}
                    value={nome}/>
                <Text style={styles.texto}>Descrição</Text>
                <InputGl plc="Descrição" />
                <Text style={styles.texto}>Email</Text>
                <InputGl plc="Email" value={email} />
                <Text style={styles.texto}>Senha Atual</Text>
                <InputGl plc="********" />
                <Text style={styles.texto}>Alterar senha</Text>
                <InputGl plc="********" />

                <BotaoAzul disc="Salvar" secureTextEntry={true} onPress={() => navigation.navigate("Login")} />


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
});