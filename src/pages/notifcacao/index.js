
import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import ArrowHome from '../../components/arrowHome';
import Notif from '../../components/notif';

export default function Notificacao() {

    const [isChecked, setChecked] = useState(false);
    const navigation = useNavigation();

    function irHome() {
        navigation.navigate("Login");
    }

    return (

        <KeyboardAvoidingView behavior="height" style={styles.container}>

            <View style={styles.container}>
                <ArrowHome />

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

});