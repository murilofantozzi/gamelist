
import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import ArrowHome, { } from '../../components/arrowHome';
export default function RecuperarSenha() {

    return (
        <View style={styles.container}>
            <ArrowHome />
            <Text style={styles.title}>Recuperar senha</Text>


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

    container: {
        backgroundColor: '#1F1F39',
        width: "100%",
        height: "100%",
        flexDirection: 'row',
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center"
    },
});