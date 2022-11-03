
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import InputGl from "../../components/inputGl";
import Card from "../../components/card";
import firebase from '../../firebaseConfig';

export default function Jogos() {

    const [jogos, setJogos] = useState([]);

    useEffect(() => {
        async function getJogos(){
            await firebase.database().ref('jogos').on('value', (snapshot) => {
                setJogos([]);
                snapshot.forEach((jogo) => {
                    let data = {
                        key: jogo.key,
                        nomeJogo: jogo.val().nomeJogo,
                        distribuidora: jogo.val().distribuidora,
                        valor: jogo.val().valor,
                        duracao: jogo.val().duracao,
                        genero: jogo.val().genero
                    };
                    setJogos(old => [...old, data]);
                })
            });
        }

        getJogos();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title} >Estante de Jogos</Text>
            <InputGl plc={"Procure seu jogo"}>
            </InputGl>
            <View style={styles.carrosel}>
                <TouchableOpacity><Text style={styles.itemcarrossel1}>Todos</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.itemcarrossel}>Populares</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.itemcarrossel}>Novos</Text></TouchableOpacity>
            </View>
            <View>
                <FlatList data={jogos} keyExtractor={(item) => item.key} renderItem={({item}) => <Card data={item}/>} />
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
        marginTop: "3%"
    },
    itemcarrossel: {
        backgroundColor: '#858597',
        borderRadius: 30,
        // marginLeft: 20,
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