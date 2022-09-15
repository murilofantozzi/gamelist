
import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import InputGl from "../../components/inputGl";

export default function Jogos() {
    return (
        <View style={styles.container}>
            <Text style={styles.title} >Jogos</Text>

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