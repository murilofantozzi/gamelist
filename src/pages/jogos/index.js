
import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import InputGl from "../../components/inputGl";
import Card from "../../components/card";

export default function Jogos() {
    return (
        <View style={styles.container}>
            <Text style={styles.title} >Estante de Jogos</Text>
            <InputGl plc={"Procure seu jogo"}>
            </InputGl>
            <Text style={styles.title}>Jogos cadastrados:</Text>
            <View style={styles.carrosel}>
                <TouchableOpacity><Text style={styles.itemcarrossel1}>Todos</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.itemcarrossel}>Populares</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.itemcarrossel}>Novos</Text></TouchableOpacity>
            </View>
            <View>
                <Card />
                <Card />
                <Card />
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

    container: {
        backgroundColor: '#1F1F39',
        width: "100%",
        height: "100%",
    },

    carrosel: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    itemcarrossel: {
        backgroundColor: '#858597',
        borderRadius: 30,
        marginLeft: 20,
        padding: 5,
        color: '#fff',
    },

    itemcarrossel1: {
        backgroundColor: '#3D5CFF',
        borderRadius: 30,
        marginLeft: 30,
        padding: 5,
        color: '#fff',
    }


});