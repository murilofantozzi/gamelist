
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
        marginLeft: "5%",
        width: "90%",
        fontSize: 26,
        alignContent: "center",
        backgroundColor: '#858597',
        borderRadius: 10,
        height: "20%",
    },


});