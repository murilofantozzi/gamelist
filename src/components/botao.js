
import React from "react";
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";


export default function Botao({ disc, press }) {
    return (
        <TouchableOpacity style={styles.button} onPress={press}>
            <Text style={styles.buttonText}>
                {disc}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#3D5CFF",
        width: 250,
        height: 40,
        marginTop: 20,
        borderRadius: 10,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: "#FFF",
    },
});