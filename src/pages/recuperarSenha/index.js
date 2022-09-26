
import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView, Image } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import InputGl from "../../components/inputGl"
import BotaoAzul from "../../components/botao"
import Checkbox from 'expo-checkbox';
import ArrowHome from '../../components/arrowHome';

export default function Cadastro() {

    const [isChecked, setChecked] = useState(false);
    const navigation = useNavigation();
    return (

        <KeyboardAvoidingView behavior="position" style={styles.container}>

            <ArrowHome />
            <Image source={require('../../assets/logo.png')}
                style={{ width: '100%', marginTop: 50 }}
                resizeMode="contain"
            />

            <Text style={styles.title}>Recuperar Senha</Text>
            <Text style={{ color: "#fff", margin: 20 }}> Para te ajudar a recuperar sua senha, nos informe o endereço de e-mail que foi cadastrado sua conta:</Text>
            <ScrollView style={styles.txtinputs}>

                <Text style={styles.texto}>Email</Text>
                <InputGl plc="Email" />

                <BotaoAzul disc="Enviar" secureTextEntry={true} onPress={() => navigation.navigate("Login")}/>

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