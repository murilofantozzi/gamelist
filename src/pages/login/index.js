
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import InputGl from "../../components/inputGl";

export default function Login() {
    return (
        <View style={styles.container}>
            <Text style={styles.title} >Entre no app</Text>
            <View style={styles.txtinputs}>
                <Text style={styles.texto}>Email</Text>
                <InputGl plc='E-mail' />
                <Text style={styles.texto}>Senha</Text>
                <InputGl plc='Senha' />
                <Text style={styles.texto}>Esqueceu a senha?</Text>
                <View style={styles.buttonCont}>
                    <TouchableOpacity style={styles.button}><Text style={styles.texto}>
                        Entrar
                    </Text></TouchableOpacity>
                </View>
                <Text style={styles.texto}>Não possui uma conta? Cadastre-se aqui</Text>
            </View>
        </View>
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
    txtinputs: {
        fontSize: 10,
        alignContent: "center",
        backgroundColor: '#3E3E55',
        color: "white",
    },
    container: {
        backgroundColor: '#1F1F39',
        width: "100%",
        height: "100%",

    },
    texto: {
        color: "white",
        marginTop: "5%",
        marginLeft: "5%"
    },
    button: {
        backgroundColor: "blue",
        width: 150,
        height: 50,
        marginLeft: "30%",
        alignItems: "center",
        marginTop: 10,
        borderRadius: 10,
        padding: 5,
    },



});