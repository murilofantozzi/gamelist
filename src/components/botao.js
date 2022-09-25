
import React from "react";
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";


export default function Botao(props) {
    return (
        <View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    {props.disc}
                </Text>
            </TouchableOpacity>
        </View>
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