
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import InputGl from "../../components/inputGl";
import InputPsw from "../../components/inputPsw";
import { useNavigation } from "@react-navigation/native";

export default function Login() {


    const navigation = useNavigation();

    function RecuperarSenha() {
        navigation.navigate("RecuperarSenha");
    }

    function Cadastro() {
        navigation.navigate("Cadastro");
    }

    function Jogos() {
        navigation.navigate("Jogos");
    }

    return (
        <KeyboardAvoidingView behavior="position" style={styles.container}>
            <Image source={require('../../assets/logo.png')}
                style={{ width: '100%', marginTop: 50 }}
                resizeMode="contain"
            />
            <Text style={styles.title} >GameList</Text>

            <View style={styles.txtinputs}>
                <Text style={styles.texto}>Email</Text>

                <InputGl plc='E-mail' />

                <Text style={styles.texto}>Senha</Text>

                <InputPsw plc='Senha' />

                <TouchableOpacity onPress={RecuperarSenha}><Text style={styles.textoDir}>
                    Esqueceu a senha?
                </Text>
                </TouchableOpacity>

                <View>
                    <TouchableOpacity onPress={Jogos} style={styles.button}><Text style={styles.buttonText}>Entrar
                    </Text></TouchableOpacity>
                </View>

                <View style={styles.check}>
                    <Text style={{ color: '#fff' }}>Não possui uma conta?</Text>

                    <Text onPress={() => navigation.navigate("Cadastro")}
                        style={{ color: '#3D5CFF', textAlign: 'center' }}> Cadastre-se aqui</Text>
                </View>

            </View>

        </KeyboardAvoidingView >
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: "white",
        textAlign: 'center',
        marginBottom: "5%",
        marginTop: "5%",
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
        flex: 1,

    },
    texto: {
        color: "white",
        marginTop: 15,
        marginLeft: 15,
    },

    textoDir: {
        color: "white",
        marginTop: 10,
        textAlign: 'right',
        marginRight: 40,
    },
    button: {
        backgroundColor: "#3D5CFF",
        width: 250,
        height: 40,
        marginTop: 10,
        borderRadius: 10,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: "#FFF",
    },

    buttonCont: {
        color: '#3D5CFF',
        marginTop: 10,
    },

    check: {
        flexDirection: 'row',
        justifyContent: "center",
        marginTop: 10,
        marginLeft: 60,
    }


});