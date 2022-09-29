
import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import BotaoAzul from "../../components/botao"
import Checkbox from 'expo-checkbox';
import ArrowHome from '../../components/arrowHome';
import InputGl from "../../components/inputGl";
import InputGame from "../../components/inputGame";

export default function CadastroJogos() {

    const [isChecked, setChecked] = useState(false);
    const navigation = useNavigation();

    function irHome() {
        navigation.navigate("Login");
    }

    return (

        <KeyboardAvoidingView behavior="position" style={styles.container}>

            <ArrowHome />

            <Text style={styles.title}>CadastroJogos</Text>
            <ScrollView style={styles.txtinputs}>

                <Text style={styles.texto}>Nome do Game:</Text>
                <InputGame />
                <Text style={styles.texto}>Data da Aquisição:</Text>
                <InputGame plc="_ / _ / _ /" />
                <Text style={styles.texto}>Valor:</Text>
                <InputGame plc="R$0,00" />
                <Text style={styles.texto}>Gênero:</Text>
                <InputGame plc="Descrição" />
                <Text style={styles.texto}>Distribuidora::</Text>
                <InputGame plc="Descrição" />
                <Text style={styles.texto}>Duração do Game::</Text>
                <InputGame plc="0h0min" />

                <BotaoAzul disc="Criar Conta" secureTextEntry={true} onPress={() => navigation.navigate("Login")} />

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
    }

});