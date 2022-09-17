
import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";

export default function RecuperarSenha() {

    const navigation = useNavigation();

    function goBack() {
        navigation.navigate("Login");
      }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goBack}>
            <Icon name="arrowleft" size={32} color="#fff" />
            <Text style={styles.title}>Recuperar senha</Text>
            </TouchableOpacity>

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