
import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import InputGl from "../../components/inputGl";

export default function Login() {
    return (
        <View style={styles.container}>
            <Text style={styles.title} >Entre no app</Text>
            <View style={styles.txtinputs}>
                <TouchableOpacity>
                    <Text style={styles.texto}>Email</Text>
                    <InputGl plc='E-mail' />
                    <Text style={styles.texto}>Senha</Text>
                    <InputGl plc='Senha' />
                </TouchableOpacity>
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
        fontSize: 20,
        alignContent: "center",
        backgroundColor: '#3E3E55',
        color: "white",
    },
    container: {
        backgroundColor: '#1F1F39',
        width: "100%",
        height: "100%",
    },
    inptmail: {
    },

    texto: {
        color: "white",
        marginTop: "5%",
        marginLeft: "5%"
    }

});