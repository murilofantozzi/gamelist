
import React from "react";
import { TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';



export default function InputPsw(props) {
    return (
        <TextInput style={styles.input}
            placeholder={props.plc}
            placeholderTextColor="white"
            secureTextEntry={true}
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
        backgroundColor: '#3E3E55',
        placeholderTextColor: '#fff',
        color: '#fff',
        padding: 5,
    },


});