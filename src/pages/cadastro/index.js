
import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function Cadastro() {
    return (
        <View style={styles.container}>
            <Text style={styles.title} >Cadastro</Text>

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
    },
});