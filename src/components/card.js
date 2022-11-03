
import React from "react";
import { Text, StyleSheet, View, Image } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";


export default function Card({ data, press }) {
    return (
        <TouchableOpacity style={styles.card} onPress={() => press(data)}>
            <Image source={require('../assets/nfsu2.jpg')}
                style={styles.imagem}
            />
            <View style={styles.descJogo}>
                <Text style={styles.descJogo}>{data.nomeJogo}</Text>
                <Text style={styles.descJogo}>{data.distribuidora}</Text>
                <Text style={styles.descJogo}>{data.valor}</Text>
                <Text style={styles.descJogo}>{data.duracao}</Text>
                <Text style={styles.descJogo}>{data.genero}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 350,
        height: 100,
        marginTop: 10,
        marginLeft: 30,
        borderRadius: 10,
        color: '#fff',
        backgroundColor: '#2F2F42',
        flexDirection: 'row',
    },
    imagem: {
        backgroundColor: '#fff',
        marginLeft: 10,
        marginTop: 10,
        width: 73,
        height: 73,

    },
    descJogo: {
        color: '#fff',
        marginLeft: 10,
    }

});