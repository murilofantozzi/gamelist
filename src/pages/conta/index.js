
import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import InputGl from "../../components/inputGl"
import BotaoAzul from "../../components/botao"
import Checkbox from 'expo-checkbox';
import ArrowHome from '../../components/arrowHome';

export default function Conta() {

    const [isChecked, setChecked] = useState(false);
    const navigation = useNavigation();

    function irHome() {
        navigation.navigate("Login");
    }
    
    return (

        <KeyboardAvoidingView behavior="height" style={styles.container}>

            <ArrowHome />

            <Text style={styles.title}>Conta</Text>
            <Text style={{ color: "#fff", margin: 20 }}> Insira seus dados corretamente para entrar na sua estante de jogos!</Text>
            <ScrollView style={styles.txtinputs}>
                <Text style={styles.texto}>Nick</Text>
                <InputGl plc="Nick" />
                <Text style={styles.texto}>Email</Text>
                <InputGl plc="Email" />
                <Text style={styles.texto}>Senha</Text>
                <InputGl plc="Senha" />
                <Text style={styles.texto}>Descrição</Text>
                <InputGl plc="Descrição" />

                <BotaoAzul disc="Criar Conta" secureTextEntry={true} onPress={() => navigation.navigate("Login")} />
             

                <View style={styles.check}>
                    <Checkbox style={{ marginTop: 8 }} value={isChecked} onValueChange={setChecked} />
                    <Text style={{ color: '#fff', marginLeft: 10, marginTop: 10 }}>
                        Ao criar uma nova conta, você tem que ler e
                    </Text>
                </View>
                <View style={styles.check}>
                    <Text style={{ color: '#fff' }}>concordar com os nossos.</Text>

                    <Text onPress={() => navigation.navigate("Termos")}
                        style={{ color: '#3D5CFF', textAlign: 'center' }}>Termos e condições.</Text>
                </View>


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
    },

    txtinputs: {
        alignContent: "center",
        backgroundColor: '#2F2F42',
        color: "white",
        height: "100%"
    },
    texto: {
        color: "white",
        marginTop: 15,
        marginLeft: 15,
        marginBottom: 6,
    },
    check: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
    }

});