
import React from "react";
import { TextInput, StyleSheet } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";


export default function InputGl(props) {
    return (
        <TextInput style={styles.input}
            placeholder={props.plc} placeholderTextColor="white"
        ></TextInput>
    );
}

const styles = StyleSheet.create({
    input: {
        marginLeft: 10,
        width: 350,
        height: 50,
        fontSize: 26,
        alignContent: "center",
        borderRadius: 10,
        backgroundColor: '#858597',
        padding: 5,
    },


});