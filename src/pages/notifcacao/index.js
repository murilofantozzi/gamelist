
import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import InputGl from "../../components/inputGl"
import BotaoAzul from "../../components/botao"
import Checkbox from 'expo-checkbox';
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

            <ArrowHome />

            <Text style={styles.title}>Notificacao</Text>
            <ScrollView>
                <Notif />
                <Notif />
                <Notif />
                <Notif />

            </ScrollView>
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
    },

});