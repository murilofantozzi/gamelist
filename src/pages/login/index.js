
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import InputGl from "../../components/inputGl";


export default function Login() {

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')}
                style={{ width: '100%' }}
                resizeMode="contain"
            />
            <Text style={styles.title} >GameList</Text>
            <View style={styles.txtinputs}>
                <Text style={styles.texto}>Email</Text>

                <InputGl plc='E-mail' />
                <Text style={styles.texto}>Senha</Text>

                <InputGl plc='Senha' />
                <Text style={styles.texto}>Esqueceu a senha?</Text>

                <View style={styles.buttonCont}>
                    <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Entrar
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
        alignContent: "center",
        backgroundColor: '#2F2F42',
        height: "100%",
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
        backgroundColor: "#3D5CFF",
        width: 250,
        height: 40,
        alignItems: "center",
        marginTop: 10,
        borderRadius: 10,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: "#FFF",
    }



});