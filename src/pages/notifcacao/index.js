
import React from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native';
import ArrowHome from '../../components/arrowHome';
import Notif from '../../components/notif';

export default function Notificacao() {

    return (

        <KeyboardAvoidingView behavior="height" style={styles.container1}>

            <ArrowHome />
            <View style={styles.container}>

                <Text style={styles.title}>Notificacao</Text>
                <ScrollView>
                    <Notif notifica="Novidades para você: Fortinite 30% off na Steam nesse final de semana " />
                    <Notif notifica="Novidades para você: Disney adia lançamento de starwars para PSP e ..." />
                    <Notif notifica="Novidades para você: Fortinite 30% off na Steam nesse final de semana  " />
                    <Notif notifica="Novidades para você: Fortinite 30% off na Steam nesse final de semana  " />
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
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
        alignContent: "center",
        alignSelf: "center",
        alignItems: 'center',
    },
    container1: {
        backgroundColor: '#1F1F39',
        width: "100%",
        height: "100%",
    },
});