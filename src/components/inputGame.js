
import React from "react";
import { TextInput, StyleSheet } from 'react-native';


export default function InputGame(props) {
    return (
        <TextInput style={styles.input}
            placeholder={props.plc}
            placeholderTextColor="white"
            secureTextEntry={props.src}
        ></TextInput>
    );
}

const styles = StyleSheet.create({
    input: {
        marginLeft: 10,
        width: 350,
        height: 40,
        fontSize: 16,
        alignContent: "center",
        borderRadius: 10,
        borderColor: '#fff',
        borderBottomColor: '#fff',
        borderWidth: 1,
        borderStyle: "solid",
        placeholderTextColor: '#fff',
        color: '#fff',
        padding: 5,
    },


});